import "../css/style.css";

import { createHeader } from "../components/header.js";
import { createLayout } from "../components/layout.js";
import { createSearch } from "../components/search";
import { createCurrentWeather } from "../components/currentWeather";
import { createWeatherDetails } from "../components/weatherDetails";
import { getWeather } from "./api.js";

// Render application shell
document.querySelector("#app").innerHTML = `
    ${createHeader()}
    ${createLayout()}
`;

//Render search section
function renderSearch() {
  document.querySelector("#search-section").innerHTML = createSearch();
}

//Render weather section
async function renderWeather(city) {
  try {
    clearError();
    showLoading();
    const weather = await getWeather(city);

    document.querySelector("#weather-section").innerHTML =
      createCurrentWeather(weather) + createWeatherDetails(weather);
  } catch (error) {
    showError("City not found. Please check the spelling and try again.");
    console.error(error);
  } finally {
    hideLoading();
  }
}

//Search City
async function searchCity(city) {
  if (!city) {
    alert("Please enter a city.");
    return;
  }

  await renderWeather(city);
  cityInput.value = "";
}

//helper functions

//Loading state
function showLoading() {
  document.querySelector("#loading-section").innerHTML = `
    <div class="rounded-xl border border-blue-300 bg-blue-100 px-4 py-3 text-blue-700">
      ⏳ Loading weather...
    </div>
  `;
}

function hideLoading() {
  document.querySelector("#loading-section").innerHTML = "";
}

//Error handling
function showError(message) {
  document.querySelector("#error-section").innerHTML = `
    <div class="rounded-xl border border-red-300 bg-red-100 px-4 py-3 text-red-700">
      ❌ ${message}
    </div>
  `;
}

function clearError() {
  document.querySelector("#error-section").innerHTML = "";
}

//Initialize app
function initializeApp() {
  searchButton.addEventListener("click", () => {
    const city = cityInput.value.trim();
    searchCity(city);
  });

  //Search weather by pressing Enter key
  cityInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const city = cityInput.value.trim();
      searchCity(city);
    } else if (event.key === "Escape") {
      cityInput.value = "";
    }
  });
}

//Initialize app
renderSearch();
const searchButton = document.querySelector("#search-btn");
const cityInput = document.querySelector("#city-input");

initializeApp();

renderWeather("Vellore");
