export function updateBackground(condition, isDay) {
  const weather = condition.toLowerCase();

  document.body.classList.remove(
    "sunny",
    "cloudy",
    "rainy",
    "snowy",
    "storm",
    "night",
  );

  if (!isDay) {
    document.body.classList.add("night"); // Night background
  }

  if (weather.includes("rain")) {
    document.body.classList.add("rainy"); // Apply rainy background
  } else if (weather.includes("snow")) {
    document.body.classList.add("snowy"); // Apply snowy background
  } else if (weather.includes("thunder")) {
    document.body.classList.add("storm"); // Apply stormy background
  } else if (weather.includes("cloud")) {
    document.body.classList.add("cloudy"); // Apply cloudy background
  } else {
    document.body.classList.add("sunny"); // Apply Sunny / Clear background
  }
}
