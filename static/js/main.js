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

