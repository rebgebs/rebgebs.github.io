const fapiURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=42.04248113686761&lon=-111.39570050134503&units=imperial&appid=b13d7d422b80f4f95da3b17a23b44798';

fetch(fapiURL)
    .then((response) => response.json())
    .then((jsObject) => {



        console.log(jsObject);


        var i = 1;

        for (x = 0; x < jsObject.list.length; x++) {

            if (jsObject.list[x].dt_txt.includes("18:00:00")) {


                var date = "dayofweek" + i;
                var temp = "forecast" + i;
                var icon = "ficon" + i;
                const imagesrc = 'https://openweathermap.org/img/wn/' + jsObject.list[x].weather[0].icon + '@2x.png';
                const desc = jsObject.list[x].weather[0].description;


                document.getElementById(temp).textContent = Math.round(jsObject.list[x].main.temp);
                document.getElementById(icon).setAttribute('src', imagesrc);
                document.getElementById(icon).setAttribute('alt', desc);

                let d = new Date(jsObject.list[x].dt_txt);
                const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

                document.getElementById(date).textContent = dayofWeek[d.getDay()];
                i++;
            }


        }
    }
    );


