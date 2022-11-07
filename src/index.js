import './index.html';
import './pages/index.scss';

import { Coords } from "./components/coords";
import { Weather } from "./components/weather";

const forecastPeriodInDays = 3;

const currentTemperatureText = document.querySelector(".card__temperature-value");
const temperatureTexts = document.querySelectorAll(".card__temperature-value.card__temperature-value_size_small");
const currentWeatherDescription = document.querySelector(".card__caption");
const dateTexts = document.querySelectorAll(".card__date.card__date_weight_light");
const markupElements = {}

const coordsObject = new Coords();
coordsObject.getUserCoords();
const userCoords = coordsObject.coords;

const weatherObject = new Weather(userCoords);
weatherObject.getWeather();
weatherObject.showWeather(markupElements);
