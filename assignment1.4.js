var positionX = 0;
var positionY = 0;
var velocity = 1;
var reverse = true;
var ball = document.getElementById('ball');

function moveBall() {
  var xmin = 0;
  var xmax = window.innerWidth - 50; // Adjust xmax to the width of the window minus the ball's width
  var ymin = 0;
  var ymax = window.innerHeight - 100; // Adjust ymax to the height of the window minus the ball's height

  if (reverse === true) {
    positionX = positionX + velocity;
    ball.style.left = positionX + "px";
    positionY = positionY + velocity;
    ball.style.top = positionY + "px";
    console.log("Ball of downstream");
    

    // Reverse direction if it reaches the edge
    if (positionX >= xmax || positionY >= ymax) {
      reverse = false;
    }
  } else {
    positionX = positionX - velocity;
    ball.style.left = positionX + "px";
    positionY = positionY - velocity;
    ball.style.top = positionY + "px";
    console.log("ball going Upstream");
    
    // Reverse direction if it reaches the opposite edge
    if (positionX <= xmin || positionY <= ymin) {
      reverse = true;
    }
  }
}

// Call moveBall every 10 milliseconds to create smooth movement
setInterval(moveBall, -1); 