const fapiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=38.653651993577625&lon=-121.16038949203487&units=imperial&appid=b13d7d422b80f4f95da3b17a23b44798';

fetch(fapiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        if (jsObject.alert == true) {
            alert(jsObject.alerts[0].description)
        }
        console.log(jsObject);


        var i = 1;

        for (x = 0; x < 4; x++) {

            // if (jsObject.list[x].dt_txt.includes("18:00:00")) {

            var hum = "hum" + i;
            var date = "dayofweek" + i;
            var temp = "forecast" + i;
            var icon = "ficon" + i;
            const imagesrc = 'https://openweathermap.org/img/wn/' + jsObject.daily[x].weather[0].icon + '@2x.png';
            var desc = "desc" + i;



            document.getElementById(temp).textContent = Math.round(jsObject.daily[x].temp.max);
            document.getElementById(icon).setAttribute('src', imagesrc);
            document.getElementById(icon).setAttribute('alt', desc);
            document.getElementById(desc).textContent = jsObject.daily[x].weather[0].description;
            document.getElementById(hum).textContent = jsObject.daily[x].humidity + '% Humidity';
            // let d = new Date(jsObject.daily[x].dt);
            let d = new Date((jsObject.daily[x].dt) * 1000);
            const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

            document.getElementById(date).textContent = dayofWeek[d.getDay()];
            i++;
            // }


        }
        // if (jsObject.current = true) {
        //     alert(jsObject.current.temp);
        // }
    }
    );


