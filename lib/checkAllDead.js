import populateInvaders from './populateInvaders'

let endColDead = 0
let colCount = 0

const checkAllDead = (state) => {
  state.invaders.forEach((rows) => {
    rows.forEach((invader) => {
      if (invader.alive === false) {
        state.deadCount ++
        if (invader.col === colCount) {
          endColDead++
        }
      }
    })
  })
  if (endColDead === 5){
    removeEndCol(state)
    colCount++
  }
  if (state.deadCount === 55) {
    populateInvaders(state)
    state.lives ++
  }
  endColDead = 0
  state.deadCount = 0
}

const removeEndCol = (state) => {
  state.invaders.forEach((rows) => {
    rows.splice(0, 1)
    console.log(rows.length);
  })
}

export default checkAllDead
