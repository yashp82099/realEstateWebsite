

window.addEventListener('DOMContentLoaded', () => {
    let pot = document.getElementsByClassName('port-area')
    fetch('https://api.bridgedataoutput.com/api/v2/test/listings?access_token=6baca547742c6f96a6ff71b138424f21&limit=50')
        .then(response => response.json())
        .then(data => listing(data['bundle']))

});


function propertylisting(listing) {
    console.log(listing);
    for (let i = 0; i < listing.length; i++) {
        let div = document.createElement('div')
        let col = document.createElement('div')
        col.className = 'col'
        div.classList.add('card', 'h-100')

        col.appendChild(div)
        console.log(listing[i]['Media'][4]['MediaURL']);
        let img = document.createElement('img')
        img.src = listing[i]['Media'][0]['MediaURL']
        img.className = 'card-img-top'
        // console.log(img);
        div.appendChild(img)
        let cardbody = document.createElement('div')
        cardbody.className = 'card-body'
        let cardtitel = document.createElement('h2')
        cardtitel.className = 'card-title'
        cardtitel.textContent = 'title'
        let cardtext = document.createElement('p')
        cardtext.className = 'card-text'
        cardtext.textContent = 'dajkfhksjdhf sakjdfhasdjkfhkas asdfkjahs'

        cardbody.appendChild(cardtitel)
        cardbody.appendChild(cardtext)
        div.appendChild(cardbody)

        // console.log(div);
        let cardGroup = document.querySelector('.listing')
        console.log(cardGroup);
        cardGroup.appendChild(col)
    }
}

function listing(list) {
    // const faker = require('faker');
    var streetNumber = ['2549', '7459', '3478', '1975', '9515', '7865']

    var streetName = ['Lawrence St', 'Main Rd', 'Jefferson Ave', 'Northside St NE', 'Lake Rd', 'Washington Ave',]

    var cityName = ['Riyadh', 'Dammam', 'Jedda', 'Tabouk', 'Makka', 'Maddena', 'Haiel']

    var stateName = ['Qassem State', 'North State', 'East State', 'South State', 'West State']

    var zipCode = ['28889', '96459', '35748', '15005', '99625', '71465']

    function getRandom(input) {
        return input[Math.floor((Math.random() * input.length))];
    }

    function createAdress() {
        return `${getRandom(streetNumber)} ${getRandom(streetName)}`;
    }

    var address = createAdress();
    console.log(address);
    console.log(list);
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
        let row = document.querySelector('.listing-2')
        console.log(row);
        let col = document.createElement('div')

        let card = document.createElement('div')
        card.classList.add('card', 'h-100')

        let img = document.createElement('img')
        img.src = list[i]['Media'][Math.floor(Math.random() * 5)]['MediaURL']
        img.className = 'card-img-top'


        let title = document.createElement('h3')
        title.className ='card-title'
        title.textContent = createAdress()

        // title.textContent
        console.log(list[0]);
        card.appendChild(img)
        card.appendChild(title)

        col.classList.add('col-4', 'p-2')
        col.appendChild(card)
        row.appendChild(col)
    }
}