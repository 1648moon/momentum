const API_KEY = "62e863be765d6726164b055b2e104b24";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live it", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then((data) => {
        const weather = document.querySelector("#weather div:first-child");
        const city = document.querySelector("#weather div:last-child");
        city.innerText = data.name;
        weather.innerText = `${Math.round(data.main.temp)}℃ ${data.weather[0].main}`;
    }); // js가 url을 부르게 함
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

