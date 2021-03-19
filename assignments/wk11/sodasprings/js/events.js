const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)

    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];

        const townsfilter = towns.filter(
            (town) =>
                town.name === "Soda Springs"
        );

        townsfilter.forEach(town => {

            let data = document.createElement("div");
            let p = document.createElement('p');

            p.innerHTML = `${town.events[0]} <br> ${town.events[1]} <br> ${town.events[2]}`;
            data.appendChild(p);

            document.querySelector('div.cards').appendChild(data);

        });
    });


