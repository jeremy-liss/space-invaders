let first_col = 0
let last_col = 5
let count = 0

const moveInvaders = (state)=> {
    if (state.right){
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
    if (state.invadersCount%2 === 0){
      state.invaderImage = '../images/invader1.jpg'
    }
    else {
      state.invaderImage = '../images/invader2.jpg'
    }
    state.invadersCount++
}

export default moveInvaders
