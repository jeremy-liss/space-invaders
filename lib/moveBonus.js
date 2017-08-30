import { state } from '../index'

let bonusTimer = null

const moveBonus = () => {

  clearInterval(bonusTimer)

  bonusTimer = setInterval(() => {
    state.bonus.style.left -= 50
    if (state.bonus.style.left === 100){
      state.bonus.visible = false
    }
    if (state.bonus.showPoints) {
      clearInterval(bonusTimer)
    }
  }, 1000/10)
}

const triggerMoveBonus = () => {
  state.bonus.visible = true
  state.bonus.style.left = 1000
  moveBonus()
}

const bonusLoop = () => {
    let times = [10000, 15000, 20000]
    let time = times[Math.floor(Math.random() * times.length)]
    setTimeout(function() {
      triggerMoveBonus()
      bonusLoop()
    }, time)
}

export default bonusLoop
