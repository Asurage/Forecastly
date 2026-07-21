export function createCurrentWeather(weather) {
  return `
    <div class="flex-1 rounded-3xl border border-gray-200 bg-white p-10 shadow-lg">

      <h2 class="text-2xl font-bold text-center">
        📍 ${weather.city}
      </h2>

      <div class="mt-6 text-center">

        <div class="text-7xl">
          <img
              src="${weather.icon}"
              alt="${weather.condition}"
              class="mx-auto h-28 w-28 object-contain"
          />
        </div>

        <h1 class="mt-4 text-7xl font-bold">
          ${Math.round(weather.temperature)}°C
        </h1>

        <p class="mt-2 text-lg text-gray-600">
          ${weather.condition}
        </p>

      </div>

     
      </div>

    </div>
  `;
}
//  <div class="mt-8 space-y-3 text-gray-600">

//         <div class="flex justify-between">
//           <span>Feels Like</span>
//           <span>${weather.feelsLike}°C</span>
//         </div>

//         <div class="flex justify-between">
//           <span>Humidity</span>
//           <span>${weather.humidity}%</span>
//         </div>

//         <div class="flex justify-between">
//           <span>Wind</span>
//           <span>${weather.wind} km/h</span>
//         </div>
