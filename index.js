import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import state from './state'
import playerControl from './lib/playerControl'
import moveInvaders from './lib/moveInvaders'
import checkHit from './lib/checkHit'
import dropBomb from './lib/dropBomb'

setInterval(()=>{
  moveInvaders(state)
  let id = Math.floor(Math.random() * 25).toString()
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
