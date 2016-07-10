$(document).ready(function(){

function init() {

  if ( $('.floating-bubbles').length > 0 ) {
    var floatingBubbles = new createParticles(100, 60, 8, 100, 100, 120);
    floatingBubbles.getParticles();
  }

} //end init

init();

});
