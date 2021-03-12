fps_stat = document.querySelector('#fps');
load_stat = document.querySelector('#load_stat');
var load_stat_arr = [];
var threshold_value = 100;

function draw(video, canvas, context, frameRate, options, old_time) {

    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    if (video.readyState === video.HAVE_ENOUGH_DATA) {

        tick = new Date().getTime();

        switch (options.selection) {
            case "threshold":
                treshold(context, canvas.width, canvas.height);
                break;
            case "raw":
                break;
            case "edge_detection":
                edge_detection(context, canvas.width, canvas.height);
                break;
            default:
        }
        //calculate and show loadtimeS
        let load_time = (new Date().getTime() - tick)
        load_stat_arr.push(load_time)
        if (load_stat_arr.length == 30) {
            load_stat.textContent = ((load_stat_arr.reduce((a, b) => a + b, 0)) / 30).toFixed(0);
            load_stat_arr.splice(0, load_stat_arr.length)
        }
    }
    new_time = new Date().getTime();
    fps = 1000 / (new_time - old_time);
    fps_stat.textContent = fps.toFixed(2);
    setTimeout(draw, 1000 / frameRate, video, canvas, context, frameRate, options, new_time);
    //requestAnimationFrame() runs much better. implement this.. 
}


function treshold(context, width, height) {
    let image, data, r, g, b, color;

    image = context.getImageData(0, 0, width, height);
    data = image.data;

    for (let i = 0; i < data.length; i = i + 4) {
        r = data[i];
        g = data[i + 1];
        b = data[i + 2];

        if ((r + b + g) / 3 < threshold_value) {
            color = 0; // black
        } else {
            color = 255; // white
        }
        data[i] = data[i + 1] = data[i + 2] = color;
    }

    image.data = data;
    context.putImageData(image, 0, 0);
}

function edge_detection(context, width, height) {
    let image;

    image = context.getImageData(0, 0, width, height);

    let src = cv.matFromImageData(image);

    src = convertImageToGray(src);

    let dst = new cv.Mat();
    let Gx = new cv.Mat();
    let Gy = new cv.Mat();
    let Kx = cv.matFromArray(3, 3, cv.CV_8S, [-1, 0, 1, -2, 0, 2, -1, 0, 1]);
    let Ky = cv.matFromArray(3, 3, cv.CV_8S, [1, 2, 1, 0, 0, 0, -1, -2, -1]);

    cv.filter2D(src, Gx, cv.CV_8U, Kx, anchor = new cv.Point(-1, -1), 0, cv.BORDER_DEFAULT);
    cv.filter2D(src, Gy, cv.CV_8U, Ky, anchor = new cv.Point(-1, -1), 0, cv.BORDER_DEFAULT);

    cv.add(Gx, Gy, dst);
    dst = flip(dst);

    cv.imshow('canvas', dst);

    src.delete();
    dst.delete();
    Gx.delete();
    Gy.delete();
    Kx.delete();
    Ky.delete();
}

function update_threshold(value) {
    console.log(value);
    threshold_value = value;
    document.getElementById('th_output').textContent = value;
}

function convertImageToGray(img) {
    let dst = new cv.Mat();
    cv.cvtColor(img, dst, cv.COLOR_RGBA2GRAY, 0);
    return dst;
}

function flip(img) {
    let dst = new cv.Mat();
    cv.flip(img, dst, 1);
    return dst;
}