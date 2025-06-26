const container = document.querySelector("#container");
let n = 16;

for (let i = 0; i < Math.pow(n, 2); i++) {
  const square = document.createElement("div");
  square.className = "square";
  container.appendChild(square);
}
