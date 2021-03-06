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
                town.name === "Preston" ||
                town.name === "Soda Springs" ||
                town.name === "Fish Haven"
        );

        townsfilter.forEach(town => {
            // const cards = document.querySelector(".cards");
            let card = document.createElement('section');
            let data = document.createElement("div");
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let p = document.createElement('p');
            let image = document.createElement('img');


            h2.innerHTML = `${town.name}`;
            h3.innerHTML = `${town.motto}`;
            p.innerHTML = `Year Founded: ${town.yearFounded} <br> Population: ${town.currentPopulation} <br> Annual Rain Fall: ${town.averageRainfall}`;
            image.setAttribute("src", `images/${town.photo}`);
            image.setAttribute('alt', `${town.name}`);



            data.appendChild(h2);
            data.appendChild(h3);
            data.appendChild(p);
            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card).appendChild(data);


        });
    });
