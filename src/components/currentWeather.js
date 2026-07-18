export function createCurrentWeather() {
  return `
    <div class="flex-1 rounded-3xl border border-gray-200 bg-white p-10 shadow-lg">

      <h2 class="text-2xl font-bold text-center">
        📍 Chennai
      </h2>

      <div class="mt-6 text-center">

        <div class="text-7xl">
          ☀️
        </div>

        <h1 class="mt-4 text-7xl font-bold">
          29°C
        </h1>

        <p class="mt-2 text-lg text-gray-600">
          Partly Cloudy
        </p>

      </div>

      <div class="mt-8 space-y-3 text-gray-600">

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

      </div>

    </div>
  `;
}
