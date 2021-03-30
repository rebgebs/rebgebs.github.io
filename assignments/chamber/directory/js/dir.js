const requestURL = 'https://rebgebs.github.io/assignments/chamber/directory/dir.json';

fetch(requestURL)

    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const dir = jsonObject['directory'];
        dir.forEach(bus => {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let p = document.createElement('p');
            let image = document.createElement('img');

            h2.innerHTML = `${bus.business}`;
            p.innerHTML = `Address: ${bus.birthdate} <br> Phone Number: ${bus.birthplace} <br> ${bus.web}`;
            image.setAttribute("src", bus.logo);
            image.setAttribute('alt', `${bus.business}`)



            card.appendChild(h2);
            card.appendChild(p);
            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);
        })
    });
