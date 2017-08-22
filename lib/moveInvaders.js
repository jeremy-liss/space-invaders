module.exports = {
  moveInvaders
}

function moveInvaders (state) {
    if (state.right) {
      state.invadersPosition.marginLeft += 50
    }
    else {
      state.invadersPosition.marginLeft -= 50
    }
    if (state.invadersPosition.marginLeft === 200){
      state.right = false
    }
    if (state.invadersPosition.marginLeft === -200){
      state.right = true
    }
    state.invaders.forEach((rows) => {
      rows.forEach((invader) => {
        if (state.invadersPosition.marginLeft%4 === 0) {
          invader.activeImage = invader.image1
        }
        else {
          invader.activeImage = invader.image2
        }
      })
    })
}
