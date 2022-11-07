class Coords {
  constructor() {
    this.coords = { latitude: 55.7558, longitude: 37.6176 }
  }

  _handleSuccess = (pos) => this.coords =  pos.coords;
  _handleCoordsError = (err) => console.warn(`ERROR ${err.code}: ${err.message}`);

  getUserCoords = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this._handleSuccess, this._handleCoordsError);
    }
    else {
      console.warn(`Geolocation doesn't support`);
    }
  }
}
