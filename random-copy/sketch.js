let img;
let circles = [];
const SPEED = 1.2;
function preload() {
  img = loadImage("./img/brt_1.jpeg");
}
function setup() {
  createCanvas(600, 600);
  frameRate(5);
  textFont("Abril Fatface");
}

function draw() {
  background(0);
  let ratio = img.width / img.heightl;
  let x = random(0, width / 2 - 100);
  let y = random(0, height - 200);
  image(img, 0, 0, height, width);
  img.copy(x, y, 100, 200, width / 2, 0, 600, height);
  textSize(90);
  fill("#303030");
  text("April.", 10, 100);
  text("random text.", 10, 200);
  /*
  let alpha = 1.0;
  for (let i = 0; i < circles.length; i++) {
    circles[i] = circlePos(circles[i]);
    if (circles[i] > width / 2) alpha += 0.2;
    else alpha = 1;
    drawCircle(circles[i], height / 2, alpha);
  }
  */
  //renderCircles();
}

function circlePos(x) {
  if (x + SPEED > width) return 0;
  else return x + SPEED;
}

function renderCircles() {
  fill("white");
  noStroke();
  //strokeWidth(0);
  let alpha = 1.0;
  for (let x = 0; x < width + 20; x += 15 * alpha) {
    if (x > width / 2) alpha += 0.2;
    ellipse(x + 1, height / 2, 10 * alpha, 10 * alpha);
  }
}

function drawCircle(x, y, alpha) {
  noStroke();
  ellipse(x, y, 10 * alpha, 10 * alpha);
}
