let img;
let head;
let hand;
let belly;
let knee;

function setup() {
  createCanvas(500, 700);
  img = loadImage('Human.png')
  head = createButton('');
  head.position(257,165);
  head.mousePressed(alerthead);
  hand = createButton('');
  hand.position(146,453);
  hand.mousePressed(alerthand);
  belly = createButton('');
  belly.position (257,380);
  belly.mousePressed(alertbelly);
  knee = createButton('');
  knee.position (285,560);
  knee.mousePressed(alertknee);
}

function draw() {
  background(125);
  image(img, 0, 0);
}

function alerthead() {
  if (head.mousePressed) {
    alert('My head hurts. I think I have a brain tumor. I need an MRI.');
  }
}

function alerthand() {
  if (hand.mousePressed) {
    alert('My hand hurts. I think I have carpal tunnel. I need to book an appointment with an orthopedic specialist ');
  }
}

function alertbelly() {
  if (head.mousePressed) {
    alert('My stomach hurts. I think I have IBS. I need to visit a gastroenterologist');
  }
}

function alertknee() {
  if (head.mousePressed) {
    alert('My knee hurts. I think I have osteoarthritis. I need to see an orthopedic specialist');
  }
}

