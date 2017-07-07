import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import state from './state'

let first_col = 0
let last_col = state.row1.length-2

const move = ()=> {
  if (first_col < 2) {
    state.row1[first_col] = false
    state.row1[last_col] = true
    first_col+=1
    last_col+=1
    render(state)
  }
  else  {
    state.row1[first_col] = true
    state.row1[last_col] = false
    first_col--
    last_col--
    render(state)
  }

}

setInterval(function(){
    move()
  }, 500)

const target = document.getElementById('root')

const render = ()=> {
  const view = App(state)
  ReactDOM.render(view, target)
}

render(state)
