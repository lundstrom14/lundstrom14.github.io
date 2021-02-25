fps_stat = document.querySelector('#fps');
load_stat = document.querySelector('#load_stat');
var load_stat_arr = [];

function draw(video, canvas, context, frameRate, options, old_time) {

    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    if (video.readyState === video.HAVE_ENOUGH_DATA) {

        tick = new Date().getTime();

        switch (options.selection) {
            case "threshold":
                treshold(context, 100, canvas.width, canvas.height)
                break;
            case "raw":
                break;
            default:
        }
        //calculate and show loadtime
        let load_time = (new Date().getTime() - tick)
        load_stat_arr.push(load_time)
        if (load_stat_arr.length == 30) {
            load_stat.textContent = ((load_stat_arr.reduce((a, b) => a + b, 0)) / 30).toFixed(0);
            load_stat_arr.length = 0
        }
    }
    new_time = new Date().getTime();
    fps = 1000 / (new_time - old_time);
    fps_stat.textContent = fps.toFixed(2);
    setTimeout(draw, 1000 / frameRate, video, canvas, context, frameRate, options, new_time);
    //requestAnimationFrame() runs much better. implement this.. 
}


function treshold(context, threshold, width, height) {
    let image, data, r, g, b, color;

    image = context.getImageData(0, 0, width, height);

    data = image.data;

    for (let i = 0; i < data.length; i = i + 4) {
        r = data[i];
        g = data[i + 1];
        b = data[i + 2];

        if ((r + b + g) / 3 < threshold) {
            color = 0; // black
        } else {
            color = 255; // white
        }

        data[i] = data[i + 1] = data[i + 2] = color;
    }

    image.data = data;

    context.putImageData(image, 0, 0);

}