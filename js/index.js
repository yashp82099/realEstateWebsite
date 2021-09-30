
window.addEventListener('DOMContentLoaded', () => {
    
    // delayedGreeting();
    fetch('https://api.bridgedataoutput.com/api/v2/test/listings?access_token=6baca547742c6f96a6ff71b138424f21&limit=5')
    .then(response => response.json())
    .then(data => listingHouses(data['bundle']) )

});


async function listingHouses(listing){
    let div = document.querySelector('.slideshow')

    for (let i = 0; i < listing.length; i++) {
        let img = document.createElement('img')
        console.log(listing[i]["Media"][1]['MediaURL']);
        img.src = listing[i]['Media'][1]['MediaURL']
        // img.width = '100%'
        img.classList.add('slideimg')
        div.appendChild(img)
        await delay(3)
        div.innerHTML = ""
    }
     
}


// function sleep(ms) {
//     return new Promise(
//       resolve => setTimeout(resolve, ms)
//     );
//   }
  
//   async function delayedGreeting() {
//     console.log("Hello");
//     await sleep(2000);
//     console.log("World!");
//     await sleep(2000);
//     console.log("Goodbye!");
//     for (let index = 0; index < 5; index++) {
//         await sleep(2000);
//         console.log(index);
        
//     }    
// }

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}