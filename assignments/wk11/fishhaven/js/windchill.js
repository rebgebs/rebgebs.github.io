
function windchill() {

    let t = parseFloat(document.getElementById('current-temp').innerText = jsObject.main.temp;
    let s = parseFloat(document.getElementById('wind').innerText = jsObject.wind.speed;

    if (t < 50 && s > 3) {

        var f = parseInt(35.74 + (0.6215 * t) - (35.75 * (s ** 0.16)) + (0.4275 * t * (s ** 0.16)));
    }
    else {
        var f = "N/A";
    }
    return f;
}
document.getElementById("chill").innerHTML = windchill();


