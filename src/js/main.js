import "../css/style.css";

import { createHeader } from "../components/header.js";
import { createLayout } from "../components/layout.js";

document.querySelector("#app").innerHTML = `
    ${createHeader()}
    ${createLayout()}
`;
