import state from '../state'

function collidesWith (invaderId) {

    var element1 = '#' + invaderId
    var Element1 = {};
    var Element2 = {};

    Element1.top = $(element1).offset().top;
    Element1.left = $(element1).offset().left;
    Element1.right = Number($(element1).offset().left) + Number($(element1).width());
    Element1.bottom = Number($(element1).offset().top) + Number($(element1).height());

    Element2.top = $('#shot').offset().top;
    Element2.left = $('#shot').offset().left;
    Element2.right = Number($('#shot').offset().left) + Number($('#shot').width());
    Element2.bottom = Number($('#shot').offset().top) + Number($('#shot').height());

    if (Element1.right > Element2.left && Element1.left < Element2.right && Element1.top < Element2.bottom && Element1.bottom > Element2.top) {

      state.invaders.forEach(function(rows){
        rows.forEach(function(invader) {
          if(invader.id === invaderId){
            invader.alive = false
            state.shot.width = 0
            state.shot.height = 0
            state.shot.bottom = 0
            state.shoot = false
          }
        })
      })
        console.log('hit');
    }
}

function checkHit(){
  state.invaders.forEach(function(rows){
    rows.forEach(function(invader) {
      if (invader.alive === true){        
        collidesWith(invader.id)
      }
    })
  })
}

export default checkHit
