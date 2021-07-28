//let c = ["#F2EDEC", "#E26761", "#6693A0", "#EBC06F", "#A7A6A4", "#605951"];
let c = ["#B2D3E1", "#F1EDEA", "#E7CEBF", "#D65353", "#F7C45F", "#28364A"];

function setup() {
  let canvas = createCanvas(600, 600);
  background("#F2EDEC");
  drawSquare(0, 0 , width);
  drawCircle(500, 200, width);
  document.getElementById("save-button").addEventListener('click', () => { onSaveButtonClicked(canvas); });
}

function drawSquare(x, y, d) {
	noStroke();
  fill(random(c));
  square(x, y, d);

  if (d > 5) {
    rotate(10);
    let newd = d / 2;
    drawSquare(x - newd, y, newd);
    drawSquare(x + newd, y + newd, newd);
    drawSquare(x - newd, y - newd, newd);
  }
}

function drawCircle(x, y, d) {
  ellipseMode(CENTER);
  noStroke();
  fill(random(c));
  circle(x, y, d);

  if (d > 5) {
    rotate(10);
    let newd = d / 2;
    drawCircle(x - newd, y, newd);
    drawCircle(x + newd, y - newd, newd);
    //drawCircle(x - newd, y - newd, newd);
  }
}

function onSaveButtonClicked(canvas) {
  saveCanvas(canvas, "result", "jpg");
}