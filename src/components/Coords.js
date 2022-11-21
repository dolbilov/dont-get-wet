export default class Coords {
  constructor(updateForecastFunction) {
    this._updateForecast = updateForecastFunction;
    this._defaultCoords = { latitude: 55.7558, longitude: 37.6176 };
  }

  _handleSuccess = (pos) => {
    this._updateForecast(pos.coords);
  };

  _handleCoordsError = (err) => {
    console.warn(`ERROR ${err.code}: ${err.message}`);
    this._updateForecast(this._defaultCoords);
  };

  getUserCoords = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this._handleSuccess, this._handleCoordsError);
    } else {
      console.warn(`Geolocation doesn't support`);
    }
  };
}
