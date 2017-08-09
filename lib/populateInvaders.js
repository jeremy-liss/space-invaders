let invaderId = 0

const populateInvaders = (state) => {
  state.invaders.forEach((rows) => {
    rows.forEach((invader) => {
      invader.id = invaderId
      invader.alive = true
      if (invaderId < 11){
        invader.points = 40
        invader.image1 = '../images/invaderA1.jpg'
        invader.image2 = '../images/invaderA2.jpg'
      }
      else if (invaderId > 10 && invaderId < 33) {
        invader.points = 20
        invader.image1 = '../images/invader1.jpg'
        invader.image2 = '../images/invader2.jpg'
      } else {
        invader.points = 10
        invader.image1 = '../images/invaderB1.jpg'
        invader.image2 = '../images/invaderB2.jpg'
      }
      invaderId++
    })
  })
  invaderId = 0
}

export default populateInvaders
