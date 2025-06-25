let query = document.querySelector('.query');
// const searchButton = document.querySelector('.search-button');

function search() {
  let url = 'https://www.google.com/search?q=' + query.value;
  window.open(url);
}

query.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    search();
  }
});

function CurrentTime() {
  const today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();

  minutes = checkTime(minutes);

  document.getElementById('clock').innerHTML = hours + ':' + minutes;
  setTimeout(CurrentTime, 1000);
}

function checkTime(x) {
  if (x < 10) {
    x = '0' + x;
  }
  return x;
}

CurrentTime();

function currentDay() {
  const today = new Date();
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  document.getElementById('day').innerHTML = today.toLocaleDateString('pl-PL', options);
}

currentDay();

const weatherDescriptions = {
  0: 'Słonecznie',
  1: 'Głównie słonecznie',
  2: 'Częściowo zachmurzone',
  3: 'Pochmurno',
  45: 'Mgła',
  48: 'Osadzająca się mgła',
  51: 'Lekka mżawka',
  53: 'Mżawka',
  55: 'Gęsta mżawka',
  61: 'Lekki deszcz',
  63: 'Deszcz',
  65: 'Ulewny deszcz',
  71: 'Lekki śnieg',
  73: 'Śnieg',
  75: 'Obfity śnieg',
  80: 'Przelotny lekki deszcz',
  81: 'Przelotny deszcz',
  82: 'Ulewny przelotny deszcz',
  95: 'Burza',
  96: 'Burza z gradem',
  99: 'Silna burza z gradem',
};

async function getWeather() {
  const lat = 49.776081;
  const lon = 18.735889;

  const weatherData = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`).then((res) => res.json());

  const temp = Math.round(weatherData.current_weather.temperature);
  const code = weatherData.current_weather.weathercode;
  const description = weatherDescriptions[code] || 'Nieznana pogoda';

  document.getElementById('weather').textContent = `${description}, ${temp}°C`;
}

getWeather();
