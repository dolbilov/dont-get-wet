import { descriptions, months } from "../utils/constants";

export default class Weather {
  constructor(weatherData) {
    this._currentTemperature = weatherData.current_weather.temperature;
    this._currentWeatherCode = weatherData.current_weather.weathercode;

    this._dailyMaxTemperatures = weatherData.daily.temperature_2m_max;
    this._dailyMinTemperatures = weatherData.daily.temperature_2m_min;
    this._dailyDates = weatherData.daily.time;
    this._dailyWeatherCodes = weatherData.daily.weathercode;
  }

  _getFormattedDate(dateText) {
    const date = new Date(dateText);
    return months[date.getMonth()] + " " + date.getDate();
  }

  _getDescriptionFromWeatherCode = (code) => descriptions[code];

  _getAverageTemperatures() {
    this._averageTemperatures = [];

    if (this._dailyMinTemperatures.length !== this._dailyMaxTemperatures) {
      return;
    }

    for (let i = 0; i < this._dailyMaxTemperatures; i++) {
      const min = this._dailyMinTemperatures[i];
      const max = this._dailyMaxTemperatures[i];
      this._averageTemperatures[i] = Math.round((min + max) / 2);
    }
  }

  showWeather(markupElements) {} // TODO: finish it
}
