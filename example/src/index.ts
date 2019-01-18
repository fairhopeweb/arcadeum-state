import * as client from 'client'

function log(state: client.State): void {
  console.log(state)
  console.log(`winner: ${state.winner()}`)
  console.log(`next player: ${state.next_player()}`)
  console.log()
}

;(() => {
  try {
    let state = client.State.new()
    log(state)
    state = state.next(new Uint8Array([1, 0, 0]))
    log(state)
    state = state.next(new Uint8Array([2, 1, 0]))
    log(state)
    state = state.next(new Uint8Array([1, 0, 1]))
    log(state)
    state = state.next(new Uint8Array([2, 1, 1]))
    log(state)
    state = state.next(new Uint8Array([1, 0, 2]))
    log(state)
    state = state.next(new Uint8Array([2, 1, 2]))
    log(state)
  } catch (e) {
    console.log(`error: ${e}`)
  }
})()
