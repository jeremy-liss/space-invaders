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
    if (state.invadersPosition.marginLeft%4 === 0){
      state.invaderImage = '../images/invader1.jpg'
    }
    else {
      state.invaderImage = '../images/invader2.jpg'
    }
}

export default moveInvaders
