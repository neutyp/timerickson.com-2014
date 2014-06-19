// -----------------------
// Day/night CSS toggle
// -----------------------

function getStylesheet() {
  var currentTime = new Date().getHours();
  if ( currentTime <= 6 || currentTime >= 21) {
   document.write("<link rel='stylesheet' href='/static/css/night.css'>");
  }
}

getStylesheet();


// -----------------------
// Canvas particles! 
// Adapted from an expirement by Hakim El Hattab
// http://hakim.se/experiments/html5/particles/01/
// -----------------------


// variables
  
var VELOCITY = 0.1;
var PARTICLES = 50;

var mouse = {x:0, y:0};
var particles = [];
var colors = [ "#fff","#999" ];
var canvas = document.getElementById('projector');
var context;

// setup canvas and randomized particles

if (canvas && canvas.getContext) {
  context = canvas.getContext('2d');
  
  for( var i = 0; i < PARTICLES; i++ ) {
    particles.push( { 
      x: Math.random()*window.innerWidth, 
      y: Math.random()*window.innerHeight, 
      vx: ((Math.random()*(VELOCITY*2))-VELOCITY),
      vy: ((Math.random()*(VELOCITY*2))-VELOCITY),
      size: 1+Math.random(),
      color: colors[ Math.floor( Math.random() * colors.length ) ]
    } );
  }
  
  Initialize();
}

// initialize mouse/browser actions

function Initialize() {
  window.addEventListener('resize', ResizeCanvas, false);
  setInterval( TimeUpdate, 40 );
  
  ResizeCanvas();
}

// affect the particles over time

function TimeUpdate(e) {
  
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  
  var len = particles.length;
  var particle;
  
  for( var i = 0; i < len; i++ ) {
    particle = particles[i];

    particle.x += particle.vx;
    particle.y += particle.vy;
    
    // x coordinate

    if (particle.x > window.innerWidth) {
      particle.vx = -VELOCITY - Math.random();
    }
    else if (particle.x < 0) {
      particle.vx = VELOCITY + Math.random();
    }
    else {
      particle.vx *= 1 + (Math.random() * 0.0005);
    }

    // y coordinate
    
    if (particle.y > window.innerHeight) {
      particle.vy = -VELOCITY - Math.random();
    }
    else if (particle.y < 0) {
      particle.vy = VELOCITY + Math.random();
    }
    else {
      particle.vy *= 1 + (Math.random() * 0.0005);
    }
    
    context.fillStyle = particle.color; // define particle color
    context.beginPath(); // begin path
    context.arc(particle.x, particle.y, particle.size, 0, Math.PI*2, true); // make the particle a circle from 2 arcs
    context.closePath(); // end path
    context.fill();
    
  }
}


function ResizeCanvas(e) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function DistanceBetween(p1,p2) {
  var dx = p2.x-p1.x;
  var dy = p2.y-p1.y;
  return Math.sqrt(dx*dx + dy*dy);
}
