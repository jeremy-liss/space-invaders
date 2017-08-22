var test = require('tape')
var moveInvaders = require('../lib/moveInvaders')

test('state is updated to show movement of invaders', function (t) {

  var testState = {
    right: true,
    invadersPosition: {marginLeft: 0},
    invaders: [[{activeImage: '', image2: 'image2'}]]
  }

  var expected = {
    marginLeft: 50,
    activeImage: 'image2'
  }
  moveInvaders.moveInvaders(testState)

  t.equal(testState.invadersPosition.marginLeft, expected.marginLeft, 'returns marginLeft increased by 50')
  t.equal(testState.invaders[0][0].activeImage, expected.activeImage, 'returns image2')
  t.end()
})
