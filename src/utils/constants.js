export const descriptions = {
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

export const months = [
  "January", "February", "March",
  "April", "May", "June",
  "July", "August", "September",
  "October", "November", "December"
];

const largeCard = document.querySelector(".card.card_size_large");
const smallCardsContainer = document.querySelector(".container.container__small-cards");

export const markupElements = {
  currentCity: largeCard.querySelector(".card__city-name"),
  currentDate: largeCard.querySelector(".card__date.card__date_weight_light"),
  currentTemperature: largeCard.querySelector(".card__temperature-value"),
  currentWeatherIcon: largeCard.querySelector(".card__icon.card__icon_type_weather"),
  currentWeatherType: largeCard.querySelector(".card__caption.card__caption_type_weather"),
  currentMinMaxTemperature: largeCard.querySelector(".card__caption.card__caption_type_delta-temperature"),

  dailyDates: smallCardsContainer.querySelectorAll(".card__date.card__date_position_small-card.card__date_weight_light"),
  dailyTemperatures: smallCardsContainer.querySelectorAll(".card__temperature-value.card__temperature-value_size_small"),
  dailyWeatherIcons: smallCardsContainer.querySelectorAll(".card__icon.card__icon_type_weather.card__icon_size_small"),
  dailyMinMaxTemperatures: smallCardsContainer.querySelectorAll(".card__caption.card__caption_type_delta-temperature")
};

