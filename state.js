export default {
  invaderImage: '../images/invader1.jpg',
  right: true,
  invaders: [
    [
      {id:'0', alive:true, points: 50},
      {id:'1', alive:true, points: 50},
      {id:'2', alive:true, points: 50},
      {id:'3', alive:true, points: 50},
      {id:'4', alive:true, points: 50},
    ],
    [
      {id:'5', alive:true, points: 40},
      {id:'6', alive:true, points: 40},
      {id:'6', alive:true, points: 40},
      {id:'8', alive:true, points: 40},
      {id:'9', alive:true, points: 40},
    ],
    [
      {id:'10', alive:true, points: 30},
      {id:'11', alive:true, points: 30},
      {id:'12', alive:true, points: 30},
      {id:'13', alive:true, points: 30},
      {id:'14', alive:true, points: 30},
    ],
    [
      {id:'15', alive:true, points: 20},
      {id:'16', alive:true, points: 20},
      {id:'17', alive:true, points: 20},
      {id:'18', alive:true, points: 20},
      {id:'19', alive:true, points: 20},
    ],
    [
      {id:'20', alive:true, points: 10},
      {id:'21', alive:true, points: 10},
      {id:'22', alive:true, points: 10},
      {id:'23', alive:true, points: 10},
      {id:'24', alive:true, points: 10},
    ]
  ],
  characterPosition: {
    left: 500,
    bottom: 50,
    position: 'absolute'
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
  shoot: false,
  score: 0
}
