let num1 = 16;
let num2 = 3;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let sumEl = document.getElementById("sum-el");

function add() {
  let result = num1 + num2;
  sumEl.textContent = "Answer: " + result;
}
function subtract() {
  let result = num1 - num2;
  sumEl.textContent = "Answer: " + result;
}
function divide() {
  let result = num1 / num2;
  sumEl.textContent = "Answer: " + result;
}
function multiply() {
  let result = num1 * num2;
  sumEl.textContent = "Answer: " + result;
}
