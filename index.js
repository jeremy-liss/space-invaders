import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import initialState from './state'
import playerControl from './lib/playerControl'
import moveInvaders from './lib/moveInvaders'
import checkHit from './lib/checkHit'
import dropBomb from './lib/dropBomb'

let state = initialState

let invaderId = 0

const populateInvaders = () => {
  state.invaders.forEach((rows) => {
    rows.forEach((invader) => {
      invader.id = invaderId
      invader.alive = true
      if (invaderId < 11){
        invader.points = 40
        invader.image1 = '../images/invaderA1.jpg'
        invader.image2 = '../images/invaderA2.jpg'
      }
      else if (invaderId > 10 && invaderId < 33) {
        invader.points = 20
        invader.image1 = '../images/invader1.jpg'
        invader.image2 = '../images/invader2.jpg'
      } else {
        invader.points = 10
        invader.image1 = '../images/invaderB1.jpg'
        invader.image2 = '../images/invaderB2.jpg'
      }
      invaderId++
    })
  })
}

populateInvaders()

state.restart = () => {
  window.location.reload()
}

let game = null

const invaderMovement = () => {
  clearInterval(game)

   game = setInterval(() => {
    moveInvaders(state)
    let id = Math.floor(Math.random() * invaderId)
    dropBomb(id)
  }, 500)

  if (state.playerHit) {
    setTimeout( () => {
      invaderMovement()
      state.playerHit = false
    }, 2000)
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
  render()
}, 1000/24)

const target = document.getElementById('root')

const render = () => {
  const view = App(state)
  ReactDOM.render(view, target)
}

render()

export { state }
