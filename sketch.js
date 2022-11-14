let img;
let button;

function setup() {
  createCanvas(500, 700);
  img = loadImage('Human.png')
  button = createButton('');
  button.position(245,85);
}

function draw() {
  background(125);
  image(img, 0, 0);
}
