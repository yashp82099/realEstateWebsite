window.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.bridgedataoutput.com/api/v2/test/listings?access_token=6baca547742c6f96a6ff71b138424f21&limit=50')
    .then(response => response.json())
    .then(data => console.log(data['bundle'][0]))

});