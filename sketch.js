let canvas;
let canvasWidth = 600;
let canvasHeight = 400;

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  noCursor();
  fill(255);
textAlign(CENTER);
text('Click to create a new sprite', width/2, height/2);
//draw all the sprites added to the sketch so far
//the positions will be updated automatically at every cycle
drawSprites();
}

function draw() {
  background(30);
  ellipse(mouseX, mouseY, 100, 100);
}

function mousePressed() {


  var s = createSprite(mouseX, mouseY, 30, 30);

  s.velocity.x = random(-5, 5);
  s.velocity.y = random(-5, 5);
}
