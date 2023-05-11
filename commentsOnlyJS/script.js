window.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name-input');
    const countryInput = document.getElementById('country-input');
    const dateInput = document.getElementById('date-input');
    const getWeatherBtn = document.getElementById('get-weather-btn');
    const weatherInfo = document.getElementById('weather-info');
  
    getWeatherBtn.addEventListener('click', function() {
      const name = nameInput.value;
      const country = countryInput.value;
      const date = dateInput.value;
  
      if (name === '' || country === '' || date === '') {
        weatherInfo.innerHTML = '<p class="error">Please fill in all fields</p>';
        return;
      }
  
      const weatherInfoData = {
        name: name,
        country: country,
        date: date
      };
  
      updateWeatherInfo(weatherInfoData);
    });
  
    function updateWeatherInfo(weatherInfo) {
      const weatherHTML = `
        <h3>Weather Information</h3>
        <p>Name: ${weatherInfo.name}</p>
        <p>Country: ${weatherInfo.country}</p>
        <p>Date: ${weatherInfo.date}</p>
      `;
      weatherInfo.innerHTML = weatherHTML;
    }
  });
  