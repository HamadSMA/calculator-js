let firstNumber;
let secondNumber;
let operator;

function display() {
  let result = document.querySelector(".screen");
  let btns = document.querySelectorAll(".btn");
  let number = "";

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      let val = btn.textContent;
      let signs = ["-", "+", "/", "x", "=", "C", "AC", "%"];

      if (!firstNumber && signs.includes(val)) {
        firstNumber = Number(number);
        number = "0";
      }
      if (firstNumber && val === "=") {
        secondNumber = Number(number);
        //Continue work here
      }

      if (signs.includes(val)) {
        number = number;
      } else {
        number += val;
        result.textContent = number;
      }
    });
  });
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, num2, operator) {
  if (operator === "+") return add(num1, num2);
  if (operator === "-") return subtract(num1, num2);
  if (operator === "*") return multiply(num1, num2);
  if (operator === "/") return divide(num1, num2);
}

display();
console.log(firstNumber);
