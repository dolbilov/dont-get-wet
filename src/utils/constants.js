export const descriptions = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Depositing rime fog",
  51: "Light drizzle",
  53: "Moderate drizzle",
  55: "Intensity drizzle",
  56: "Light freezing drizzle",
  57: "Intensity freezing drizzle",
  61: "Slight rain",
  63: "Moderate rain",
  65: "Heavy intensity rain",
  66: "Light freezing rain",
  67: "Intensity freezing rain",
  71: "Slight snow fall",
  73: "Moderate snow fall",
  75: "Intensity snow fall",
  77: "Snow grains",
  80: "Slight rain showers",
  81: "Moderate rain showers",
  82: "Violent rain showers",
  85: "Slight snow showers",
  86: "Heavy snow showers",
  95: "Moderate thunderstorm",
  96: "Thunderstorm slight hail",
  99: "Thunderstorm heavy hail"
};

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export const cityCoords = {
  Moscow: { latitude: 55.7558, longitude: 37.6176 },
  SaintPetersburg: { latitude: 59.9389, longitude: 30.3156 },
  Novosibirsk: { latitude: 55.0302, longitude: 82.9204 },
  Yekaterinburg: { latitude: 56.838, longitude: 60.5974 },
  Kazan: { latitude: 55.7961, longitude: 49.1064 },
  NizhnyNovgorod: { latitude: 56.3267, longitude: 44.0065 },
  Chelyabinsk: { latitude: 55.1599, longitude: 61.4025 },
  Samara: { latitude: 53.1958, longitude: 50.1002 },
  Omsk: { latitude: 54.9893, longitude: 73.3682 },
  RostovonDon: { latitude: 47.222, longitude: 39.7203 }
};

export const mainContainer = document.querySelector('.container__main-container');
export const allCardsContainer = document.querySelector(".container.container__main-container");
const largeCard = document.querySelector(".card.card_size_large");
const smallCardsContainer = document.querySelector(
  ".container.container__small-cards"
);

export const markupElements = {
  currentCity: largeCard.querySelector(".card__city-name"),
  currentDate: largeCard.querySelector(".card__date.card__date_weight_light.card__date-text"),
  currentTemperature: largeCard.querySelector(".card__temperature-value"),
  currentWeatherIcon: largeCard.querySelector(
    ".card__icon.card__icon_type_weather"
  ),
  currentWeatherType: largeCard.querySelector(
    ".card__caption.card__caption_type_weather"
  ),
  currentMinMaxTemperature: largeCard.querySelector(
    ".card__caption.card__caption_type_delta-temperature"
  ),

  dailyWeekdays: smallCardsContainer.querySelectorAll(".card__weekday"),
  dailyDates: smallCardsContainer.querySelectorAll(
    ".card__date.card__date_position_small-card.card__date_weight_light"
  ),
  dailyTemperatures: smallCardsContainer.querySelectorAll(
    ".card__temperature-value.card__temperature-value_size_small"
  ),
  dailyWeatherIcons: smallCardsContainer.querySelectorAll(
    ".card__icon.card__icon_type_weather.card__icon_size_small"
  ),
  dailyMinMaxTemperatures: smallCardsContainer.querySelectorAll(
    ".card__caption.card__caption_type_delta-temperature"
  )
};
