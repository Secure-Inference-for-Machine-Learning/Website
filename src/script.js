import "./style/reset.css";
import "./style/typo.css";
import "./style/layout.css";

import { Canvas } from "./js/canvas";
import { animateIntro } from "./js/animations";

const app = document.querySelector("#app");

const canvasContainer = document.createElement("canvas");
canvasContainer.classList.add("webgl");

const appContainer = document.createElement("div");
appContainer.classList.add("app__container");

const testText = document.createElement("p");
testText.classList.add("app__container__intro");

const title = document.createElement("p");
title.classList.add("app__container__title", "bold");
title.textContent = "Secure Inference for Machine Learning";

appContainer.appendChild(testText);
appContainer.appendChild(title);

app.append(appContainer, canvasContainer);

animateIntro(testText);
Canvas();
