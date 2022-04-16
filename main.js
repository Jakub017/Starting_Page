let query = document.querySelector('.query');
const searchButton = document.querySelector('.search-button');

function search() {
    let url = 'https://www.google.com/search?q=' + query.value;
    window.open(url);
}


searchButton.addEventListener('click', search)
query.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        search();
    }
})