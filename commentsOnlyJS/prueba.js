// Obtener referencias a los elementos del DOM
const nameInput = document.getElementById('name-input');
const countryInput = document.getElementById('country-input');
const dateInput = document.getElementById('date-input');
const postalCodeInput = document.getElementById('postal-code-input');
const weatherInfo = document.getElementById('weather-info');

// Función para manejar el evento de clic en el botón "Get Weather"
async function getWeather() {
  // Obtener los valores ingresados por el usuario
  const name = nameInput.value;
  const country = countryInput.value;
  const date = dateInput.value;
  const postalCode = postalCodeInput.value;

  // Comprobar si se han ingresado valores en todos los campos
  if (name && country && date && postalCode) {
    try {
      // Realizar una llamada a la API de OpenWeatherMap para obtener el clima
      const apiKey = bbb64996da474662892458f2e5047bf5 // Reemplaza con tu propia API key de OpenWeatherMap
      const apiUrl = bbb64996da474662892458f2e5047bf5 `${postalCode},${country}&appid=${apiKey}`;
      const response = await fetch(apiUrl);
      const weatherData = await response.json();

      // Comprobar si se recibió una respuesta válida de la API
      if (response.ok) {
        // Obtener los datos relevantes del clima de la respuesta de la API
        const temperature = weatherData.main.temp;
        const description = weatherData.weather[0].description;

        // Crear el contenido HTML para mostrar la información del clima
        const weatherContent = `
          <h3>Weather Information</h3>
          <p>Name: ${name}</p>
          <p>Country: ${country}</p>
          <p>Date: ${date}</p>
          <p>Postal Code: ${postalCode}</p>
          <p>Temperature: ${temperature} Kelvin</p>
          <p>Description: ${description}</p>
        `;

        // Actualizar la sección de información del clima con el contenido generado
        weatherInfo.innerHTML = weatherContent;
      } else {
        // Mostrar un mensaje de error si no se pudo obtener el clima
        weatherInfo.innerHTML = `<p class="error">Unable to fetch weather data</p>`;
      }
    } catch (error) {
      // Mostrar un mensaje de error si ocurrió un error en la llamada a la API
      weatherInfo.innerHTML = `<p class="error">An error occurred: ${error.message}</p>`;
    }
  } else {
    // Mostrar un mensaje de error si no se han ingresado todos los campos
    weatherInfo.innerHTML = '<p class="error">Please enter all fields</p>';
  }
}

// Agregar el evento de clic al botón "Get Weather"
const getWeatherBtn = document.getElementById('get-weather-btn');
getWeatherBtn.addEventListener('click', getWeather);
