// Function to fetch and display weather data for Manchester
async function fetchWeatherDataForManchester() {
    try {
        const cityName = 'Manchester';
        const apiKey = '7db2fa0b9d44c2c674ebc78fdc2df2e8'; // Replace with your actual API key

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
        const res = await fetch(url);

        if (res.ok) {
            const data = await res.json();

            const temperatureInKelvin = data.main.temp;
            const temperatureInCelsius = (temperatureInKelvin - 273.15).toFixed(2);
            const pressure = data.main.pressure;
            const windSpeed = data.wind.speed;
            const windDirection = data.wind.deg;
            const sunriseTimestamp = data.sys.sunrise * 1000;
            const sunsetTimestamp = data.sys.sunset * 1000;
            const sunriseTime = new Date(sunriseTimestamp).toLocaleTimeString();
            const sunsetTime = new Date(sunsetTimestamp).toLocaleTimeString();

            document.getElementById('temperature').textContent = `Temperature: ${temperatureInCelsius}°C`;
            document.getElementById('description').textContent = `Weather Description: ${data.weather[0].description}`;
            document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
            document.getElementById('wind').textContent = `Wind Speed: ${windSpeed} m/s, Direction: ${windDirection}°`;
            document.getElementById('pressure').textContent = `Pressure: ${pressure} hPa`;
            document.getElementById('sunrise').textContent = `Sunrise: ${sunriseTime}`;
            document.getElementById('sunset').textContent = `Sunset: ${sunsetTime}`;
        } else {
            console.error('Failed to fetch data for Manchester');
        }
    } catch (err) {
        console.error(err);
    }
}

// Function to fetch and display weather data for Lodz
async function fetchWeatherDataForLodz() {
    try {
        const cityName = 'Lodz';
        const apiKey = '1736cdcf9b007c238baa3d58d83c55b8'; // Replace with your API key

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
        const res = await fetch(url);

        if (res.ok) {
            const data = await res.json();

            const temperatureInKelvin = data.main.temp;
            const temperatureInCelsius = (temperatureInKelvin - 273.15).toFixed(2);
            const pressure = data.main.pressure;
            const windSpeed = data.wind.speed;
            const windDirection = data.wind.deg;
            const sunriseTimestamp = data.sys.sunrise * 1000;
            const sunsetTimestamp = data.sys.sunset * 1000;
            const sunriseTime = new Date(sunriseTimestamp).toLocaleTimeString();
            const sunsetTime = new Date(sunsetTimestamp).toLocaleTimeString();

            document.getElementById('temperature2').textContent = `Temperature: ${temperatureInCelsius}°C`;
            document.getElementById('description2').textContent = `Weather Description: ${data.weather[0].description}`;
            document.getElementById('humidity2').textContent = `Humidity: ${data.main.humidity}%`;
            document.getElementById('wind2').textContent = `Wind Speed: ${windSpeed} m/s, Direction: ${windDirection}°`;
            document.getElementById('pressure2').textContent = `Pressure: ${pressure} hPa`;
            document.getElementById('sunrise2').textContent = `Sunrise: ${sunriseTime}`;
            document.getElementById('sunset2').textContent = `Sunset: ${sunsetTime}`;
        } else {
            console.error('Failed to fetch data for Lodz');
        }
    } catch (err) {
        console.error(err);
    }
}

// Call the functions to initiate the weather data fetch when the page loads
window.addEventListener('load', () => {
    fetchWeatherDataForManchester();
    fetchWeatherDataForLodz();
});





