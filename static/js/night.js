// -----------------------
// Canvas stars and meteors! 
// created by Tim Erickson
// 
// Inspired by an expirement from Hakim El Hattab, 
// http://hakim.se/experiments/html5/particles/01/
// 
// and EveryBlock's farewell page, 2013
// saved from url=(0026)http://www.everyblock.com/
// -----------------------

// variables
  
var PARTICLES = 200; // total stars and meteors
var RADIUS    = 1; // radius of the average particle
var VELOCITY  = 0.3; // moving velocity of meteors
var SPEED     = .01; // pulsing speed of stars
var PERCENT   = 0.9; // percent of particles that are stars, not meteors
var ANIMATE   = 0025; // time in milliseconds

// create a 2d canvas
var canvas = document.getElementById('night');
var context = canvas.getContext('2d');

canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;


// create an empty array of particles
var particles = [];

// setup canvas and randomized particles
if (canvas && canvas.getContext) {
  
  // populate the particles array
  for (var i = 0; i < PARTICLES; i++) {
    particles.push ({ 
      x: context.canvas.width * Math.random(), // x position
      y: context.canvas.height * Math.random(), // y position
      radius: RADIUS + Math.random(), // randomly set radius
      alpha: Math.random(), // transparency
      vx: ( (Math.random() * (VELOCITY * 2) ) - VELOCITY), // velocity x
      vy: ( (Math.random() * (VELOCITY * 2) ) - VELOCITY), // velocity y
      twinkle: (Math.random() * SPEED) * (Math.random() < 0.5 ? -1 : 1), // randomize SPEED, then randomly decide if it shold be neg or pos
      type: Math.random() // randomize star vs meteor
    });
  }
  
  setInterval(animate, ANIMATE);
}


// animate the particles :)
function animate() {
  
  context.clearRect (
    0, // x
    0, // y
    context.canvas.width, // width
    context.canvas.height // height
  );
    
  for (var i = 0; i < particles.length; i++) {
    var particle = particles[i];

    if (particle.type >= PERCENT) {
      // move the meteors with velocity
      particle.x += particle.vx;
      particle.y += particle.vy;

      // x coordinate
      if (particle.x > window.innerWidth) {
        particle.vx = -VELOCITY - Math.random();
      }
      else if (particle.x < 0) {
        particle.vx = VELOCITY + Math.random();
      }

      // y coordinate
      if (particle.y > window.innerHeight) {
        particle.vy = -VELOCITY - Math.random();
      }
      else if (particle.y < 0) {
        particle.vy = VELOCITY + Math.random();
      }

    } 

    else {
      // make the stars fade back in after they fade out
      if (particle.alpha > .9 || particle.alpha <= 0) {
        particle.twinkle *= -1;
      }

      particle.alpha += particle.twinkle;
    }

    // 2d methods to create the circlular star
    context.fillStyle = 'rgba(255, 255, 255,'+particle.alpha+')';
    context.beginPath();
    context.arc (
      particle.x, // x
      particle.y, // y
      particle.radius, // radius
      0, // startAngle
      Math.PI * 2, // endAngle
      true // clockwise
    );
    context.closePath();
    context.fill();    
  }
}
