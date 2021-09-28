// const { Carousel } = require("bootstrap");

window.addEventListener('DOMContentLoaded', () => {
    let pot = document.getElementsByClassName('port-area')
    fetch('https://api.bridgedataoutput.com/api/v2/test/listings?access_token=6baca547742c6f96a6ff71b138424f21&limit=5')
    .then(response => response.json())
    .then(data => listingHouses(data['bundle'],pot) )

});


function listingHouses(listing,pot){
    console.log(listing.length)
    let listnum = 0
    
    for(let i = 0; i < listing.length;i++){
        
        //console.log(piclist);
        
        console.log(listing[i]['Media'][0]['MediaURL'])
        let img = document.createElement('img')
        img.src = listing[i]['Media'][0]['MediaURL']
        // piclist.appendChild(img)
        document.querySelector(".port-area").appendChild(img)
        console.log(document.querySelector(".listing"));
    }
    
}