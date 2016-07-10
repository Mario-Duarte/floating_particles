# Random Floating Particles

Create random floating particles using js and css, create up to 100 particles with random initial positions, sizes and delays using javascript.
Change shape and colour of particle on the scss, 100 different and randomly generated animations that are applied to each particle created resulting on a different result every time the page is loaded.

## Dependencies

- [jQuery 3.0.0] (https://api.jquery.com/)
- SASS/SCSS compiler to edit

###How to use

The html structure:
```
<div class="particles-wrapper">
  <div  class="particles floating-bubbles"></div>
</div>
```

All particles created via javascript will be appended to the ```<div>``` with the class ```.particles```, the ```<div class="particles-wrapper">``` can be used to determinate the size of the area with the particles.

To create the particles just create a variable and assign it the following:

```
var floatingBubbles = new createParticles($numberOfParticles, $particlesMaxSize, $particlesMinSize, $particlesMaxLeftDistance, $particlesMaxBottomDistance, $particlesMaxDelay);
floatingBubbles.getParticles();
```
