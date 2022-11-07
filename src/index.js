import './index.html';
import './pages/index.scss';

import { Coords } from "./components/coords";
import { Weather } from "./components/weather";


const currentTemperatureText = document.querySelector(".card__temperature-value");
const currentWeatherDescription = document.querySelector(".card__caption");
const temperatureTexts = document.querySelectorAll(".card__temperature-value.card__temperature-value_size_small");
const dataTexts = document.querySelectorAll(".card__date.card__date_weight_light");
const markupElements = {
  currentTemperatureText: currentTemperatureText,
  currentWeatherDescription: currentWeatherDescription,
  temperatureTexts: temperatureTexts,
  dataTexts: dataTexts
}

const coordsObject = new Coords();
coordsObject.getUserCoords();
const userCoords = coordsObject.coords;

const weatherObject = new Weather(userCoords);
weatherObject.getAndShowWeather(markupElements);
