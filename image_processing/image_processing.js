function draw(video, canvas, context, frameRate, options) {
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
        switch (options.selection) {
            case "threshold":
                treshold(context, 100, canvas.width, canvas.height)
                break;
            case "raw":
                break;
            default:
                //raw
        }
    }
    setTimeout(draw, 1 / frameRate, video, canvas, context, frameRate, options);
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