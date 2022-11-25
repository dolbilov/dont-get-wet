import "../index.html";
import "./index.scss";

import Coords from "../components/Coords";
import Weather from "../components/Weather";
import * as constants from "../utils/constants";
import Api from "../components/Api";
import DropdownList from "../components/DropdownList.js";
import { markupElements } from "../utils/constants";


const dropdownList = new DropdownList("dropdown", constants.cityCoords, updateForecast);
const coordsObject = new Coords(updateForecast, markupElements.currentCity);
const api = new Api();


const setTheme = () => {
  const tempHours = new Date().getHours();

  const preferDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const nightHours = tempHours > 20 || tempHours < 7;

  if (preferDarkTheme || nightHours) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

const handleSuccess = (pos) => {
  updateForecast(pos.coords, "Your city");
};

const handleError = (err) => {
  if (err) console.warn(`ERROR ${err.code}: ${err.message}`);
  updateForecast(Coords.defaultCoords, "Moscow");
};

const updateForecast = (coords, cityName) => {
  api
    .getWeatherData(coords)
    .then((data) => {
      data.current_city = cityName;
      const weather = new Weather(data);
      weather.showWeather(constants.markupElements);
      constants.mainContainer.style.visibility = "visible";
    })
    .catch(api.handleError);
}


setTheme();

dropdownList.setEventListener();

coordsObject.getUserCoords(handleSuccess, handleError);
