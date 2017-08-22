import { state } from '../index'
import move from './moveInvaders'
import playerControl from './playerControl'
import dropBomb from './dropBomb'

let invaderTimer = null
let playerTimer = null

const game = (state) => {

  clearInterval(invaderTimer)
  clearInterval(playerTimer)

   invaderTimer = setInterval( () => {
    move.moveInvaders(state)
    let id = Math.floor(Math.random() * 54)
    dropBomb(id)
  }, 500)

  playerTimer = setInterval( () => {
    playerControl()
    if (state.shoot) {
      state.shot.bottom += 50
    }
  }, 1000/24)

  if (state.playerHit) {
    unpauseGame()
  }
}

const unpauseGame = () => {
  setTimeout( () => {
    state.playerHit = false
    game(state)
  }, 1000)
}

export default game
