let query = document.querySelector('.query');
const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', function () {
    let url = 'https://www.google.com/search?q=' + query.value;
    window.open(url);
    console.log("Działa");
})