// https://codepen.io/yaclive/pen/EayLYO


var canvas2 = document.getElementById('matrix-bg'),
    ctx = canvas2.getContext('2d');

let resizeTimeout;

canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;

var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
letters = letters.split('');

var fontSize = 10,
    columns = canvas2.width / fontSize;

var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1;
}

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
  IntervalRunning = false
}

startInterval();

