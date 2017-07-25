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

//make 'shot' div visible by giving it a width and height, place wherever the player is plus a few extra pixels so it looks to be coming from the gun. Make state.shoot true - this will trigger it's movement up the page from index.js
const shoot = () => {
  state.shot.width = 5
  state.shot.height = 5
  state.shoot = true
  state.shot.marginLeft = (state.player.style.left + 25)
}

const moveplayer = (dx) => {
  state.player.style.left += dx||0
}

const playerControl = () => {

  if ( keys[keys.LEFT] ) {
    moveplayer(-10);
  }
  if ( keys[keys.RIGHT] ) {
    moveplayer(10);
  }
  if ( keys[keys.SPACE]) {
    shoot()
  }
}

export default playerControl
