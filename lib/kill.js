const kill = {

   killPlayer: function(state) {
    //if the character is player, player loses a life. Bomb is reset. If lives = 0, game over
    state.dropBomb = false
    state.bomb.width = 0
    state.bomb.height = 0
    state.bomb.bottom = 300
    state.lives -= 1
    state.playerHit = true
    if(state.lives === 0) {
      state.gameOver = true
    }
  },

  killBonus: function(state) {
    let pointsArray = [100, 150, 200, 250]
    state.bonus.points = pointsArray[Math.floor(Math.random() * pointsArray.length)]

    state.bonus.visible = false
    state.bonus.showPoints = true

    setTimeout(() => {
      state.bonus.showPoints = false
    }, 1000)

    state.score += state.bonus.points
    this.reloadPlayer(state)
  },

  killInvader: function(state, invaderId) {
    //if character is invader, loop through all the invaders to match up the ids and get the correct invader. Switch invader's alive status to false. Reload the player
    state.invaders.forEach((rows) => {
      rows.forEach((invader) => {
        if(invader.id === invaderId){
          invader.alive = false
          state.score += invader.points
          this.reloadPlayer(state)
        }
      })
    })
  },

  reloadPlayer: function(state) {
    state.shot.width = 0
    state.shot.height = 0
    state.shot.bottom = 50
    state.shoot = false
  }
}

export default kill
