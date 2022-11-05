import './index.html';
import './pages/index.scss';

import { getUserCoords } from "./components/coords"; // TODO: restore it
import { getWeatherData, handleError } from "./components/api";
import { getDescriptionFromWeatherCode } from "./components/weather"; // TODO: delete it

const forecastPeriodInDays = 3;

const currentTemperatureText = document.querySelector(".card__temperature-value");
const temperatureTexts = document.querySelectorAll(".card__temperature-value.card__temperature-value_size_small");
console.log(temperatureTexts);

//getUserCoords(); // TODO: restore it

// TODO: delete all lines below
getWeatherData(56.1322, 47.2519)
  .then(data => {

  const currentWeather = data.current_weather;
  const temperature = currentWeather.temperature;

  const dailyInfo = data.daily;
  const dailyMaxTemperature = dailyInfo.temperature_2m_max;
  const dailyMinTemperature = dailyInfo.temperature_2m_min;
  const dailyTimes = dailyInfo.time;
  const dailyWeatherCodes = dailyInfo.weathercode;

    currentTemperatureText.textContent = ~~Number(temperature) + "°";
  for (let i = 0; i < forecastPeriodInDays; i++) {
    temperatureTexts[i].textContent = ~~Number(dailyMaxTemperature[i]) + '°';
  }

  //console.log(getDescriptionFromWeatherCode(dailyWeatherCodes[0]))
})
