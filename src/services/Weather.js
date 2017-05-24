function fetchWeatherData(cb) {
  const APIKEY = 'ced620775453882ea4fabcb6713055a3';
  const url = `http://api.openweathermap.org/data/2.5/weather?q=Brooklyn&appid=${APIKEY}`;

  fetch(url)
  .then(res => res.json())
  .then(cb);
}

export default { fetchWeatherData };
