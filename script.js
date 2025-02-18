const API = YOUR_API_KEY

document.addEventListener("DOMContentLoaded", function() {
    const content = document.getElementById('main-content')
    const location = document.getElementById('location');
    const temperature = document.getElementById('temperature');
    const wind = document.getElementById('wind');
    const weather = document.getElementById('weather');
    const moisture = document.getElementById('moisture');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      }

function showPosition(position) {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API}&units=metric`;
          
    fetch(url)
    .then(response => response.json())
    .then(data => {
        content.classList.add('active');
        location.innerHTML = `${data.sys.country}: ${data.name}`;
        temperature.innerHTML = `Temperature: ${data.main.temp} C`;
        wind.innerHTML = `Wind: ${data.wind.speed} m/s`;
        weather.innerHTML = `Weather: ${data.weather[0].main}`;
        moisture.innerHTML = `Humidity: ${data.main.humidity}%`;
    })
    .catch(err => console.log(err))
}
})
