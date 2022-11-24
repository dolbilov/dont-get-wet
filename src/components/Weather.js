import { descriptions, months } from "../utils/constants";

const clearDayIcon = new URL("../images/weather-icons/clear_day.svg", import.meta.url);
const clearNightIcon = new URL("../images/weather-icons/clear_night.svg", import.meta.url);
const cloudyIcon = new URL("../images/weather-icons/cloudy.svg", import.meta.url);
const fogIcon = new URL("../images/weather-icons/fog.svg", import.meta.url);
const rainIcon = new URL("../images/weather-icons/rain.svg", import.meta.url);
const rainfallIcon = new URL("../images/weather-icons/rainfall.svg", import.meta.url);
const snowIcon = new URL("../images/weather-icons/snow.svg", import.meta.url);
const snowfallIcon = new URL("../images/weather-icons/snowfall.svg", import.meta.url);
const thunderstormIcon = new URL("../images/weather-icons/thunderstorm.svg", import.meta.url);

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
    markupElements.currentWeatherIcon.src = this._getWeatherIcon(this._currentWeatherCode);
    console.log(markupElements.currentWeatherIcon);
    markupElements.currentCity.textContent = this._currentCity;

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
      markupElements.dailyWeatherIcons[i].src = this._getWeatherIcon(this._dailyWeatherCodes[i]);
    }
  }

  _getWeatherIcon = (weatherCode) => {
    switch (weatherCode) {
      case 0:
      case 1:
        return clearDayIcon;
      case 2:
      case 3:
        return cloudyIcon;
      case 45:
      case 48:
        return fogIcon;
      case 51:
      case 53:
      case 56:
      case 61:
      case 63:
      case 66:
        return rainIcon;
      case 55:
      case 57:
      case 65:
      case 67:
      case 80:
      case 81:
      case 82:
      case 83:
        return rainfallIcon;
      case 71:
      case 73:
        return snowIcon;
      case 75:
      case 77:
      case 85:
      case 86:
        return snowfallIcon;
      case 95:
      case 96:
      case 99:
        return thunderstormIcon;
    }
  };

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
