import { state } from '../index'

const collidesWith = (characterId, weapon) => {

    let victim = '#' + characterId
    let victimPosition = {}
    let weaponPosition = {}
    //create object containing victim's position
    victimPosition.top = $(victim).offset().top;
    victimPosition.left = $(victim).offset().left;
    victimPosition.right = Number($(victim).offset().left) + Number($(victim).width());
    victimPosition.bottom = Number($(victim).offset().top) + Number($(victim).height());

    //create object containing weapon's postison
    weaponPosition.top = $(weapon).offset().top;
    weaponPosition.left = $(weapon).offset().left;
    weaponPosition.right = Number($(weapon).offset().left) + Number($(weapon).width());
    weaponPosition.bottom = Number($(weapon).offset().top) + Number($(weapon).height());

    if (victimPosition.right > weaponPosition.left && victimPosition.left < weaponPosition.right && victimPosition.top < weaponPosition.bottom && victimPosition.bottom > weaponPosition.top) {
      //if divs are in the same position, call dealWithHit
      dealWithHit (characterId)
    }
  //reload if shot makes it top of page
  else if(weaponPosition.top < 0) {
    reloadPlayer()
  }
}

const dealWithHit = (characterId) => {
  if (characterId === 'player') {
    killPlayer()
  }
  else if (characterId === 'bonus' && state.bonus.visible) {
    killBonus()
  }
  else {
    killInvader(characterId)
  }
}

const killPlayer = () => {
  //if the character is player, player loses a life. Bomb is reset. If lives = 0, game over
  state.dropBomb = false
  state.bomb.width = 0
  state.bomb.height = 0
  state.bomb.bottom = 500
  state.lives -= 1
  state.playerHit = true
  if(state.lives === 0) {
    state.gameOver = true
  }
}

const killBonus = () => {
  let pointsArray = [100, 150, 200, 250]
  state.bonus.points = pointsArray[Math.floor(Math.random() * pointsArray.length)]

  state.bonus.visible = false
  state.bonus.showPoints = true

  setTimeout(() => {
    state.bonus.showPoints = false
  }, 1000)

  state.score += state.bonus.points
  reloadPlayer()
}

const killInvader = (characterId) => {
  //if character is invader, loop through all the invaders to match up the ids and get the correct invader. Switch invader's alive status to false. Reload the player
  state.invaders.forEach((rows) => {
    rows.forEach((invader) => {
      if(invader.id === characterId){
        invader.alive = false
        state.score += invader.points
        reloadPlayer()
      }
    })
  })
}

const reloadPlayer = () => {
  state.shot.width = 0
  state.shot.height = 0
  state.shot.bottom = 50
  state.shoot = false
}

//call collidesWith on the player and the bomb div. Loop through and call collidesWith on all invaders to check for a hit. Only call if invader is alive
const checkHit = () => {
  collidesWith('player', '#bomb')
  collidesWith('bonus', '#shot')
  state.invaders.forEach((rows) => {
    rows.forEach((invader) => {
      if (invader.alive === true){
        collidesWith(invader.id, '#shot')
      }
    })
  })
}

export default checkHit
