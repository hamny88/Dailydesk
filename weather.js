const weather = document.querySelector(".js-weather");
const API_KEY = config.weather_KEY;
const COORDS = 'coords';

function getweather(lat,lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){
       return response.json();
    })
    .then(function(json) {
        console.log(json);
        const temperature = json.main.temp;
        const city = json.name;
        weather.innerText = `${temperature} °C , ${city}`;
        
    });
    
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));

}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        // latitude : latitude,
        // longitude : longitude
        latitude,
        longitude
    };
saveCoords(coordsObj);
getweather(latitude,longitude);
}

function handleGeoError() {
    console.log("Can't access geo location");
}

function askForCoords(){
    console.log("askForCoords")
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        console.log(parseCoords);
        getweather(parseCoords.latitude,parseCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();