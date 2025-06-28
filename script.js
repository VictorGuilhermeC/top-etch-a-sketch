const container = document.querySelector("#container");
const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);
container.addEventListener("mouseover", (event) => {
  if (event.target.classList.contains("square"))
    event.target.style.backgroundColor = `#${randomColor()}`;
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
