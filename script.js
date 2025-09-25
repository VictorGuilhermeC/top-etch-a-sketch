const squaresNum = document.querySelector("#squaresNumber");
const normalModeBtn = document.querySelector("#normalModeBtn");
const rainbowModeBtn = document.querySelector("#rainbowModeBtn");
const clean = document.querySelector("#clean");
const screen = document.querySelector("#screen");
let drawingMode = "normal";

function setSquares(n = 16) {
  while (screen.firstChild) {
    screen.firstChild.remove();
  }
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

setSquares();

screen.addEventListener("mouseover", (event) => {
  let opacityValue = event.target.style.opacity;
  if (opacityValue && Number(opacityValue) < 1) {
    opacityValue = `${Number(opacityValue) + 0.1}`;
  }
  event.target.style.opacity = opacityValue;
});

squaresNum.addEventListener("click", () => {
  let value;
  while (!(value >= 1 && value <= 100)) {
    value = window.prompt(
      "Choose how many squares per size (min: 1, max:100)",
      "16"
    );
    if (value === null) {
      return;
    }
  }

  setSquares(value);
});

normalModeBtn.addEventListener("click", () => {
  drawingMode = "normal";
});

rainbowModeBtn.addEventListener("click", () => {
  drawingMode = "rainbow";
});

screen.addEventListener("mouseover", (event) => {
  if (!event.target.classList.contains("square")) {
    return;
  } else if (drawingMode === "rainbow") {
    const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);
    event.target.style.backgroundColor = `#${randomColor()}`;
  } else if (drawingMode === "normal") {
    event.target.style.backgroundColor = `#1B1B1B`;
  }
});

clean.addEventListener("click", () => {
  const allSquares = document.querySelectorAll(".square");
  allSquares.forEach((s) => {
    s.style.backgroundColor = "#d6d6d6";
    s.style.opacity = "0";
  });
});
