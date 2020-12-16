/*
 * Copyright 2019 Horizon Blockchain Games Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#![cfg_attr(not(feature = "std"), no_std)]

use arcadeum::{
    store::{Context, State, Tester},
    Player,
};

use rand::RngCore;
use serde::{Deserialize, Serialize};

extern crate alloc;

use {
    alloc::{
        boxed::Box,
        format,
        string::{String, ToString},
        vec,
        vec::Vec,
    },
    core::{future::Future, pin::Pin},
};

#[cfg(not(feature = "std"))]
macro_rules! println {
    () => {
        ()
    };
    ($($arg:tt)*) => {
        ()
    };
}

#[cfg(feature = "std")]
arcadeum::bind!(Coin);

#[derive(Serialize, Deserialize, Clone, Debug, Default)]
struct Coin {
    nonce: u8,
    score: [u8; 2],
}

impl State for Coin {
    type ID = [u8; 16];
    type Nonce = u8;
    type Action = bool;
    type Event = u32;
    type Secret = ();

    fn version() -> &'static [u8] {
        "Coin".as_bytes()
    }

    fn deserialize(data: &[u8]) -> Result<Self, String> {
        if data.len() != 1 + 2 {
            return Err("data.len() != 1 + 2".to_string());
        }

        Ok(Self {
            nonce: data[0],
            score: [data[1], data[2]],
        })
    }

    fn is_serializable(&self) -> bool {
        true
    }

    fn serialize(&self) -> Option<Vec<u8>> {
        Some(vec![self.nonce, self.score[0], self.score[1]])
    }

    fn verify(&self, player: Option<crate::Player>, _action: &Self::Action) -> Result<(), String> {
        if player != Some(self.nonce % 2) {
            return Err("player != Some(self.nonce % 2)".to_string());
        }

        Ok(())
    }

    fn apply(
        mut self,
        player: Option<crate::Player>,
        action: &Self::Action,
        mut context: Context<Self::Secret, Self::Event>,
    ) -> Pin<Box<dyn Future<Output = (Self, Context<Self::Secret, Self::Event>)>>> {
        Box::pin({
            let action = *action;

            async move {
                let random = context.random().await.next_u32();

                context.log(random);

                if action == (random % 2 != 0) {
                    self.score[usize::from(player.unwrap())] += 1;
                }

                self.nonce += 1;

                (self, context)
            }
        })
    }
}

#[test]
fn test_coin() {
    let mut tester = Tester::new(
        Coin::default(),
        Default::default(),
        Vec::new(),
        |player, _, _| println!("[{:?}: ready]", player),
        |player, target, event| println!("[{:?} (target {:?}): log] {:?}", player, target, event),
    )
    .unwrap();

    // In your tests, you can assert that specific information was revealed during application of an action.
    // This is returned as ProofAction structs, so you can use debug or serialized representations to make assertions.

    let revealed = format!("{:#?}", tester.apply(Some(0), &true).unwrap());

    let expected = if cfg!(not(feature = "no-crypto")) {
        "[
    ProofAction {
        player: Some(
            0,
        ),
        action: Play(
            RandomCommit(
                0xa60607651e32731051080ee2dcaae8aa8659d9873e43051a7321187f5376404d,
            ),
        ),
    },
    ProofAction {
        player: Some(
            1,
        ),
        action: Play(
            RandomReply(
                0x05b6344215102dc0ae78df9a78c018db,
            ),
        ),
    },
    ProofAction {
        player: Some(
            0,
        ),
        action: Play(
            RandomReveal(
                0x0624278306003680d4b0951350801092,
            ),
        ),
    },
]"
    } else {
        "[
    ProofAction {
        player: Some(
            0,
        ),
        action: Play(
            RandomCommit(
                0x860a0200922d64b449bd06a748449f4b7e3730539e72eb37474dc5d851b66cbf,
            ),
        ),
    },
    ProofAction {
        player: Some(
            1,
        ),
        action: Play(
            RandomReply(
                0xa3c018c0a3c018dba535281b632df003,
            ),
        ),
    },
    ProofAction {
        player: Some(
            0,
        ),
        action: Play(
            RandomReveal(
                0xc2801080c2801092c62630124236a002,
            ),
        ),
    },
]"
    };

    assert_eq!(revealed, expected);

    tester.apply(Some(1), &true).unwrap();
    tester.apply(Some(0), &true).unwrap();
    tester.apply(Some(1), &true).unwrap();
    tester.apply(Some(0), &true).unwrap();
    tester.apply(Some(1), &true).unwrap();
    tester.apply(Some(0), &true).unwrap();
}
