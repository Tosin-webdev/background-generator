var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, " A", "B", "C", " D", "E", "f"];
var btn = document.querySelector(".btn");
var color = document.querySelector(".color");

function getRandomNumber() {
  return Math.floor(Math.random() * num.length);
}

function changeColor() {
  let numColor = "#";
  for (i = 0; i < 6; i++) {
    numColor += num[getRandomNumber()];
  }
  color.textContent = numColor;
  document.body.style.backgroundColor = numColor;
}

btn.addEventListener("click", changeColor);
