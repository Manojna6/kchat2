status = "";

function preload() {
    image = loadImage("stairs.jpg")
}
function setup() {
    canvas = createCanvas(504, 672);
    canvas.center();
    model = ml5.objectDetector("cocossd",modelloaded);
    status = "Detecting Objects";
}
function draw() {
    
}
function modelloaded() {
    status = true;
    console.log("model is loaded");
    model.detect(image,results);
}
function results(error, results) {
    console.log(results);
}