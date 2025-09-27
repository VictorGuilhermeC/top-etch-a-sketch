//Variables
const squaresNum = document.querySelector("#squaresNumber");
const normalModeBtn = document.querySelector("#normalModeBtn");
const rainbowModeBtn = document.querySelector("#rainbowModeBtn");
const reset = document.querySelector("#reset");
const screen = document.querySelector("#screen");
let rainbowModeOn = false;

//Events
window.addEventListener("load", () => setSquares());

screen.addEventListener("mouseover", (event) => {
  if (!event.target.classList.contains("square")) {
    return;
  }

  event.target.style.backgroundColor = rainbowModeOn
    ? `#${getRandomColor()}`
    : "#1B1B1B";

  raiseOpacity(event.target);
});

squaresNum.addEventListener("click", () => {
  let numberOfSquares;

  while (!(numberOfSquares >= 1 && numberOfSquares <= 100)) {
    numberOfSquares = window.prompt(
      "Choose how many squares per size (min: 1, max: 100)",
      "16"
    );

    if (numberOfSquares === null) return;

    numberOfSquares = Number(numberOfSquares);
  }

  setSquares(numberOfSquares);
});

normalModeBtn.addEventListener("click", () => {
  rainbowModeOn = false;
});

rainbowModeBtn.addEventListener("click", () => {
  rainbowModeOn = true;
});

reset.addEventListener("click", () => {
  const allSquares = document.querySelectorAll(".square");
  allSquares.forEach((s) => {
    s.style.backgroundColor = "#d6d6d6";
    s.style.opacity = "0";
  });
});

//Auxiliary functions

function raiseOpacity(target) {
  let opacityValue = target.style.opacity;
  if (Number(opacityValue) < 1) {
    opacityValue = `${Number(opacityValue) + 0.1}`;
  }
  target.style.opacity = opacityValue;
}

function getRandomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

function setSquares(n = 16) {
  screen.innerHTML = "";
  const squareSide = 100 / n;
  for (let i = 0; i < n * n; i++) {
    const square = document.createElement("div");
    square.className = "square";
    square.style.height = `${squareSide}%`;
    square.style.width = `${squareSide}%`;
    square.style.opacity = "0";
    screen.appendChild(square);
  }
}
