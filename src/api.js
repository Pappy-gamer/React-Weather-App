// const url =
//   "https://wft-geo-db.p.rapidapi.com/v1/geo/places/%7BplaceId%7D/distance?toPlaceId=Q60";

export const geoApiOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "9e9bff25f5msh9c11a6bc8d2a35ep145e69jsn72b8e66c6b94",
    "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
  },
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "b072532b51571747c030ae734125bede";

// try {
//   const response = await fetch(url, options);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }
