const PALLETE = makePalette("https://coolors.co/463f3a-8a817c-bcb8b1-f4f3ee-e0afa0");
let bg;

function setup() {
  createCanvas(500, 500);

  bg = createGraphics(width, height);
  bg.noStroke();
  bg.fill(lerpColor(color(PALLETE[3] + "15"), color(0,10), 0.2));
  for (let i = 0; i < 30000; i++) {
    let x = random(width);
    let y = random(height);
    let s = noise(x*0.01, y*0.01)*1 + 1;
    bg.rect(x, y, s, s);
  }

  background(PALLETE[3]);
  image(bg,0,0);
}

function draw() {

}

function makePalette(_url) {
  let slash_index = _url.lastIndexOf('/');
  let pallate_str = _url.slice(slash_index + 1);
  let arr = pallate_str.split('-');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = '#' + arr[i];
  }
  return arr;
}