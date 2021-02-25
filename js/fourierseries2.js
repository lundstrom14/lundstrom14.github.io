//p5 introduction. Code from the coding train

let time = 0;
let wave_y = [];
let wave_x = [];
let y_signal = [];
let afro_t = [11, 188,
    9, 183,
    7, 181,
    4, 177,
    4, 171,
    5, 167,
    5, 163,
    5, 158,
    8, 154,
    11, 150,
    15, 148,
    17, 142,
    21, 138,
    24, 135,
    29, 130,
    31, 126,
    36, 124,
    40, 123,
    43, 118,
    48, 114,
    53, 115,
    58, 113,
    63, 108,
    68, 104,
    71, 96,
    67, 91,
    61, 88,
    59, 82,
    53, 82,
    54, 77,
    50, 73,
    45, 71,
    46, 67,
    48, 62,
    43, 60,
    42, 55,
    44, 50,
    42, 46,
    40, 42,
    42, 37,
    47, 34,
    47, 28,
    47, 24,
    53, 21,
    58, 17,
    60, 13,
    66, 12,
    69, 7,
    73, 6,
    79, 6,
    82, 1,
    87, 3,
    94, 2,
    100, 3,
    105, 5,
    110, 5,
    115, 8,
    121, 9,
    124, 13,
    128, 18,
    131, 23,
    134, 27,
    135, 31,
    136, 37,
    138, 43,
    139, 49,
    137, 54,
    135, 59,
    131, 64,
    127, 68,
    126, 74,
    123, 79,
    124, 86,
    124, 94,
    128, 92,
    135, 87,
    137, 83,
    143, 79,
    147, 76,
    153, 70,
    156, 65,
    160, 62,
    167, 57,
    171, 53,
    175, 49,
    180, 44,
    184, 40,
    189, 34,
    192, 29,
    196, 22,
    199, 18,
    204, 15,
    211, 11,
    217, 11,
    219, 14,
    219, 18,
    216, 20,
    213, 23,
    211, 26,
    210, 30,
    215, 31,
    220, 37,
    223, 38,
    223, 41,
    221, 49,
    219, 51,
    214, 52,
    210, 52,
    214, 48,
    218, 44,
    214, 47,
    211, 50,
    209, 50,
    211, 46,
    212, 41,
    211, 38,
    206, 33,
    203, 32,
    205, 33,
    209, 38,
    210, 41,
    210, 46,
    208, 48,
    204, 49,
    200, 48,
    199, 44,
    200, 46,
    200, 51,
    198, 55,
    202, 50,
    207, 50,
    208, 54,
    206, 58,
    204, 64,
    201, 66,
    198, 65,
    193, 61,
    190, 58,
    186, 48,
    187, 52,
    191, 58,
    194, 64,
    188, 66,
    184, 69,
    180, 71,
    180, 72,
    182, 75,
    177, 79,
    174, 80,
    171, 82,
    168, 85,
    166, 87,
    167, 89,
    169, 92,
    164, 95,
    160, 97,
    157, 100,
    153, 104,
    151, 110,
    151, 111,
    154, 111,
    157, 109,
    164, 104,
    169, 100,
    172, 98,
    177, 95,
    183, 90,
    185, 87,
    190, 82,
    193, 79,
    196, 75,
    199, 73,
    192, 79,
    184, 85,
    177, 91,
    170, 95,
    164, 101,
    159, 106,
    154, 112,
    152, 115,
    148, 119,
    142, 123,
    137, 128,
    133, 133,
    130, 135,
    130, 131,
    130, 126,
    129, 126,
    129, 121,
    127, 115,
    123, 111,
    118, 107,
    115, 106,
    113, 104,
    114, 102,
    122, 100,
    124, 100,
    117, 100,
    107, 100,
    100, 99,
    97, 98,
    94, 97,
    87, 98,
    87, 95,
    91, 92,
    95, 89,
    98, 86,
    97, 79,
    95, 79,
    88, 75,
    90, 75,
    97, 71,
    101, 69,
    104, 68,
    110, 70,
    115, 72,
    117, 77,
    117, 82,
    116, 87,
    113, 89,
    108, 87,
    109, 87,
    114, 88,
    116, 83,
    116, 78,
    119, 76,
    123, 75,
    127, 71,
    127, 68,
    123, 66,
    120, 66,
    115, 66,
    111, 67,
    106, 68,
    103, 69,
    110, 68,
    115, 65,
    119, 64,
    124, 64,
    127, 62,
    128, 57,
    127, 55,
    122, 54,
    120, 53,
    120, 50,
    114, 47,
    109, 48,
    107, 49,
    104, 47,
    98, 47,
    95, 49,
    90, 46,
    85, 44,
    81, 48,
    77, 49,
    75, 53,
    76, 56,
    73, 59,
    71, 64,
    73, 68,
    80, 66,
    84, 62,
    91, 60,
    96, 62,
    98, 68,
    94, 72,
    88, 74,
    83, 74,
    80, 70,
    77, 68,
    69, 68,
    65, 70,
    66, 76,
    67, 80,
    70, 83,
    71, 88,
    70, 93,
    69, 101,
    70, 108,
    71, 113,
    73, 119,
    74, 126,
    77, 130,
    81, 134,
    83, 136,
    85, 139,
    86, 143,
    86, 148,
    87, 154,
    87, 159,
    88, 165,
    88, 173,
    88, 180,
    87, 186,
    87, 188,
    85, 187,
    82, 180,
    79, 174,
    76, 166,
    73, 162,
    69, 157,
    68, 155,
    66, 151,
    65, 148,
    68, 142,
    75, 136,
    76, 136,
    70, 141,
    65, 147,
    62, 149,
    61, 148,
    61, 142,
    62, 132,
    62, 124,
    62, 118,
    62, 120,
    61, 128,
    61, 137,
    61, 142,
    59, 143,
    49, 131,
    47, 127,
    42, 124,
    47, 128,
    52, 134,
    53, 140,
    53, 148,
    52, 154,
    48, 157,
    42, 161,
    40, 168,
    40, 171,
    42, 177,
    44, 180,
    48, 184,
    50, 187
];



let Y; // dft of y_signal

function setup() {
    var canvas = createCanvas(1000, 600);
    frameRate(60);
    //Y = dft(y_signal); //take the discrete fourier transform of the y-signal input
    let afro_y = [];
    let afro_x = [];
    for (let i = 1; i < afro_t.length; i += 2) {
        afro_y.push(afro_t[i]);
        afro_x.push(afro_t[i - 1]);
    }
    for (let i = 0; i < 100; i += 1) {
        y_signal.push(i);
    }
    Y = dft(afro_y);
    X = dft(afro_x);
}

function draw() {

    background(color("#252934"));
    fill(255);
    stroke(255);
    translate(250, 350);
    noFill();

    let x1 = 0;
    let y1 = 0;
    let r1;

    // perform inverse transform of our dft
    N = Y.length;
    // Calculate pos for each circle -> Y value of dtf
    for (let k = 0; k < N; k++) {
        let prev_x = x1;
        let prev_y = y1;

        r1 = Y[k].amp / N;

        x1 += r1 * cos((Y[k].freq * time) + Y[k].phase + HALF_PI);
        y1 += r1 * sin((Y[k].freq * time) + Y[k].phase + HALF_PI);
        stroke(255, 100);
        ellipse(prev_x, prev_y, 2 * r1);
        stroke(255);
        line(prev_x, prev_y, x1, y1);
    }

    let x2 = 0;
    let y2 = 0;
    let r2;
    N = X.length;
    // Calculate pos for each circle -> X value of dtf
    translate(200, -200);
    for (let k = 0; k < N; k++) {
        let prev_x = x2;
        let prev_y = y2;

        r2 = X[k].amp / N;
        x2 += r2 * cos((X[k].freq * time) + X[k].phase);
        y2 += r2 * sin((X[k].freq * time) + X[k].phase);
        stroke(255, 100);
        ellipse(prev_x, prev_y, 2 * r2);
        stroke(255);
        line(prev_x, prev_y, x2, y2);
    }
    translate(0, 200);

    stroke('rgba(255,204,0,0.5)'); // yellow w transparancy

    // Draw connecting lines
    line(x1 - 200, y1, x2, y1);
    line(x2, y2 - 200, x2, y1);

    stroke('yellow');
    beginShape();
    wave_y.unshift(y1); //save y value for wave vis
    wave_x.unshift(x2); //save y value for wave vis
    for (let i = 0; i < wave_y.length; i++) {
        vertex(wave_x[i], wave_y[i]);
    }
    endShape();

    point(x2, y1);
    let dt = 2 * PI / N;
    time += dt;

    if (time > 2 * TWO_PI) { // Clear time and drawing after two iterations. Would not like to make vertex too large for performance
        time = 0;
        wave_x = [];
        wave_y = [];
    }
}


function dft(y) {
    N = y.length;
    let Y_k = {};
    let Y = new Array(N);

    for (let k = 0; k < N; k++) {
        Y_k.re = 0;
        Y_k.im = 0;
        for (let n = 0; n < N; n++) {
            Y_k.re += y[n] * cos(2 * PI * k * n / N);
            Y_k.im += -y[n] * sin(2 * PI * k * n / N);
        }
        Y_k.amp = sqrt(Y_k.re ** 2 + Y_k.im ** 2);
        Y_k.phase = atan2(Y_k.im, Y_k.re); //in rad
        Y_k.freq = k;


        Y[k] = JSON.parse(JSON.stringify(Y_k));
    }

    // Before here its sorted by frequency as freq = 0,1,...,N. i.e. the outermost circle has the highest frequency
    // Since each added circle is basically vector addition we can move the order of terms.
    // Here we want the largest circle first, and the smallest furthest out for a nicer look. 
    // --> Means we have to sort by amplitude, i.e the DFT terms

    Y.sort(function(a, b) {
        return b.amp - a.amp;
    })

    return Y;
}