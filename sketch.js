let img;
let button;

function setup() {
  createCanvas(500, 700);
  img = loadImage('Human.png')
  button = createButton('');
  button.position(247,85);
  button.mousePressed(thought);
}

function draw() {
  background(125);
  image(img, 0, 0);
}

function thought() {
  if (button.mousePressed) {
    alert('hello');
  }
}
