const Pallete = createCols("https://coolors.co/227c9d-17c3b2-ffcb77-fef9ef-fe6d73");
let bg;

function setup() {
  createCanvas(600, 600);
  smooth();
  document.getElementById("save-button").addEventListener('click', () => { onSaveButtonClicked(canvas); });

  bg = createGraphics(width, height);
  bg.noStroke();
  bg.fill(lerpColor(color(Pallete[3] + "20"), color(0,10), 0.2));
  for (let i = 0; i < 30000; i++) {
    let x = random(width);
    let y = random(height);
    let s = noise(x*0.01, y*0.01)*1 + 1;
    bg.rect(x, y, s, s);
  }

  background(250);

  noLoop();
}

function draw() {
  
  rectMode(CENTER);
  //fill(50);
  noFill();
  //noStroke();

  rect(width/2, height/2, 200);

  stroke(250);
  strokeWeight(2);
  line(width/2+100, height/2-30, width/2+100, height/2+48);

  fill(50);
  noStroke();
  rect(width/2 + 90, height/2 + 45, 150, 8);

  image(bg,0,0);
}

function createCols(_url) {
  let slash_index = _url.lastIndexOf('/');
  let pallate_str = _url.slice(slash_index + 1);
  let arr = pallate_str.split('-');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = '#' + arr[i];
  }
  return arr;
}

function onSaveButtonClicked(canvas) {
  saveCanvas(canvas, "result", "jpg");
}