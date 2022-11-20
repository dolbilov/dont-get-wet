import "../index.html";
import "./index.scss";

import Coords from "../components/Coords";
import Weather from "../components/Weather";
import * as constants from "../utils/constants";
import Api from "../components/Api";
import DropdownList from "../components/DropdownList.js";

const dropdownList = new DropdownList("dropdown");

dropdownList.setEventListener();

const coordsObject = new Coords();
coordsObject.getUserCoords();
const userCoords = coordsObject.coords;

const api = new Api();
api
  .getWeatherData(userCoords)
  .then((data) => {
    const weather = new Weather(data);
    weather.showWeather(constants.markupElements);
  })
  .catch(api.handleError);
