/*
function setup() {
    createCanvas(400, 400); // Creates a 400x400 pixel canvas
}

function draw() {
    background(220); // Clears the screen with a light gray color
    ellipse(200, 200, 50, 50); // Draws a circle at (200, 200) with width and height 50
}

*/
/*
function setup() {
    createCanvas(400, 400); // Create a 400x400 canvas
}

function draw() {
    background(220); // Clear the background
    fill(255, 0, 0); // Set fill color to red
    noStroke(); // Disable outline
    ellipse(mouseX, mouseY, 50, 50); // Draw circle at mouse position
}

*/
/*
let rectColor = 'blue'; // Initial color of the rectangle

function setup() {
    createCanvas(400, 400); // Create a 400x400 canvas
}

function draw() {
    background(220); // Clear the background
    fill(rectColor); // Set the fill color for the rectangle
    rect(150, 150, 100, 100); // Draw a rectangle
}

function mousePressed() {
    // Change the color of the rectangle when the mouse is pressed
    rectColor = (rectColor === 'blue') ? 'green' : 'blue';
}

*/

/*
let ball = {
    x: 200,
    y: 200,
    radius: 25,
    xSpeed: 3,
    ySpeed: 3
};

function setup() {
    createCanvas(400, 400); // Create a 400x400 canvas
}

function draw() {
    background(220); // Clear the background

    // Update ball position
    ball.x += ball.xSpeed;
    ball.y += ball.ySpeed;

    // Bounce off the edges
    if (ball.x > width - ball.radius || ball.x < ball.radius) {
        ball.xSpeed *= -1;
    }
    if (ball.y > height - ball.radius || ball.y < ball.radius) {
        ball.ySpeed *= -1;
    }

    // Draw the ball
    fill(255, 0, 0); // Red color
    noStroke(); // No outline
    ellipse(ball.x, ball.y, ball.radius * 2, ball.radius * 2);
}
*/
/*
let ballX, ballY; // Ball position
let ballSpeed = 5; // Speed of movement

function setup() {
  createCanvas(400, 400);
  ballX = width / 2; // Start in the center
  ballY = height / 2;
}

function draw() {
  background(220);

  // Draw the ball
  fill(0, 102, 204);
  ellipse(ballX, ballY, 30);
}

function keyPressed() {
  // Arrow keys to move the ball
  if (keyCode === UP_ARROW) {
    ballY -= ballSpeed;
  } else if (keyCode === DOWN_ARROW) {
    ballY += ballSpeed;
  } else if (keyCode === LEFT_ARROW) {
    ballX -= ballSpeed;
  } else if (keyCode === RIGHT_ARROW) {
    ballX += ballSpeed;
  }
}
*/
/*
let ballX, ballY; // Ball position
let ballSpeed = 5; // Speed of movement

function setup() {
  createCanvas(400, 400);
  ballX = width / 2; // Start in the center
  ballY = height / 2;
}

function draw() {
  background(220);

  // Check for key presses
  if (keyIsDown(LEFT_ARROW)) {
    ballX -= ballSpeed; // Move left
  }
  if (keyIsDown(RIGHT_ARROW)) {
    ballX += ballSpeed; // Move right
  }
  if (keyIsDown(UP_ARROW)) {
    ballY -= ballSpeed; // Move up
  }
  if (keyIsDown(DOWN_ARROW)) {
    ballY += ballSpeed; // Move down
  }

  // Draw the ball
  fill(0, 102, 204);
  ellipse(ballX, ballY, 30);
}
  */

/*
let ballX, ballY; // Ball position
let ballSpeed = 5; // Speed of movement
let ballSize = 30; // Diameter of the ball

function setup() {
  createCanvas(400, 400);
  ballX = width / 2; // Start in the center
  ballY = height / 2;
}

function draw() {
  background(220);

  // Check for key presses
  if (keyIsDown(LEFT_ARROW) && ballX - ballSize / 2 > 0) {
    ballX -= ballSpeed; // Move left
  }
  if (keyIsDown(RIGHT_ARROW) && ballX + ballSize / 2 < width) {
    ballX += ballSpeed; // Move right
  }
  if (keyIsDown(UP_ARROW) && ballY - ballSize / 2 > 0) {
    ballY -= ballSpeed; // Move up
  }
  if (keyIsDown(DOWN_ARROW) && ballY + ballSize / 2 < height) {
    ballY += ballSpeed; // Move down
  }

  // Draw the ball
  fill(0, 102, 204);
  ellipse(ballX, ballY, ballSize);
}

*/


let circleX = 100;
let bkcolor = 220;

function setup() {
  createCanvas(400, 400);
  background(bkcolor);
}

function draw() {
  background(bkcolor);

  // Static shapes
  fill(255, 0, 0);
  ellipse(width / 2, height / 2, 50); // Red circle
  
  fill(0, 0, 255);
  rect(10, 10, 50, 50); // Blue rectangle

  fill(255, 255, 0);
  triangle(350, 350, 375, 300, 400, 350); // Yellow triangle
  
  // Animated circle
  fill(0, 255, 0);
  ellipse(circleX, 300, 50);
  circleX += 2;
  if (circleX > width) {
    circleX = 0;
  }
}

function mousePressed() {
  bkcolor = random(255);
}
