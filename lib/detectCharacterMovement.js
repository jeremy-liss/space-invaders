import state from '../state'

let keys = {
  LEFT: 37,
  RIGHT: 39,
  SPACE: 32
}

document.body.onkeyup =
document.body.onkeydown = function(e){
  let kc = e.keyCode || e.which;
  keys[kc] = e.type == 'keydown';
}

const shoot = () => {
  state.shot.width = 5
  state.shot.height = 5
  state.shoot = true
  state.shot.marginLeft = (state.characterPosition.marginLeft + 40)
}

const moveCharacter = (dx) => {
  state.characterPosition.marginLeft += dx||0
}

const detectCharacterMovement = () => {

  if ( keys[keys.LEFT] ) {
    moveCharacter(-10);
  }
  if ( keys[keys.RIGHT] ) {
    moveCharacter(10);
  }
  if ( keys[keys.SPACE]) {
    shoot()
  }
}

export default detectCharacterMovement
