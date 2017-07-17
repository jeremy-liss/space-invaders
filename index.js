import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import state from './state'
import playerControl from './lib/playerControl'
import moveInvaders from './lib/moveInvaders'
import checkHit from './lib/checkHit'
import dropBomb from './lib/dropBomb'

let invaderId = 0

const populateInvaders =()=>{
  state.invaders.forEach((rows)=>{
    rows.forEach((invader)=>{
      invader.id = invaderId
      invader.alive = true
      invader.points =
        (invaderId < 11 ) ? 50 : (invaderId < 22) ? 40 : (invaderId < 33) ? 30 : (invaderId < 44) ? 20 : 10
      invaderId++
    })
  })
}

populateInvaders()

setInterval(()=>{
  moveInvaders(state)
  let id = Math.floor(Math.random() * invaderId)
  dropBomb(id)
}, 500)

setInterval(()=>{
  playerControl()
  if(state.shoot){
    state.shot.bottom += 50
  }
  checkHit()
  render()
}, 1000/24)

const target = document.getElementById('root')

const render = ()=> {
  const view = App(state)
  ReactDOM.render(view, target)
}

render()
