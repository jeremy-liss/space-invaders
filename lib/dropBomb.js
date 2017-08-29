const createBomb = (state, invaderId) => {

  let invader = '#' + invaderId

  state.bomb.width = 3
  state.bomb.height = 7
  state.dropBomb = true
  state.bomb.left = $(invader).offset().left
}

const dropBomb = (state, id)=>{
  //if there is not already a bomb falling
  if(state.dropBomb === false) {
    //loop through the invaders to find the random id that was called from index.js
    state.invaders.forEach((rows)=>{
      rows.forEach((invader)=>{
        if (invader.id === id && invader.alive){
          //when it matches, create a bomb from the same position as the invader
          createBomb(state, invader.id)
        }
      })
    })
  }
  else {
    //if dropBomb becomes true, make the bomb div move down the page
    state.bomb.bottom -= 50
    if(state.bomb.bottom < state.player.style.bottom){
      //if it goes beyond the player without hitting it, dropBomb is false again and the div no longer visible
      state.dropBomb = false
      state.bomb.width = 0
      state.bomb.height = 0
      state.bomb.bottom = 300
    }
  }
}

export default dropBomb
