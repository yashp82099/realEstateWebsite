// const { Carousel } = require("bootstrap");


window.addEventListener('DOMContentLoaded', () => {
    
    delayedGreeting();
    fetch('https://api.bridgedataoutput.com/api/v2/test/listings?access_token=6baca547742c6f96a6ff71b138424f21&limit=5')
    .then(response => response.json())
    .then(data => listingHouses(data['bundle']) )

});


function listingHouses(listing,pot){
    let div = document.querySelector('slideshow')
 
}


function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
  }
  
  async function delayedGreeting() {
    console.log("Hello");
    await sleep(2000);
    console.log("World!");
    await sleep(2000);
    console.log("Goodbye!");
    for (let index = 0; index < 5; index++) {
        await sleep(2000);
        console.log(index);
        
    }    
}
  