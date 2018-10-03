// -----------------------
// Day/night CSS toggle
// -----------------------

function getStylesheet() {
  var currentTime = new Date().getHours();
  if (currentTime <= 6 || currentTime >= 19) {
   document.write("<link rel='stylesheet' href='/static/css/night.css'>");
   var canvas = document.getElementById("day");
  canvas.id = "night";
  }
}

getStylesheet();
