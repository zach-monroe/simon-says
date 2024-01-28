const buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColor);
  level++;
  $("h1").text("Level " + level);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePressed(currentColor) {
  $(currentColor).addClass("pressed");
  setTimeout(function () {
    $(currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] == userClickedPattern[currentLevel]) {
    console.log("success");
    playSound(userClickedPattern[currentLevel]);
  } else {
    var fail = new Audio("./sounds/wrong.mp3");
    fail.play();
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 500);
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
    $("h1").text("Press A Key to Start");
  }

  if (currentLevel == gamePattern.length - 1) {
    setTimeout(function () {
      nextSequence();
    }, 1000);
    userClickedPattern = [];
  }
}

$(".btn").click(function () {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  var foo = userClickedPattern.length - 1;
  //playSound(userChosenColor);
  animatePressed("#" + userChosenColor);
  checkAnswer(foo);
});

$("body").keydown(function () {
  if ($("h1").text() == "Press A Key to Start") {
    nextSequence();
    $("h1").text("Level " + level);
  }
});
