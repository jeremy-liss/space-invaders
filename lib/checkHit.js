import state from '../state'

const collidesWith = (characterId, weapon) => {

    let victim = '#' + characterId
    let Element1 = {};
    let Element2 = {};
    //create object containing victim's position
    Element1.top = $(victim).offset().top;
    Element1.left = $(victim).offset().left;
    Element1.right = Number($(victim).offset().left) + Number($(victim).width());
    Element1.bottom = Number($(victim).offset().top) + Number($(victim).height());

    //create object containing weapon's postison
    Element2.top = $(weapon).offset().top;
    Element2.left = $(weapon).offset().left;
    Element2.right = Number($(weapon).offset().left) + Number($(weapon).width());
    Element2.bottom = Number($(weapon).offset().top) + Number($(weapon).height());

    if (Element1.right > Element2.left && Element1.left < Element2.right && Element1.top < Element2.bottom && Element1.bottom > Element2.top) {
      //if divs are in the same position, loop through the invaders and find the right id, then change its alive status to false. reload the player
      if (characterId === 'player'){
        dealWithHit ('player', characterId)
      } else dealWithHit('invader', characterId)
    }
  //reload if shot makes it top of page
  else if(Element2.top < 0){
    state.shoot = false
    state.shot.width = 0
    state.shot.height = 0
    state.shot.bottom = 0
  }
}

const dealWithHit = (character, characterId) => {
  if (character === 'invader'){
    state.invaders.forEach((rows)=>{
      rows.forEach((invader)=>{
        if(invader.id === characterId){
          invader.alive = false
          state.shot.width = 0
          state.shot.height = 0
          state.shot.bottom = 0
          state.shoot = false
          state.score += invader.points
        }
      })
    })
  }
  else {
    state.bomb.width = 0
    state.bomb.height = 0
    state.dropBomb = false
    state.lives -= 1
  }
}

//loop through and call collidesWith on all invaders to check for a hit. Only call if invader is alive
const checkHit =()=>{
  collidesWith('player', '#bomb')
  state.invaders.forEach((rows)=>{
    rows.forEach((invader)=>{
      if (invader.alive === true){
        collidesWith(invader.id, '#shot')
      }
    })
  })
}

export default checkHit
