const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

// Get weather by city name
export async function getWeather(city) {
  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }

  const data = await response.json();

  return {
    city: data.location.name,
    region: data.location.region,
    country: data.location.country,

    temperature: data.current.temp_c,
    feelsLike: data.current.feelslike_c,

    condition: data.current.condition.text,
    icon: `https:${data.current.condition.icon}`,

    humidity: data.current.humidity,
    wind: data.current.wind_kph,
    pressure: data.current.pressure_mb,
    visibility: data.current.vis_km,

    isDay: data.current.is_day,
  };
}

// Get weather by coordinates
export async function getWeatherByCoordinates(latitude, longitude) {
  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${latitude},${longitude}&aqi=no`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }

  const data = await response.json();

  return {
    city: data.location.name,
    region: data.location.region,
    country: data.location.country,
    temperature: data.current.temp_c,
    feelsLike: data.current.feelslike_c,
    condition: data.current.condition.text,
    icon: `https:${data.current.condition.icon}`,
    humidity: data.current.humidity,
    wind: data.current.wind_kph,
    pressure: data.current.pressure_mb,
    visibility: data.current.vis_km,
    isDay: data.current.is_day,
  };
}
