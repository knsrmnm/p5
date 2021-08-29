// https://coolors.co/463f3a-8a817c-bcb8b1-f4f3ee-e0afa0

let a = ["#495057"];
let b = ["#6c757d"];
let c = ["#adb5bd"];

let bg = ["#f8f9fa"];

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  background(bg);
  document.getElementById("save-button").addEventListener('click', () => { onSaveButtonClicked(canvas); });

  let cells = 5;
  let offset = width / 8;
  let margin = 0;
  let w = (width - offset * 2 - margin * (cells - 1)) / cells;
  let h = (height - offset * 2 - margin * (cells - 1)) / cells;

  let d = w;

  for (let j = 0; j < cells; j++) {
    for (let i = 0; i < cells; i++) {
      let x = offset + i * (w + margin);
      let y = offset + j * (h + margin);

      push();
      translate(x + w / 2, y + h / 2);

      let rotate_num = (int(random(2)) * 360) / 2;

      rotate(rotate_num);

      hako(0, 0, w, h);

      pop();
    }
  }

  // 箱
  function hako(x, y, w, h) {
    push();
    translate(x, y);

    noStroke();

    // 上
    fill(a);

    beginShape();
    vertex(0, -d / 2);
    vertex(d / 2, -d / 4);
    vertex(0, 0);
    vertex(-d / 2, -d / 4);
    endShape();

    // 右
    fill(b);

    beginShape();
    vertex(0, 0);
    vertex(0, d / 2);
    vertex(d / 2, d / 4);
    vertex(d / 2, -d / 4);
    endShape();

    // 左
    fill(c);

    beginShape();
    vertex(0, 0);
    vertex(0, d / 2);
    vertex(-d / 2, d / 4);
    vertex(-d / 2, -d / 4);
    endShape();

    pop();
  }
}

function onSaveButtonClicked(canvas) {
  saveCanvas(canvas, "result", "jpg");
}