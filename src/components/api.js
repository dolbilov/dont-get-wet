export class Api {
  static _getFormattedDate = (date) =>
    `${date.getFullYear()}-${('0' + (date.getMonth() +  1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;

  static _getUrl = (latitude, longitude) => {
    const startDate =  new Date();
    startDate.setDate(startDate.getDate() + 1);

    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 2);

    return `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}`
      + `&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true`
      + `&windspeed_unit=ms&timezone=auto&start_date=${this._getFormattedDate(startDate)}&end_date=${this._getFormattedDate(endDate)}`;
  }

  static getWeatherData = (coords) => {
    return fetch(this._getUrl(coords.latitude, coords.longitude))
      .then(res => {
        if (res.ok) return res.json();
        return Promise.reject(res);
      });
  }

  static handleError = (err) => {
    if (err.status === undefined) {
      console.warn('ERROR: Unknown error');
    } else {
      console.warn(`ERROR ${err.status}`)
    }
  }
}




