export default {
  invaderImage: '../images/invader1.jpg',
  right: true,
  invaders: [
    [ {},{},{},{},{},{},{},{},{},{},{} ],
    [ {},{},{},{},{},{},{},{},{},{},{} ],
    [ {},{},{},{},{},{},{},{},{},{},{} ],
    [ {},{},{},{},{},{},{},{},{},{},{} ],
    [ {},{},{},{},{},{},{},{},{},{},{} ]
  ],
  player: {
    style: {
      left: 500,
      bottom: 50,
      position: 'absolute'
    },
    image1:"../images/player.jpg",
    image2:"../images/hit.jpg"
  },
  invadersPosition: {
    marginLeft: -200
  },
  shot: {
    width: 0,
    height: 0,
    background: 'black',
    marginLeft: 0,
    bottom: 50,
    position: 'absolute'
  },
  bomb: {
    width: 0,
    height: 0,
    background: 'black',
    left: 0,
    bottom: 300,
    position: 'absolute'
  },
  shoot: false,
  dropBomb: false,
  score: 0,
  lives: 3,
  playerHit: false,
  gameOver: false
}
