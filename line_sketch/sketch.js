let img;

function preload() {
	img = loadImage("deer.jpg");
}

function setup() {
	createCanvas(600, 600);
  img.resize(600, 600);
	background(0);
	noLoop();
  document.getElementById("save-button").addEventListener('click', () => { onSaveButtonClicked(canvas); });
}

function draw() {
	background(255);
	//image(img, 0, 0);
	
	//img.loadPixels();

	for (var y = 0; y < img.height; y += 5) {
		for (var x = 0; x < img.width; x += 5) {
			
			var c = img.get(x, y);
			// Fast but complicated
      // var c = color(img.pixels[(y*img.width+x)*4]);
			
			fill(c);
			stroke(c);
			//noFill(c);
			//triangle(x, y, x-5, y-8, x+5, y-1);
      //line(x, y, x+5, y-10);
      ellipse(x, y, 2, 2);
		}
	}
}

function onSaveButtonClicked(canvas) {
  saveCanvas(canvas, "result", "jpg");
}