import "../css/style.css";

import { createHeader } from "../components/header.js";
import { createLayout } from "../components/layout.js";
import { createSearch } from "../components/search";
import { createCurrentWeather } from "../components/currentWeather";
import { createWeatherDetails } from "../components/weatherDetails";

// Render application shell
document.querySelector("#app").innerHTML = `
    ${createHeader()}
    ${createLayout()}
`;

//Render search section
function renderSearch() {
  document.querySelector("#search-section").innerHTML = createSearch();
}

function renderWeather() {
  document.querySelector("#weather-section").innerHTML =
    createCurrentWeather() + createWeatherDetails();
}

//Initialize app
renderSearch();
renderWeather();
