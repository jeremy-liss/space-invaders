let first_col = 0
let last_col = 5
let count = 0

const moveInvaders = (direction, state)=> {
    if(count%2 === 0){
      state.open = false
    } else state.open = true
    count++

    if (direction == 'right'){
      state.row1[first_col] = false
      state.row1[last_col] = true
      first_col++
      last_col++
    }
    else {
      state.row1[first_col] = true
      state.row1[last_col] = false
      first_col--
      last_col--
      state.open = !state.open
    }
    if (first_col > 2){
      state.right = false
    }
    if (first_col === 0){
      state.right = true
    }
}

export default moveInvaders
