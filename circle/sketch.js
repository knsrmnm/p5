const Pallete = createCols("https://coolors.co/463f3a-8a817c-bcb8b1-f4f3ee-e0afa0");
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
  fill(30);
  //noFill();
  noStroke();

  quad(width/2-150, height/2+100, width/2+130, height/2+100, width/2+40, height/2-100, width/2-150, height/2-100);

  fill(230);
  triangle(width/2+10, height/2+100, width/2+130, height/2+100, width/2+60, height/2+160);

  //rect(width/2, height/2, 300, 200);

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