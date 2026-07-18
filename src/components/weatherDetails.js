export function createWeatherDetails() {
  return `
    <div class="flex-1 rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">

      <h2 class="mb-6 text-2xl font-bold">
        Weather Details
      </h2>

      <div class="space-y-4">

        <div class="flex justify-between">
          <span>Feels Like</span>
          <span>31°C</span>
        </div>

        <div class="flex justify-between">
          <span>Humidity</span>
          <span>70%</span>
        </div>

        <div class="flex justify-between">
          <span>Wind</span>
          <span>12 km/h</span>
        </div>

        <div class="flex justify-between">
          <span>Pressure</span>
          <span>1012 hPa</span>
        </div>

        <div class="flex justify-between">
          <span>Visibility</span>
          <span>10 km</span>
        </div>

      </div>

    </div>
  `;
}
