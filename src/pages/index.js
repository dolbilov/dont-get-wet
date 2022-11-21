import "../index.html";
import "./index.scss";

import Coords from "../components/Coords";
import Weather from "../components/Weather";
import * as constants from "../utils/constants";
import Api from "../components/Api";
import DropdownList from "../components/DropdownList.js";

const dropdownList = new DropdownList("dropdown", constants.cityCoords, updateForecast);
const coordsObject = new Coords();
const api = new Api();


function updateForecast(coords) {
  api
    .getWeatherData(coords)
    .then((data) => {
      data.current_city = dropdownList.currentPosition;
      const weather = new Weather(data);
      weather.showWeather(constants.markupElements);
    })
    .catch(api.handleError);
}


dropdownList.setEventListener();

coordsObject.getUserCoords();
const userCoords = coordsObject.coords;
updateForecast(userCoords);
