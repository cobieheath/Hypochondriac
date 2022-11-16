let img;
let head;
let hand;
let belly;
let knee;

function setup() {
  createCanvas(500, 700);
  img = loadImage('Human.png')
  head = createButton('');
  head.position(247,85);
  head.mousePressed(alerthead);
  hand = createButton('');
  hand.position(136,373);
  hand.mousePressed(alerthand);
  belly = createButton('');
  belly.position (247,300);
  belly.mousePressed(alertbelly);
  knee = createButton('');
  knee.position (275,480);
  knee.mousePressed(alertknee);
}

function draw() {
  background(125);
  image(img, 0, 0);
}

function alerthead() {
  if (head.mousePressed) {
    alert('hello');
  }
}

function alerthand() {
  if (hand.mousePressed) {
    alert('hello');
  }
}

function alertbelly() {
  if (head.mousePressed) {
    alert('hello');
  }
}

function alertknee() {
  if (head.mousePressed) {
    alert('hello');
  }
}

