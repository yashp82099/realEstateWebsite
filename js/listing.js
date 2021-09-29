


window.addEventListener('DOMContentLoaded', () => {
    let pot = document.getElementsByClassName('port-area')
    fetch('https://api.bridgedataoutput.com/api/v2/test/listings?access_token=6baca547742c6f96a6ff71b138424f21&limit=20')
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

function listing(list, n = 0) {
    // const faker = require('faker');

    if(n > 20-3 ){
        console.log('reset');
        n = 0
    }else{
        console.log('next');
        n = n
    }
     

    //console.log(list);


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
    let container = document.querySelector('.listing')
    container.innerHTML=" "
    let row = document.createElement('div')
    row.className='row'
    let backcol = document.createElement('div')
    backcol.classList.add('col-1')
    
    let listcol = document.createElement('div')
    listcol.classList.add('col-10')
    let listcon = document.createElement('div')
    listcon.className = 'conatiner'
    let listrow = document.createElement('div')
    listrow.className = 'row'
    let back = document.createElement('button')
    back.addEventListener('click', ()=>{
        console.log('current n is'+n);
        n = n-6
        if(n<0){
            n = 15
        }
        console.log('back n is '+n);
        listing(list,n)})
    back.textContent='Back'
    backcol.appendChild(back)
    row.appendChild(backcol)
    for (let i = 0; i < 3; i++) {
       console.log(n)
       n += 1
       let col = document.createElement('div')
       col.classList.add('col-md-4')
       let card = '<div class="card bg-dark text-white"> <img src='+ list[n]['Media'][0]['MediaURL']+' class="card-img" alt="..."> <div class="card-img-overlay"> <h5 class="card-title"> house '+ n +'</h5> <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> <p class="card-text">Last updated 3 mins ago</p> </div> </div>'
       col.innerHTML= card
       listrow.appendChild(col) 
    }
    listcon.appendChild(listrow)
    listcol.appendChild(listcon)
    row.appendChild(listcol)
    let nextcol = document.createElement('div')
    nextcol.className ='col-1'
    let next = document.createElement('button')
    next.addEventListener('click', ()=>{listing(list,n)})
    next.textContent = 'next'
    nextcol.appendChild(next)
    row.appendChild(nextcol)
    container.appendChild(row)
    let more = document.createElement('button')
    more.textContent = 'all'
    more.addEventListener('click',()=>{
        wholelisting(list)
    })
    container.appendChild(more)
    // wholelisting(list)
}


function wholelisting(list){
    let oldlist = document.querySelector('.listing')
    oldlist.innerHTML=''

    let row = document.createElement('div')
    row.classList.add('row')
    for (let i = 0; i < list.length; i++) {
        console.log(i)
        // n += 1
        let col = document.createElement('div')
        col.classList.add('col-md-4')
        let card = '<div class="card bg-dark text-white"> <img src='+ list[i]['Media'][0]['MediaURL']+' class="card-img" alt="..."> <div class="card-img-overlay"> <h5 class="card-title"> house '+ i +'</h5> <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> <p class="card-text">Last updated 3 mins ago</p> </div> </div>'
        col.innerHTML= card
        row.appendChild(col) 
     }
    let container = document.querySelector('.mainlist')
     container.appendChild(row)
      let less = document.createElement('button')
      less.textContent = 'Less'
      less.addEventListener('click', () =>{
          container.innerHTML = ''
          listing(list)
      })
      container.appendChild(less)


}