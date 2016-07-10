var createParticles = function(nParticles, sMaxParticles, sMinParticles, lParticles, bParticles, dParticles) {
  this.particlesCount = nParticles;
  this.particlesMaxSize = sMaxParticles;
  this.particlesMinSize = sMinParticles;
  this.particlesLeft = lParticles;
  this.particlesBottom = bParticles;
  this.particlesMaxDelay = dParticles;
}

createParticles.prototype.getParticles = function() {

  for(var i = 1; i <= this.particlesCount ; i++) {
    console.log('bubble ' + i);
     var size = Math.floor(Math.random()*this.particlesMaxSize)+this.particlesMinSize;
     var bottom = Math.floor(Math.random()*this.particlesBottom)+1;
     var left = Math.floor(Math.random()*this.particlesLeft)+1;
     var delay = Math.floor(Math.random()*this.particlesMaxDelay)+1;
     $('.particles-wrapper .particles').append('<span class="particle particle-' + i + '" style="bottom:' + bottom + '%; left:' + left + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + delay + 's;"></span>');
  }

}
