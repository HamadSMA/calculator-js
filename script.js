let firstNumber;
let secondNumber;
let operator;

function display() {
  let screen = document.querySelector(".screen");
  let btns = document.querySelectorAll(".btn");
  let number = "";
  let result = "";

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      let val = btn.textContent;
      let symbols = ["-", "+", "/", "x", "=", "C", "AC", "%"];
      let operators = ["-", "+", "/", "x"];

      if (!firstNumber && symbols.includes(val)) {
        firstNumber = Number(number);
        number = "";
      }
      if (firstNumber && val === "=") {
        secondNumber = Number(number);
        number = "";
        result = operate(firstNumber, secondNumber, operator);
        screen.textContent = result;
        firstNumber = 0;
        secondNumber = 0;
        operator = "";
        //Continue work here
      }

      if (operators.includes(val)) {
        operator = val;
      }

      if (symbols.includes(val)) {
        number = number;
      } else {
        number += val;
        screen.textContent = number;
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
  if (operator === "x") return multiply(num1, num2);
  if (operator === "/") return divide(num1, num2);
}

display();
