var populateInvaders = require('./populateInvaders')

module.exports = {

  checkAllDead: function (state) {
    state.invaders.forEach((rows) => {
      rows.forEach((invader) => {
        if (invader.alive === false) {
          state.deadCount ++
        }
      })
    })
    if (state.deadCount === state.invaderCount) {
      populateInvaders(state)
      state.lives ++
    }
    state.deadCount = 0
  }

}
