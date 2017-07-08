import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import state from './state'

let first_col = 0
let last_col = state.row1.length-2
let right = true
let left = false

const moveRight = ()=> {
    state.row1[first_col] = false
    state.row1[last_col] = true
    first_col++
    last_col++
    if (first_col > 2){
      right = false
      left = true
    }
    render(state)
}

const moveLeft =()=>{
  state.row1[first_col] = true
  state.row1[last_col] = false
  first_col--
  last_col--
  if (first_col === 0){
    right = true
    left = false
  }
  render(state)
}

setInterval(()=>{
    if(right){
      moveRight()
    } else moveLeft()
  }, 500)

const target = document.getElementById('root')

const render = ()=> {
  const view = App(state)
  ReactDOM.render(view, target)
}

render(state)
