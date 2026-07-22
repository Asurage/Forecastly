function formatDay(date) {
  const forecastDate = new Date(date);
  return forecastDate.toLocaleDateString("en-US", {
    weekday: "long",
  });
}

export function createForecast(forecast) {
  return `
    <section class="forecast-section">
      <h2>🌤️ Forecast</h2>

      <div class="forecast-container">
        ${forecast
          .map(
            (day, index) => `
          <div class="forecast-item">
            <h3>${index === 0 ? "Tomorrow" : formatDay(day.date)}</h3>

            <div class="forecast-content">
                <img src="${day.icon}" alt="${day.condition}" />

                <div class="forecast-info">
                    <p>${day.maxTemp}°C / ${day.minTemp}°C</p>
                    <p>${day.condition}</p>

                </div> 
            </div>
        </div>`,
          )
          .join("")}
    </div>
    </section>
  `;
}
