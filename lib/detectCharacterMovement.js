import React from 'react'
import ReactDOM from 'react-dom'

import state from '../state'

let keys = {
  LEFT: 37,
  RIGHT: 39
}

document.body.onkeyup =
document.body.onkeydown = function(e){
  let kc = e.keyCode || e.which;
  keys[kc] = e.type == 'keydown';
}

const moveCharacter = (dx) => {
  state.divStyle.marginLeft += dx||0
}

const detectCharacterMovement = () => {

  if ( keys[keys.LEFT] ) {
    moveCharacter(-10);
  }
  if ( keys[keys.RIGHT] ) {
    moveCharacter(10);
  }
}

export default detectCharacterMovement
