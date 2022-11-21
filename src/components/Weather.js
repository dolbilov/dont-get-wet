import { descriptions, months } from "../utils/constants";

export default class Weather {
  constructor(weatherData) {
    this._currentCity = weatherData.current_city;
    this._currentTemperature = weatherData.current_weather.temperature;
    this._currentWeatherCode = weatherData.current_weather.weathercode;
    this._currentDate = new Date(weatherData.current_weather.time);

    this._dailyMaxTemperatures = weatherData.daily.temperature_2m_max;
    this._dailyMinTemperatures = weatherData.daily.temperature_2m_min;
    this._dailyDates = weatherData.daily.time;
    this._dailyWeatherCodes = weatherData.daily.weathercode;
  }

  showWeather(markupElements) {
    // setup large card
    markupElements.currentDate.textContent = this._getFormattedDate(this._currentDate);
    markupElements.currentTemperature.textContent = Math.round(this._currentTemperature) + "°";
    // TODO: setup min and max temperatures for today
    //markupElements.currentMinMaxTemperature.textContent = `${Math.round(this._)} / ${}`;
    markupElements.currentWeatherType.textContent = this._getDescriptionFromWeatherCode(this._currentWeatherCode);
    // TODO: setup icon for today
    // markupElements.currentCity.textContent = this._currentCity;

    this._getAverageTemperatures();

    // setup small cards
    for (let i = 1; i < this._dailyDates.length; i++) {
      markupElements.dailyWeekdays[i].textContent = this._getDayName(this._dailyDates[i]);
    }

    for (let i = 0; i < this._dailyDates.length; i++) {
      markupElements.dailyDates[i].textContent = this._getFormattedDate(this._dailyDates[i]);
      markupElements.dailyTemperatures[i].textContent = this._averageTemperatures[i] + "°";
      const minMaxText = `min ${Math.round(this._dailyMinTemperatures[i])}° / max ${Math.round(this._dailyMaxTemperatures[i])}°`;
      markupElements.dailyMinMaxTemperatures[i].textContent = minMaxText;
      // TODO: setup icons
    }
  }

  _getDayName(dateString, locale = "en-US") {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale, { weekday: "long" });
  }

  _getFormattedDate(dateText) {
    const date = new Date(dateText);
    return months[date.getMonth()] + " " + date.getDate();
  }

  _getDescriptionFromWeatherCode = (code) => descriptions[code];

  _getAverageTemperatures() {
    this._averageTemperatures = [];

    if (this._dailyMinTemperatures.length !== this._dailyMaxTemperatures.length) {
      return;
    }

    for (let i = 0; i < this._dailyMaxTemperatures.length; i++) {
      const min = this._dailyMinTemperatures[i];
      const max = this._dailyMaxTemperatures[i];
      this._averageTemperatures[i] = Math.round((min + max) / 2);
    }
  }
}
