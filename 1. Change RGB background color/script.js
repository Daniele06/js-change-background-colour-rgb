// onclick of butt
document.getElementById("butt").onclick = function () {

    // Generating random number up to 255 for rgb
    r = Math.floor(Math.random() * Math.floor(255));
    g = Math.floor(Math.random() * Math.floor(255));
    b = Math.floor(Math.random() * Math.floor(255));

    // Applying rgb style to background of body
    var rgb = document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

    // Putting the rgb value in the <p> with id of rgbCode
    document.getElementById("rgbCode").innerHTML = rgb;
    
    // Returning the value
    return rgb;
}