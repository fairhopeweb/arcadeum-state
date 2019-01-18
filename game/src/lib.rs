#![cfg_attr(not(feature = "std"), no_std)]
#![feature(try_from)]

#[cfg(feature = "bindings")]
use wasm_bindgen::prelude::*;

#[cfg(feature = "std")]
use std::convert::Into;

#[cfg(not(feature = "std"))]
use core::convert::TryFrom;
#[cfg(feature = "std")]
use std::convert::TryFrom;

#[cfg_attr(feature = "bindings", wasm_bindgen)]
#[derive(Clone, Copy)]
pub struct State {
    nonce: i32,
    board: [[Player; 3]; 3],
}

#[cfg_attr(feature = "bindings", wasm_bindgen)]
impl State {
    // https://github.com/rustwasm/wasm-bindgen/issues/1191
    // #[cfg_attr(feature = "bindings", wasm_bindgen(constructor))]
    pub fn new() -> Self {
        State {
            nonce: 0,
            board: [
                [Player::None, Player::None, Player::None],
                [Player::None, Player::None, Player::None],
                [Player::None, Player::None, Player::None],
            ],
        }
    }

    pub fn winner(&self) -> Player {
        if self.board[0][0] != Player::None
            && self.board[0][0] == self.board[0][1]
            && self.board[0][1] == self.board[0][2]
        {
            self.board[0][0]
        } else if self.board[1][0] != Player::None
            && self.board[1][0] == self.board[1][1]
            && self.board[1][1] == self.board[1][2]
        {
            self.board[1][0]
        } else if self.board[2][0] != Player::None
            && self.board[2][0] == self.board[2][1]
            && self.board[2][1] == self.board[2][2]
        {
            self.board[2][0]
        } else if self.board[0][0] != Player::None
            && self.board[0][0] == self.board[1][0]
            && self.board[1][0] == self.board[2][0]
        {
            self.board[0][0]
        } else if self.board[0][1] != Player::None
            && self.board[0][1] == self.board[1][1]
            && self.board[1][1] == self.board[2][1]
        {
            self.board[0][1]
        } else if self.board[0][2] != Player::None
            && self.board[0][2] == self.board[1][2]
            && self.board[1][2] == self.board[2][2]
        {
            self.board[0][2]
        } else if self.board[0][0] != Player::None
            && self.board[0][0] == self.board[1][1]
            && self.board[1][1] == self.board[2][2]
        {
            self.board[0][0]
        } else if self.board[0][2] != Player::None
            && self.board[0][2] == self.board[1][1]
            && self.board[1][1] == self.board[2][0]
        {
            self.board[0][2]
        } else {
            Player::None
        }
    }

    pub fn next_player(&self) -> Player {
        if self.winner() != Player::None {
            return Player::None;
        }

        match self.nonce {
            0 | 2 | 4 | 6 | 8 => Player::One,
            1 | 3 | 5 | 7 => Player::Two,
            _ => Player::None,
        }
    }

    pub fn next(&self, action: &[u8]) -> Result<State, Error> {
        if action.len() != 3 {
            return Err(ErrorCode::WrongLength.into());
        }

        let player = Player::try_from(action[0])?;

        if player == Player::None || player != self.next_player() {
            return Err(ErrorCode::WrongTurn.into());
        }

        let (row, column) = (action[1] as usize, action[2] as usize);

        if row >= 3 {
            return Err(ErrorCode::BadRow.into());
        }

        if column >= 3 {
            return Err(ErrorCode::BadColumn.into());
        }

        if self.board[row][column] != Player::None {
            return Err(ErrorCode::AlreadyPlayed.into());
        }

        let mut next = *self;
        next.nonce += 1;
        next.board[row][column] = player;
        Ok(next)
    }
}

#[derive(PartialEq, Eq, Clone, Copy)]
pub enum Player {
    None = 0,
    One = 1,
    Two = 2,
}

impl TryFrom<u8> for Player {
    type Error = Error;

    fn try_from(value: u8) -> Result<Self, Self::Error> {
        match value {
            1 => Ok(Player::One),
            2 => Ok(Player::Two),
            _ => Err(ErrorCode::NotPlayer.into()),
        }
    }
}

#[cfg(feature = "bindings")]
impl wasm_bindgen::describe::WasmDescribe for Player {
    fn describe() {
        wasm_bindgen::describe::inform(wasm_bindgen::describe::I32)
    }
}

#[cfg(feature = "bindings")]
impl wasm_bindgen::convert::IntoWasmAbi for Player {
    type Abi = i32;

    fn into_abi(self, _extra: &mut wasm_bindgen::convert::Stack) -> Self::Abi {
        self as Self::Abi
    }
}

#[cfg(not(feature = "bindings"))]
type Error = i32;
#[cfg(feature = "bindings")]
type Error = JsValue;

enum ErrorCode {
    WrongLength,
    NotPlayer,
    WrongTurn,
    BadRow,
    BadColumn,
    AlreadyPlayed,
}

impl Into<Error> for ErrorCode {
    fn into(self) -> Error {
        (self as i32).into()
    }
}
