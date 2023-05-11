window.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(fetchWeatherData);
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
}

function fetchWeatherData(position) {
  const apiKey = 'TU_CLAVE_DE_API'; // Reemplaza 'TU_CLAVE_DE_API' con tu propia clave de API de OpenWeatherMap
  const { latitude, longitude } = position.coords;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = {
        temperature: Math.round(data.main.temp - 273.15),
        description: data.weather[0].description,
        city: data.name,
      };

      updateWeatherInfo(weatherInfo);
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

function updateWeatherInfo(weatherInfo) {
  const weatherInfoDiv = document.getElementById('weather-info');
  const weatherHTML = `
    <h2>Weather Information</h2>
    <p>City: ${weatherInfo.city}</p>
    <p>Temperature: ${weatherInfo.temperature}°C</p>
    <p>Description: ${weatherInfo.description}</p>
  `;
  weatherInfoDiv.innerHTML = weatherHTML;
}
