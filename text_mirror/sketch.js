let camera;
let sampleSize = 3;
let camWidth = 320;
let camHeight = 240;
let proportion = camWidth / camHeight;
let threshold;
let multiplier;
let thresholdSlider;

let message = "ABCDEFG";
let messageIndex = 0;

function setup() {
	camera = createCapture(VIDEO);
	camera.size(camWidth, camHeight);
	camera.hide();

	//halfway point for colors
	threshold = round((255 * 3) / 2);
	if (windowHeight < windowWidth) {
		createCanvas(round(windowHeight * proportion), windowHeight);
	} else {
		createCanvas(windowWidth, round(windowHeight * (1 / proportion)));
	}
	multiplier = width / camWidth;
	noStroke();
	thresholdSlider = createSlider(0, 765, threshold);
	thresholdSlider.position((width / 2) - (thresholdSlider.width / 2), height - 40);
	//use a monospace font
	textFont('Courier New');
	textSize(sampleSize * multiplier);
	print(message);
}

let i, r, g, b, rSize, gSize, bSize;

function draw() {
	messageIndex = 0;
	background(255);
	camera.loadPixels();
	//create a grid of nested circles
	for (let y = 0; y < camera.height; y += sampleSize) {
		for (let x = 0; x < camera.width; x += sampleSize) {
			i = ((y * camera.width) + x) * 4;
			r = camera.pixels[i];
			g = camera.pixels[i + 1];
			b = camera.pixels[i + 2];
			if (r + g + b < thresholdSlider.value()) {
				text(message[messageIndex], x * multiplier, y * multiplier);
				messageIndex++;
				messageIndex %= message.length;
			}
		}
	}
	fill(0);
	text("Threshold: " + thresholdSlider.value(), thresholdSlider.x - textWidth("Threshold: " + thresholdSlider.value()), thresholdSlider.y + 10);
}