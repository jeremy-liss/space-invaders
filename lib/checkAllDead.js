import populateInvaders from './populateInvaders'

const checkAllDead = (state) => {
  state.invaders.forEach((rows) => {
    rows.forEach((invader) => {
      if (invader.alive === false) {
      state.deadCount ++
      }
    })
  })
  if (state.deadCount === 55) {
    populateInvaders(state)
    state.lives ++
  }
  state.deadCount = 0
}

export default checkAllDead
