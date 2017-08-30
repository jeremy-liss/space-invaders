import { state } from '../index'
import kill from './kill'

//call collidesWith on the player and the bomb div. Loop through and call collidesWith on all invaders to check for a hit. Only call if invader is alive
const checkHit = () => {
  collidesWith('#player', '#bomb')
  collidesWith('#bonus', '#shot')
  state.invaders.forEach((rows) => {
    rows.forEach((invader) => {
      if (invader.alive === true){
        let invaderId = '#' + invader.id
        collidesWith(invaderId, '#shot')
      }
    })
  })
}

const getPosition = (item) => {
  return {
    top: $(item).offset().top,
    left: $(item).offset().left,
    right: Number($(item).offset().left) + Number($(item).width()),
    bottom: Number($(item).offset().top) + Number($(item).height())
  }
}

const collidesWith = (victim, weapon) => {

  let victimPosition = getPosition(victim)
  let weaponPosition = getPosition(weapon)

  if (victimPosition.right > weaponPosition.left && victimPosition.left < weaponPosition.right && victimPosition.top < weaponPosition.bottom && victimPosition.bottom > weaponPosition.top) {
    //if divs are in the same position, call dealWithHit
    dealWithHit(victim)
  }
  //reload if shot makes it top of page
  else if (weaponPosition.top < 0) {
    kill.reloadPlayer(state)
  }
}

const dealWithHit = (victim) => {
  if (victim === '#player') {
    kill.killPlayer(state)
  }
  else if (victim === '#bonus' && state.bonus.visible) {
    kill.killBonus(state)
  }
  else {
    let invaderId = Number(victim.substr(1))
    kill.killInvader(state, invaderId)
  }
}


export default checkHit
