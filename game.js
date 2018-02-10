var numSqrs = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll('.square');
var modeBtn = document.querySelectorAll('.mode');
var h1 = document.querySelector('h1');
var colorDisplay = document.querySelector('#colorDisplay');
var messageDisplay = document.querySelector('#message');
var resetBtn = document.querySelector('#reset');

init();

function init() {
  for (var i = 0; i < modeBtn.length; i++) {
    modeBtn[i].addEventListener('click', function() {
      modeBtn[0].classList.remove('selected');
      modeBtn[1].classList.remove('selected');
      this.classList.add('selected');
      this.textContent === 'Easy' ? numSqrs = 3 : numSqrs = 6;
      reset();
    });
  }
  for (var j = 0; j < squares.length; j++) {
    // add click listeners to squares
    squares[j].addEventListener('click', function() {
      // grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      // compare color to pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = 'Correct!';
        resetBtn.textContent = 'Play Again?';
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = '#fff';
        this.classList.remove('z-depth-3');
        messageDisplay.textContent = 'Try Again';
      }
    });
  }
  reset();
}


function reset() {
  //generate all new colors
  colors = generateRandomColors(numSqrs);
  //picked new random colors
  pickedColor = pickColor();
  //change color display to match picked colors
  colorDisplay.textContent = pickedColor;

  messageDisplay.textContent = '';
  resetBtn.textContent = 'New Colors';
  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    // add intial colors to squares
    if (colors[i]) {
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
  h1.style.backgroundColor = '#fff';
}

resetBtn.addEventListener('click', function() {
  reset();
});

colorDisplay.textContent = pickedColor;

function changeColors(color) {
  // loop through all squares
  for (var i = 0; i < squares.length; i++) {
    // change color to match given color
    squares[i].style.backgroundColor = color;
    squares[i].classList.add('z-depth-3');
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // make an array
  var arr = [];
  // repeat num times
  for (var i = 0; i < num; i++) {
    // get random color and push into arr
    arr.push(randomColor());
  }
  // return that array
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
