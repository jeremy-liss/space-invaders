var test = require('tape')
var moveInvaders = require('../lib/moveInvaders')
var checkAllDead = require('../lib/checkAllDead')

test('moveInvaders updates state and invaders move right', function (t) {

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

test('moveInvaders updates state and invaders move left', function (t) {

  var testState = {
    right: false,
    invadersPosition: {marginLeft: -150},
    invaders: [[{activeImage: '', image1: 'image1'}]]
  }

  var expected = {
    marginLeft: -200,
    activeImage: 'image1'
  }

  moveInvaders.moveInvaders(testState)

  t.equal(testState.invadersPosition.marginLeft, expected.marginLeft, 'marginLeft decreased by 50')
  t.equal(testState.invaders[0][0].activeImage, expected.activeImage, 'activeImage is image1')
  t.true(testState.right, 'right should be true')
  t.end()
})

test('checkAllDead resets invaders if number of dead equals total number of invaders', function (t) {

  var testState = {
    invaders: [[{alive: false}]],
    deadCount: 0,
    invaderCount: 1
  }

  checkAllDead.checkAllDead(testState)

  t.true(testState.invaders[0][0].alive, 'invader alive status is switched back to true')
})
