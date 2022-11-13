import { Api } from "./api";
import { getFormattedDate } from "./date";

export class Weather {
  static _descriptions = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense intensity drizzle",
    56: "Light freezing drizzle",
    57: "Dense intensity freezing drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy intensity rain",
    66: "Light freezing rain",
    67: "Heavy intensity freezing rain",
    71: "Slight snow fall",
    73: "Moderate snow fall",
    75: "Heavy intensity snow fall",
    77: "Snow grains",
    80: "Slight rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",
    85: "Slight snow showers",
    86: "Heavy snow showers",
    95: "Slight or moderate thunderstorm",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail"
  };

  constructor(coords) {
    this._coords = coords;
    this._weather = null;

    this._currentTemperature = null;
    this._currentWeatherCode = null;

    this._dailyMaxTemperatures = null;
    this._dailyMinTemperatures = null;
    this._dailyDates = null;
    this._dailyWeatherCodes = null;
  }

  static _getDescriptionFromWeatherCode = (code) => this._descriptions[code];

  _showWeather(markupElements) {
    // show current temperature
    markupElements.currentTemperatureText.textContent = Math.round(this._currentTemperature) + "°";
    markupElements.currentWeatherDescription.textContent = Weather._getDescriptionFromWeatherCode(this._currentWeatherCode);

    // show 3 next day forecast
    for (let i = 0; i < 3; i++) {
      const avgTemperature = Math.round((this._dailyMaxTemperatures[i] + this._dailyMinTemperatures[i]) / 2);
      markupElements.temperatureTexts[i].textContent = avgTemperature + '°';

      markupElements.dataTexts[i].textContent = getFormattedDate(this._dailyDates[i]);
    }
  }

  getAndShowWeather(markupElements) {
    const promise = Api.getWeatherData(this._coords)
      .then(data => {
        const currentWeather = data.current_weather;
        this._currentTemperature = currentWeather.temperature;
        this._currentWeatherCode = currentWeather.weathercode;

        const dailyInfo = data.daily;
        this._dailyMaxTemperatures = dailyInfo.temperature_2m_max;
        this._dailyMinTemperatures = dailyInfo.temperature_2m_min;
        this._dailyDates = dailyInfo.time;
        this._dailyWeatherCodes = dailyInfo.weathercode;
      })
      .catch(Api.handleError);

    Promise.all([promise]).then(() => {
      this._showWeather(markupElements);
    })
  }
}
