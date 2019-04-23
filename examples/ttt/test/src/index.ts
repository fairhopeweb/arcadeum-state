/*
 * Arcadeum blockchain game framework
 * Copyright (C) 2019  Horizon Blockchain Games Inc.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3.0 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
 */

import * as arcadeum from 'arcadeum-bindings'
import * as ttt from 'arcadeum-ttt'
import * as child_process from 'child_process'
import * as ethers from 'ethers'
import * as path from 'path'

const owner = ethers.Wallet.fromMnemonic(
  `winter off snap small sleep debate cheap drill elevator glove caution once`
)

const client1 = child_process.fork(path.join(__dirname, `client-async`))
const client2 = child_process.fork(path.join(__dirname, `client-sync`))

const send = (player: arcadeum.Player, message: arcadeum.Message) => {
  switch (player) {
    case arcadeum.Player.One:
      console.log(
        `server (${process.pid}) > client 1 (${
          client1.pid
        }): ${ethers.utils.hexlify(message.encoding)}`
      )

      client1.send(ethers.utils.hexlify(message.encoding))
      break

    case arcadeum.Player.Two:
      console.log(
        `server (${process.pid}) > client 2 (${
          client2.pid
        }): ${ethers.utils.hexlify(message.encoding)}`
      )

      client2.send(ethers.utils.hexlify(message.encoding))
      break
  }
}

const server = {
  account1: undefined as string | undefined,
  account2: undefined as string | undefined,
  server: undefined as arcadeum.Server | undefined
}

client1.on(`message`, (message: any) => {
  console.log(`server (${process.pid}) < client 1 (${client1.pid}): ${message}`)

  if (server.account1 === undefined) {
    server.account1 = message

    if (server.account2 !== undefined) {
      server.server = new arcadeum.Server(
        ttt.Game,
        owner,
        server.account1,
        server.account2,
        new Uint8Array(),
        new Uint8Array(),
        new Uint8Array(),
        send
      )
    }
  } else {
    server.server.receive(ethers.utils.arrayify(message))
  }
})

client2.on(`message`, (message: any) => {
  console.log(`server (${process.pid}) < client 2 (${client2.pid}): ${message}`)

  if (server.account2 === undefined) {
    server.account2 = message

    if (server.account1 !== undefined) {
      server.server = new arcadeum.Server(
        ttt.Game,
        owner,
        server.account1,
        server.account2,
        new Uint8Array(),
        new Uint8Array(),
        new Uint8Array(),
        send
      )
    }
  } else {
    server.server.receive(ethers.utils.arrayify(message))
  }
})
