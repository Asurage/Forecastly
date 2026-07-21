export function createWeatherDetails(weather) {
  return `
    <div class="flex-1 rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">

      <h2 class="mb-6 text-2xl font-bold">
        Weather Details
      </h2>

      <div class="space-y-4">

        <div class="flex justify-between text-gray-500">
          <span>Feels Like</span>
          <span>${Math.round(weather.feelsLike)}°C</span>
        </div>

        <div class="flex justify-between text-gray-500">
          <span>Humidity</span>
          <span>${weather.humidity}%</span>
        </div>

        <div class="flex justify-between text-gray-500">
          <span>Wind</span>
          <span>${weather.wind} km/h</span>
        </div>

        <div class="flex justify-between text-gray-500">
          <span>Pressure</span>
          <span>${weather.pressure} hPa</span>
        </div>

        <div class="flex justify-between text-gray-500">
          <span>Visibility</span>
          <span>${weather.visibility} km</span>
        </div>

      </div>

    </div>
  `;
}
