
let num1 = 15;
let num2 = 5
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let sumEl = document.getElementById("sum-el");

function add() {
    let total = num1 + num2;
    sumEl.textContent = "Sum: " + total
}
function subtract() {
    let total = num1 - num2;
    sumEl.textContent = "Sum: " + total
}
function divide() {
    let total = num1 / num2;
    sumEl.textContent = "Sum: " + total
}
function multiply() {
    let total = num1 * num2;
    sumEl.textContent = "Sum: " + total
}