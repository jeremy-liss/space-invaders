var test = require('tape')
var moveInvaders = require('../lib/moveInvaders')

test('moveInvaders updates state to show movement of invaders to right', function (t) {

  var testState = {
    right: true,
    invadersPosition: {marginLeft: 150},
    invaders: [[{activeImage: '', image1: 'image1'}]]
  }

  var expected = {
    marginLeft: 200,
    activeImage: 'image1'
  }

  moveInvaders.moveInvaders(testState)

  t.equal(testState.invadersPosition.marginLeft, expected.marginLeft, 'marginLeft increased by 50')
  t.equal(testState.invaders[0][0].activeImage, expected.activeImage, 'activeImage is image1')
  t.false(testState.right, 'right should be false')
  t.end()
})
