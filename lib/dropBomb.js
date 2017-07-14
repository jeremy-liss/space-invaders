import state from '../state'

const createBomb = (invaderId) => {

  let invader = '#' + invaderId

  state.bomb.width = 5
  state.bomb.height = 5
  state.dropBomb = true
  state.bomb.left = $(invader).offset().left
}

const dropBomb = (id)=>{
  if(state.dropBomb === false)
  state.invaders.forEach((rows)=>{
    rows.forEach((invader)=>{
      if (invader.id === id){
        createBomb(invader.id)
      }
    })
  })
  else {
    state.bomb.bottom -= 50
    if(state.bomb.bottom < state.playerPosition.bottom){
      state.dropBomb = false
      state.bomb.width = 0
      state.bomb.height = 0
      state.bomb.bottom = 500
    }
  }
}

export default dropBomb
