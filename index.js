import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import initialState from './state'
import playerControl from './lib/playerControl'
import moveInvaders from './lib/moveInvaders'
import checkHit from './lib/checkHit'
import dropBomb from './lib/dropBomb'
import populateInvaders from './lib/populateInvaders'
import checkAllDead from './lib/checkAllDead'

let state = initialState

populateInvaders(state)

state.restart = () => {
  window.location.reload()
}

let game = null

const invaderMovement = () => {
  clearInterval(game)

   game = setInterval(() => {
    moveInvaders(state)
    let id = Math.floor(Math.random() * 54)
    dropBomb(id)
  }, 500)

  if (state.playerHit) {
    setTimeout( () => {
      invaderMovement()
      state.playerHit = false
    }, 1000)
  }
}

invaderMovement()

setInterval( () => {
  playerControl()
  if (state.shoot){
    state.shot.bottom += 50
  }
  checkHit()
  if (state.playerHit){
    invaderMovement()
  }
  checkAllDead(state)  
  render()
}, 1000/24)

const target = document.getElementById('root')

const render = () => {
  const view = App(state)
  ReactDOM.render(view, target)
}

render()

export { state }
