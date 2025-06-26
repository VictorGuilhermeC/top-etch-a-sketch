const container = document.querySelector("#container");
let n = 16;
const ratio = 100 / n;

for (let i = 0; i < n * n; i++) {
  const square = document.createElement("div");
  square.className = "square";
  square.style.height = `${ratio}%`;
  square.style.width = `${ratio}%`;
  container.appendChild(square);
}
