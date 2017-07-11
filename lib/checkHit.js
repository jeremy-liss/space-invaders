import state from '../state'

const collidesWith = (invaderId) => {

    let invader = '#' + invaderId
    let Element1 = {};
    let Element2 = {};

    Element1.top = $(invader).offset().top;
    Element1.left = $(invader).offset().left;
    Element1.right = Number($(invader).offset().left) + Number($(invader).width());
    Element1.bottom = Number($(invader).offset().top) + Number($(invader).height());

    Element2.top = $('#shot').offset().top;
    Element2.left = $('#shot').offset().left;
    Element2.right = Number($('#shot').offset().left) + Number($('#shot').width());
    Element2.bottom = Number($('#shot').offset().top) + Number($('#shot').height());

    //compare div positions
    if (Element1.right > Element2.left && Element1.left < Element2.right && Element1.top < Element2.bottom && Element1.bottom > Element2.top) {
      //if divs are in the same position, loop through the invaders and check for the right id, then change its alive status to false. reload the character
      state.invaders.forEach((rows)=>{
        rows.forEach((invader)=>{
          if(invader.id === invaderId){
            invader.alive = false
            state.shot.width = 0
            state.shot.height = 0
            state.shot.bottom = 0
            state.shoot = false
          }
        })
      })
    }
  //reload if shot makes it top of page
  else if(Element2.top < 0){
    state.shoot = false
    state.shot.width = 0
    state.shot.height = 0
    state.shot.bottom = 0
  }
}

const checkHit =()=>{
  state.invaders.forEach((rows)=>{
    rows.forEach((invader)=>{
      if (invader.alive === true){
        collidesWith(invader.id)
      }
    })
  })
}

export default checkHit
