const container = document.querySelector("#container");
const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);
container.addEventListener("mouseover", (event) => {
  if (event.target.classList.contains("square"))
    event.target.style.backgroundColor = `#${randomColor()}`;
});
container.addEventListener("mouseover", (event) => {
  let opacityValue = event.target.style.opacity;
  if (opacityValue && Number(opacityValue) < 1) {
    opacityValue = `${Number(opacityValue) + 0.1}`;
  }
  event.target.style.opacity = opacityValue;
});

function setSquares(n = 16) {
  while (container.firstChild) {
    container.firstChild.remove();
  }
  const squareSide = 100 / n;
  for (let i = 0; i < n * n; i++) {
    const square = document.createElement("div");
    square.className = "square";
    square.style.height = `${squareSide}%`;
    square.style.width = `${squareSide}%`;
    square.style.opacity = "0";
    container.appendChild(square);
  }
}

setSquares();

const button = document.querySelector("button");
button.addEventListener("click", () => {
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
