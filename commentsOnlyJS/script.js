// Obtener referencias a los elementos del DOM
const nameInput = document.getElementById('name-input');
const countryInput = document.getElementById('country-input');
const dateInput = document.getElementById('date-input');
const weatherInfo = document.getElementById('weather-info');

// Función para manejar el evento de clic en el botón "Get Weather"
function getWeather() {
  // Obtener los valores ingresados por el usuario
  const name = nameInput.value;
  const country = countryInput.value;
  const date = dateInput.value;

  // Comprobar si se han ingresado valores en todos los campos
  if (name && country && date) {
    // Crear el contenido HTML para mostrar la información del clima
    const weatherContent = `
      <h3>Weather Information</h3>
      <p>Name: ${name}</p>
      <p>Country: ${country}</p>
      <p>Date: ${date}</p>
    `;

    // Actualizar la sección de información del clima con el contenido generado
    weatherInfo.innerHTML = weatherContent;
  } else {
    // Mostrar un mensaje de error si no se han ingresado todos los campos
    weatherInfo.innerHTML = '<p class="error">Please enter all fields</p>';
  }
}

// Agregar el evento de clic al botón "Get Weather"
const getWeatherBtn = document.getElementById('get-weather-btn');
getWeatherBtn.addEventListener('click', getWeather);
