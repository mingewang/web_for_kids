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