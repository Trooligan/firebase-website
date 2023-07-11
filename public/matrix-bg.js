// https://codepen.io/yaclive/pen/EayLYO


// Initialising the canvas
var canvas2 = document.getElementById('matrix-bg'),
    ctx = canvas2.getContext('2d');

let resizeTimeout;

// Setting the width and height of the canvas
canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;

// Setting up the letters
var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
letters = letters.split('');

// Setting up the columns
var fontSize = 10,
    columns = canvas2.width / fontSize;

// Setting up the drops
var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1;
}

// Setting up the draw function
function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, .1)';
  ctx.fillRect(0, 0, canvas2.width, canvas2.height);
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = '#0f0';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas2.height && Math.random() > 0.95) {
      drops[i] = 0;
    }
  }
}

function updateCanvasDimensions() {
  console.log("updatedDimesions")
  canvas2.width = window.innerWidth;
  canvas2.height = window.innerHeight;
}

function handleResize() {
  console.log("handleResize")
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(updateCanvasDimensions, 500);
}

// Loop the animation
let matrixInterval;
let matrixIntervalRunning = false;

window.addEventListener('resize', handleResize);


function startInterval() {
  stopInterval()

  if (slider.value > 0) {
    matrixInterval = setInterval(draw, 101 - slider.value);
    matrixIntervalRunning = true
  }

}

function stopInterval() {
  clearInterval(matrixInterval);
  matrixIntervalRunning = false
}

startInterval();

