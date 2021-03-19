const apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=42.04248113686761&lon=-111.39570050134503&units=imperial&appid=b13d7d422b80f4f95da3b17a23b44798';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);



        function windchill() {

            let t = parseFloat(jsObject.main.temp);
            let s = parseFloat(jsObject.wind.speed);

            if (t < 50 && s > 3) {

                var f = parseInt(35.74 + (0.6215 * t) - (35.75 * (s ** 0.16)) + (0.4275 * t * (s ** 0.16)));
            }
            else {
                var f = "N/A";
            }
            return f;
        }

        document.getElementById('current').innerHTML = jsObject.weather[0].description;
        document.getElementById('current-temp').innerHTML = jsObject.main.temp;
        document.getElementById('wind').innerHTML = jsObject.wind.speed;
        document.getElementById('humidity').innerHTML = jsObject.main.humidity;
        document.getElementById("chill").innerHTML = windchill();
    });





