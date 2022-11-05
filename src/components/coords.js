import {getWeatherData, handleError} from "./api";

const handleCoordsSuccess = (pos) => {
  const crd = pos.coords;

  // TODO: update this
  getWeatherData(crd.latitude, crd.longitude)
    .then(data => {
      console.log(data);
      const currentWeather = data.current_weather;
      const temperature = currentWeather.temperature;
    })
    .catch(handleError);

}

const handleCoordsError = (err) =>
  console.warn(`ERROR ${err.code}: ${err.message}`)


export const getUserCoords = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(handleCoordsSuccess, handleCoordsError);
  }
  else {
    console.warn(`Geolocation doesn't support`);
  }
}
