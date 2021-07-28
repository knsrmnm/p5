function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100, 100);
  angleMode(DEGREES);

  background(90);

  for (i = 0; i < 30000; i++) {
    noStroke();
    fill(0, 0, random(50, 250), 80);
    ellipse(random(width), random(height), random(1), random(1));
  }
}

function draw() {

}
