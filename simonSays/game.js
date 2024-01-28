const buttonColors = ["red", "blue", "green", "yellow"]
var gamePattern = []
var redSound = new Audio("./sounds/red.mp3") 
var greenSound = new Audio("./sounds/green.mp3")
var blueSound = new Audio("./sounds/blue.mp3")
var yellowSound = new Audio("./sounds/yellow.mp3")
var wrongSound = new Audio("./sounds/wrong.mp3")

function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4)
  var randomChosenColor = buttonColors[randomNumber]
  gamePattern.push(randomChosenColor)
  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  audio.play();
}

nextSequence()

