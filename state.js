export default {
  bomb: {
    width: 0,
    height: 0,
    background: 'black',
    left: 0,
    bottom: 300,
    position: 'absolute'
  },
  bonus: {
    points: 0,
    style: {
      left: 100,
      position: 'relative'
    },
    showPoints: false,
    visible: false
  },
  deadCount: 0,
  dropBomb: false,
  gameOver: false,
  invaderImage: '../images/invader1.jpg',
  invaders: [
    [ {},{},{},{},{},{},{},{},{},{},{} ],
    [ {},{},{},{},{},{},{},{},{},{},{} ],
    [ {},{},{},{},{},{},{},{},{},{},{} ],
    [ {},{},{},{},{},{},{},{},{},{},{} ],
    [ {},{},{},{},{},{},{},{},{},{},{} ]
  ],
  invadersPosition: {
    marginLeft: -200
  },
  lives: 3,
  player: {
    image1:"../images/player.jpg",
    image2:"../images/hit.jpg",
    style: {
      bottom: 50,
      left: 500,
      position: 'relative'
    }
  },
  playerHit: false,
  right: true,
  score: 0,
  shoot: false,
  shot: {
    background: 'black',
    bottom: 50,
    height: 0,
    marginLeft: 0,
    position: 'absolute',
    width: 0
  }
}
