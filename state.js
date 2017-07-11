export default {
  invaderImage: '../images/invader1.jpg',
  right: true,
  invaders: [
    [
      {id:'0', alive:true},
      {id:'1', alive:true},
      {id:'2', alive:true},
      {id:'3', alive:true},
      {id:'4', alive:true},
    ],
    [
      {id:'5', alive:true},
      {id:'6', alive:true},
      {id:'6', alive:true},
      {id:'8', alive:true},
      {id:'9', alive:true},
    ],
    [
      {id:'10', alive:true},
      {id:'11', alive:true},
      {id:'12', alive:true},
      {id:'13', alive:true},
      {id:'14', alive:true},
    ],
    [
      {id:'15', alive:true},
      {id:'16', alive:true},
      {id:'17', alive:true},
      {id:'18', alive:true},
      {id:'19', alive:true},
    ],
    [
      {id:'20', alive:true},
      {id:'21', alive:true},
      {id:'22', alive:true},
      {id:'23', alive:true},
      {id:'24', alive:true},
    ]
  ],
  characterPosition: {
    marginLeft: 600
  },
  invadersPosition: {
    marginLeft: -200
  },
  shot: {
    width: 0,
    height: 0,
    background: 'black',
    marginLeft: 0,
    bottom: 0,
    position: 'absolute'
  },
  shoot: false
}
