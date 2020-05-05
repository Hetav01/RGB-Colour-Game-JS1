var numSquares = 6;
var colours = generateRandomColors(numSquares);
// now select the squares and assign the colours from the array.
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor(); //this the colour used for hard coding before randomising the game and also for matching and changing the <h1> tag.
var colorDisplay = document.querySelector("span");
var message = document.querySelector("#correctionMessage");
var heading = document.querySelector("h1");
var button = document.querySelector("#newColors");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");


colorDisplay.textContent = pickedColor;

button.addEventListener("click", function(){
  numSquares = 6;
  colours = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  this.textContent = "New Colours!"
  message.textContent = "";
  for (var i = 0; i < squares.length; i++)
    {
      squares[i].style.background = colours[i]
    }
  heading.style.background = "#57c8d9";
});

for (var i = 0; i < squares.length; i++)
  {
    squares[i].style.background = colours[i];
    squares[i].addEventListener("click", function(){
      //grab a colour.
      var clickedColor = this.style.background;
      //compare it to the span's colour.
      if (this.style.background === pickedColor)
        {
          message.textContent = "Correct!!";
          button.textContent = "Play Again?";
          changeColors(pickedColor);
          heading.style.background = pickedColor;
        }
      else
        {
          this.style.background = "#232323";
          message.textContent = "Try Again!!";
        }
    });
  }

function changeColors(color)
{
  //change all the colours to the input colour.
  for (var i = 0; i < squares.length; i++)
    {
      squares[i].style.background = color;
    }
}

function pickColor()
{
  var random = Math.floor(Math.random() * colours.length);
  return colours[random];
}

function generateRandomColors(num)
{
  //construct an array to replace the hard coded one.
  var arr = [];

  for (var i = 0; i < num; i++)
    {
      arr.push(randomColors());
    }
  //return the array.
  return arr;
}

function randomColors()
{
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}

easy.addEventListener("click", function(){
  hard.classList.remove("selected");
  easy.classList.add("selected");
  numSquares = 3;
  colours = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  message.textContent = "";
  for (var i = 0; i < squares.length; i++)
    {
      if (colours[i])
        {
          squares[i].style.background = colours[i];
        }
      else
        {
          squares[i].style.display = "none";
        }
    }
  heading.style.background = "#57c8d9";
});

hard.addEventListener("click", function(){
  easy.classList.remove("selected");
  hard.classList.add("selected");
  numSquares = 6;
  colours = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  message.textContent = "";
  for (var i = 0; i < squares.length; i++)
    {
      squares[i].style.background = colours[i];
      squares[i].style.display = "block";
    }
  heading.style.background = "#57c8d9";
});
