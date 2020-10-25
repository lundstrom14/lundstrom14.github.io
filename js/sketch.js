//p5 introduction. Code from the coding train

let time = 0;
let wave = [];

function setup() {
    createCanvas(800, 800);
    frameRate(45);
    slider = createSlider(1, 15, 5, 2);
    slider.position(200, 500);

}

function draw() {
    background(0);
    fill(255);
    stroke(255);
    text('n = ' + slider.value(), slider.x + slider.width + 10, slider.y);
    translate(250, 300);
    noFill();

    let r = 100;
    let x = 0;
    let y = 0;


    for (let i = 0; i <= slider.value(); i++) {
        let prev_x = x;
        let prev_y = y;

        n = 2 * i + 1;
        r = 100 * (4 / (n * PI));
        x += r * cos(n * time);
        y += r * sin(n * time);
        stroke(255, 100);
        ellipse(prev_x, prev_y, 2 * r);
        stroke(255);
        line(prev_x, prev_y, x, y);
        //r = r / 1.5; // or using logs for smoother downsizing
    }




    stroke('rgba(255,204,0,0.5)'); // yellow w transparancy

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