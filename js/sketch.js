//p5 introduction. Code from the coding train

let time = 0;
let wave = [];

function setup() {
    createCanvas(800, 800);
    frameRate(45);
}

function draw() {
    background(0);
    translate(250, 300);

    let r = 100;
    stroke(255);
    noFill();
    ellipse(0, 0, 2 * r);

    let x = r * cos(time);
    let y = r * sin(time);
    let r2 = 50;
    ellipse(x, y, 2 * r2);
    line(0, 0, x, y);
    stroke('rgba(255,204,0,0.5)');
    line(x, y, 200, y);

    translate(200, 0);
    stroke('yellow');

    beginShape();
    wave.unshift(y); //save y value for wave vis
    for (let i = 0; i < wave.length; i++) {
        vertex(i, wave[i]);
    }
    endShape();

    point(0, y);

    if (wave.length > 700) {
        wave.pop();
    }

    time += 0.04;
}