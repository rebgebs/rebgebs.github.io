const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';

fetch(requestURL)

    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];
        prophets.forEach(prophet => {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let p = document.createElement('p');
            let image = document.createElement('img');

            h2.innerHTML = `${prophet.name} ${prophet.lastname} `;
            p.innerHTML = `Date of Birth: ${prophet.birthdate} <br> Place of Birth: ${prophet.birthplace}`;
            image.setAttribute("src", prophet.imageurl);
            image.setAttribute('alt', `${prophet.name} ${prophet.lastname} -${prophet.order}`)



            card.appendChild(h2);
            card.appendChild(p);
            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);
        })
    });
