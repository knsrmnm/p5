let c = ["#B2D3E1", "#F1EDEA", "#E7CEBF", "#D65353", "#F7C45F", "#28364A"];
// let c = ["#F1EDEA", "#2b78a2", "#6ea8c9", "#fcd9dd", "#f9e2cf", "#f2cdaf"];
//let c = ["#F1EDEA", "#65656f", "#c5bfc3", "#e7e5e6", "#cecdd5"];
const Pallete = createCols("https://coolors.co/227c9d-17c3b2-ffcb77-fef9ef-fe6d73");
let bg;

function setup() {
  let canvas = createCanvas(500, 500);
  noStroke();
  document.getElementById("save-button").addEventListener('click', () => { onSaveButtonClicked(canvas); });
  angleMode(DEGREES);

  bg = createGraphics(width, height);
  bg.noStroke();
  bg.fill(lerpColor(color(Pallete[3] + "20"), color(0,10), 0.2));
  for (let i = 0; i < 50000; i++) {
    let x = random(width);
    let y = random(height);
    let s = noise(x*0.01, y*0.01)*1 + 1;
    bg.rect(x, y, s, s);
  }

  //background("#F1EDEA");
  background(Pallete[3]);
  image(bg,0,0);

  let cells = 8;
  let offset = width / 5;
  let margin = offset / 1.5;
  
  let w = (width - offset * 2 - margin * (cells - 1)) / cells;
  let h = (height - offset * 2 - margin * (cells - 1)) / cells;

  for (let j = 0; j < cells; j++) {
    for (let i = 0; i < cells; i++) {
      let x = offset + i * (w + margin);
      let y = offset + j * (h + margin);

      push();
      translate(x, y);

      let cols = 3;
      let rows = cols;
      let cellW = w / cols;
      let cellH = h / rows;

      for (let i2 = 0; i2 < cols; i2++) {
        for (let j2 = 0; j2 < rows; j2++) {
          let tx = i2 * cellW;
          let ty = j2 * cellH;

          push();
          translate(tx + w / 14, ty + h / 14);

          rectMode(CENTER);

          //stroke("#F1EDEA");
          noStroke();
          fill(random(c));
          rect(0, 0, cellW, cellH);
          pop();
        }
      }
      pop();
    }
  }
}

function onSaveButtonClicked(canvas) {
  saveCanvas(canvas, "result", "jpg");
}

function createCols(_url)
{
  let slash_index = _url.lastIndexOf('/');
  let pallate_str = _url.slice(slash_index + 1);
  let arr = pallate_str.split('-');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = '#' + arr[i];
  }
  return arr;
}