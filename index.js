import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import state from './state'
import detectCharacterMovement from './lib/detectCharacterMovement'
import moveInvaders from './lib/moveInvaders'

setInterval(()=>{
    if(state.right){
      moveInvaders('right', state)
    } else moveInvaders('left', state)
    render(state)
  }, 500)

setInterval(function(){
  detectCharacterMovement();
}, 1000/24)

const target = document.getElementById('root')

const render = ()=> {
  const view = App(state)
  ReactDOM.render(view, target)
}

render(state)
