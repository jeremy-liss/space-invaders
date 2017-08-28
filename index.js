import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import initialState from './state'
import checkHit from './lib/checkHit'
import populateInvaders from './lib/populateInvaders'
import checkAllDead from './lib/checkAllDead'
import game from './lib/game'

let state = initialState

state.restart = () => {
  window.location.reload()
}

populateInvaders(state)
game(state)

setInterval( () => {
  checkHit()
  if (state.playerHit) {
    game(state)
  }
  checkAllDead(state)
  render()
}, 1000/24)

let bonusTimer = null

const moveBonus = () => {

  clearInterval(bonusTimer)

  bonusTimer = setInterval(() => {
    state.bonus.style.left -= 50
    if (state.bonus.style.left === 100){
      state.bonus.visible = false
      state.bonus.style.left = 1000
    }
  }, 1000/10)
}

setInterval( () => {
  state.bonus.visible = true
  moveBonus()
}, 5000)

const target = document.getElementById('root')

const render = () => {
  const view = App(state)
  ReactDOM.render(view, target)
}

render()

export { state }
