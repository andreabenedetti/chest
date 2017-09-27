function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  noCursor();
  background(0);
  strokeWeight(0);
  fill(255,65,89);
  rect(0, 0, mouseX, height);
  
  //TEXT
  if(mouseX > width/2) {
    s = "Where I receive love from where I give love from";
    fill(0);
    text(s, width/2-75, height/2-50, 150, 100);
  }
  else {
    s = "My healed chest wound transformed into a gate";
    fill(255,65,89);
    text(s, width/2-75, height/2-50, 150, 100)
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}