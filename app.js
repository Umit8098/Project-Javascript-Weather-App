function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "e7dfd8d9f4ce5948e8881d2f5515c605";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=tr&appid=${apiKey}&units=metric`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById("weatherInfo").innerHTML =`
            <h2>${data.name}</h2>
            <p>${data.weather[0].description}</p>
            <p>Temprature:${data.main.temp}°C</p>
            <p>Humidity:${data.main.humidity}%</p>
            `;
        })
        .catch(error => {
            console.error('Enter fetching weather data:', error);
            const weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML = "<p>Failed to fetch weather data. Please try again later.</p>";
        });
    }