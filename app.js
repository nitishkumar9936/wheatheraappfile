const apiKey = 'bd5e378503939ddaee76f12ad7a97608'; 
const getWeatherBtn = document.getElementById('getWeatherBtn');
const cityInput = document.getElementById('cityInput');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');

getWeatherBtn.addEventListener('click', getWeather);

async function getWeather() {
  const city = cityInput.value;
  if (!city) {
    alert('Please enter a city name');
    return;
  }

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    if (data.cod === '404') {
      alert('City not found');
      return;
    }

    cityName.innerText = `${data.name}, ${data.sys.country}`;
    temperature.innerText = `Temperature: ${data.main.temp}°C`;
    description.innerText = `Description: ${data.weather[0].description}`;
    humidity.innerText = `Humidity: ${data.main.humidity}%`;
  } catch (error) {
    alert('Error fetching data. Please try again later.');
  }
}
