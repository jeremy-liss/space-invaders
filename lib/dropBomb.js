import kill from './kill'

const createBomb = (state, invaderId) => {

  let invader = '#' + invaderId

  state.bomb.style.width = 3
  state.bomb.style.height = 7
  state.bomb.drop = true
  state.bomb.style.left = $(invader).offset().left
}

const dropBomb = (state, id) => {
  //if there is not already a bomb falling
  if(state.bomb.drop === false) {
    //loop through the invaders to find the random id that was called from index.js
    state.invaders.forEach((rows) => {
      rows.forEach((invader) => {
        if (invader.id === id && invader.alive) {
          //when it matches, create a bomb from the same position as the invader
          createBomb(state, invader.id)
        }
      })
    })
  }
  else {
    //if dropBomb becomes true, make the bomb div move down the page
    state.bomb.style.bottom -= 50
    if (state.bomb.style.bottom < state.player.style.bottom) {
      //if it goes beyond the player without hitting it, dropBomb is false again and the div no longer visible
      kill.reloadBomb(state)
    }
  }
}

export default dropBomb
