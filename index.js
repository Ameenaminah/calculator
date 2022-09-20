
const num1El = document.getElementById("num1-el");
const num2El = document.getElementById("num2-el");
const sumEl = document.getElementById("sum-el");
const addBtn = document.getElementById("add-btn");
const subtractBtn = document.getElementById("subtract-btn");
const divideBtn = document.getElementById("divide-btn");
const multiplyBtn = document.getElementById("multiply-btn");
let total = 0;


addBtn.addEventListener("click", () => {
    let inputValue = num1El.value;
    inputValue += num2El.value;
    sumEl.textContent = "Sum: " + inputValue

});

subtractBtn.addEventListener("click", () => {
    let inputValue = num1El.value;
    inputValue -= num2El.value;
    sumEl.textContent = "Sum: " + inputValue;

});

divideBtn.addEventListener("click", () => {
    let inputValue = num1El.value;
    inputValue /= num2El.value;
    sumEl.textContent = "Sum: " + inputValue;

});

multiplyBtn.addEventListener("click", () => {
    let inputValue = num1El.value;
    inputValue *= num2El.value;
    sumEl.textContent = "Sum: " + inputValue;

});
