// -----------------------
// Canvas meteors! 
// Adapted from an expirement by Hakim El Hattab
// http://hakim.se/experiments/html5/particles/01/
// -----------------------


// variables
  
var VELOCITY = 0.1;
var PARTICLES = 100;

var particles = [];
var colors = ["#fff", "#999"];
var canvas = document.getElementById('meteors');
var context;

// setup canvas and randomized particles

if (canvas && canvas.getContext) {
  context = canvas.getContext('2d');
  
  // populate the particles array
  for (var i = 0; i < PARTICLES; i++) {
    particles.push ({ 
      x: Math.random() * window.innerWidth, // randomly set start position x
      y: Math.random() * window.innerHeight, // randomly set start position y
      vx: ( (Math.random() * (VELOCITY * 2)) - VELOCITY), // velocity x
      vy: ( (Math.random() * (VELOCITY * 2)) - VELOCITY), // velocity y
      size: 1 + Math.random(), // randomly set size
      color: colors[ Math.floor( Math.random() * colors.length ) ] // randomly choose color
    });
  }
  
  Initialize();
}

// initialize mouse/browser actions

function Initialize() {
  window.addEventListener('resize', ResizeCanvas, false);
  setInterval(TimeUpdate, 0040);
  
  ResizeCanvas();
}

// affect the particles over time

function TimeUpdate(e) {
  
  context.clearRect (
    0, // x
    0, // y
    window.innerWidth, // width
    window.innerHeight // height
  );
  
  var len = particles.length;
  var particle;
  
  for (var i = 0; i < len; i++) {
    particle = particles[i];

    // move the particles with velocity
    particle.x += particle.vx;
    particle.y += particle.vy;

    // 2d methods
    context.fillStyle = particle.color; // define particle color
    context.beginPath();
    context.arc (
      particle.x, // x
      particle.y, // y
      particle.size, // radius
      0, // startAngle
      Math.PI * 2, // endAngle
      true // clockwise
    );
    context.closePath();
    context.fill();
    
  }
}

function ResizeCanvas(e) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
