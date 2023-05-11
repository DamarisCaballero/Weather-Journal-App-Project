window.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name-input');
    const countryInput = document.getElementById('country-input');
    const dateInput = document.getElementById('date-input');
    const postalCodeInput = document.getElementById('postal-code-input');
    const getWeatherBtn = document.getElementById('get-weather-btn');
    const weatherInfo = document.getElementById('weather-info');
  
    getWeatherBtn.addEventListener('click', function() {
      const name = nameInput.value;
      const country = countryInput.value;
      const date = dateInput.value;
      const postalCode = postalCodeInput.value;
  
      if (name === '' || country === '' || date === '' || postalCode === '') {
        weatherInfo.innerHTML = '<p class="error">Please fill in all fields</p>';
        return;
      }
  
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(fetchWeatherData);
      } else {
        console.log('Geolocation is not supported by this browser.');
      }
    });
  
    function fetchWeatherData(position) {
      const apiKey = 'bbb64996da474662892458f2e5047bf5'; // Reemplaza 'TU_CLAVE_DE_API' con tu propia clave de API de OpenWeatherMap
      const { latitude, longitude } = position.coords;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const weatherInfoData = {
            name: nameInput.value,
            country: countryInput.value,
            date: dateInput.value,
            postalCode: postalCodeInput.value,
            temperature: Math.round(data.main.temp - 273.15),
            description: data.weather[0].description,
            city: data.name
          };
  
          updateWeatherInfo(weatherInfoData);
        })
        .catch(error => {
          console.log('Error:', error);
        });
    }
  
    function updateWeatherInfo(weatherInfo) {
      const weatherHTML = `
        <h3>Weather Information</h3>
        <p>Name: ${weatherInfo.name}</p>
        <p>Country: ${weatherInfo.country}</p>
        <p>Date: ${weatherInfo.date}</p>
        <p>Postal Code: ${weatherInfo.postalCode}</p>
        <p>City: ${weatherInfo.city}</p>
        <p>Temperature: ${weatherInfo.temperature}°C</p>
        <p>Description: ${weatherInfo.description}</p>
      `;
      weatherInfo.innerHTML = weatherHTML;
    }
  });
  