export default class Coords {
  static defaultCoords = { latitude: 55.7558, longitude: 37.6176 };

  constructor(updateForecastFunction, cityText) {
    this._updateForecast = updateForecastFunction;
    this._cityText = cityText;
  }

  getUserCoords = (successHandler, errorHandler) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
    } else {
      console.warn(`Geolocation doesn't support`);
      errorHandler();
    }
  };
}
