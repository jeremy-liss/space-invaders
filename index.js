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
      invader.points =
        (invaderId < 11) ? 50 : (invaderId < 22) ? 40 : (invaderId < 33) ? 30 : (invaderId < 44) ? 20 : 10
      invader.image1 = (invaderId > 10 && invaderId < 22 || invaderId > 32 && invaderId < 44) ? '../images/invaderA1.jpg' : '../images/invader1.jpg'
      invader.image2 = (invaderId > 10 && invaderId < 22 || invaderId > 32 && invaderId < 44) ? '../images/invaderA2.jpg' : '../images/invader2.jpg'
      invader.activeImage = invader.image1
      invaderId++
    })
  })
}

populateInvaders()

const restart = () => {
  window.location.reload()
}

state.restart = restart

let game = null

const invaderMovement = () => {
  clearInterval(game)

   game = setInterval(() => {
    moveInvaders(state)
    let id = Math.floor(Math.random() * invaderId)
    dropBomb(id)
  }, 500)

  if (state.playerHit){
    setTimeout(()=>{
      invaderMovement()
      state.playerHit = false
    }, 500)
  }
}

invaderMovement()

setInterval(()=>{
  playerControl()
  if(state.shoot){
    state.shot.bottom += 50
  }
  checkHit()
  if (state.playerHit){
    invaderMovement()
  }
  render()
}, 1000/24)

const target = document.getElementById('root')

const render = ()=> {
  const view = App(state)
  ReactDOM.render(view, target)
}

render()

export {state}
