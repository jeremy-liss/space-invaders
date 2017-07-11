import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import state from './state'
import detectCharacterMovement from './lib/detectCharacterMovement'
import moveInvaders from './lib/moveInvaders'
import checkHit from './lib/checkHit'

setInterval(()=>{
  moveInvaders(state)
}, 500)

setInterval(()=>{
  detectCharacterMovement()
  if(state.shoot === true){
    state.shot.bottom += 50
    checkHit()
  }
  render()
}, 1000/24)

const target = document.getElementById('root')

const render = ()=> {
  const view = App(state)
  ReactDOM.render(view, target)
}

render()
