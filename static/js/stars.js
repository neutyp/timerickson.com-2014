// -----------------------
// Canvas stars! 
// Adapted from EveryBlock's farewell page, 2013
// saved from url=(0026)http://www.everyblock.com/
// -----------------------

// variables

var PARTICLES = 200;

// create a 2d canvas
var canvas = document.getElementById('stars');
var context = canvas.getContext('2d');

context.canvas.width = document.body.offsetWidth;
context.canvas.height = document.body.offsetHeight;


// if the window resizes, re-generate stars
window.addEventListener('resize', function() {
  context.clearRect (
    0, // x
    0, // y
    context.canvas.width, // width
    context.canvas.height // height
  );

  Stars.length = 0;

  generateStars();

});

// create an empty array of stars
var Stars = [];

// fill the Stars array with stars
function generateStars() {
  for (var i = 0; i < PARTICLES; i++) {
    Stars.push ({
      xpos: context.canvas.width * Math.random(),
      ypos: context.canvas.height * Math.random(),
      size: Math.random() * 2,
      radius: Math.PI * 2,
      direction: false,
      alpha: Math.random(),
      incdir: (Math.random() * .03) * (Math.random() < 0.5 ? -1 : 1) // generate a random number *.03, then randomly decide if it shold be neg or pos
    });
  }
}

generateStars();

// loop through the Stars and render them
function animate() {
  for (var i = 0; i < Stars.length; i++) {
    var star = Stars[i];
    render(star);
  }

  setTimeout(animate, 0025);
}

animate();

function render(star) {

  context.clearRect (
    star.xpos - star.size, // x
    star.ypos - star.size, // y
    star.size * 2, // width
    star.size * 2  // height
  );

  // make the stars fade back in after they fade out
  if (star.alpha > .9 || star.alpha <= 0) {
    star.incdir *= -1;
  }

  star.alpha += star.incdir;

  // 2d methods
  context.fillStyle = 'rgba(255, 255, 255,'+star.alpha+')';
  context.beginPath();
  context.arc (
    star.xpos, // x
    star.ypos, // y
    star.size, // radius
    0, // startAngle
    star.radius, // endAngle
    star.direction // counterclockwise
  );
  context.closePath();
  context.fill(); 
}

