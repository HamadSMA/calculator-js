let firstNumber;
let secondNumber;
let operator;

function display() {
  let result = document.querySelector(".screen");
  let btns = document.querySelectorAll(".number a");
  let number = "";

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      switch (btn.textContent) {
        case "0":
          number += "0";
          result.textContent = number;
          break;
        case ".":
          number += ".";
          result.textContent = number;
        case "1":
          number += "1";
          result.textContent = number;
          break;
        case "2":
          number += "2";
          result.textContent = number;
          break;
        case "3":
          number += "3";
          result.textContent = number;
          break;
        case "4":
          number += "4";
          result.textContent = number;
          break;
        case "5":
          number += "5";
          result.textContent = number;
          break;
        case "6":
          number += "6";
          result.textContent = number;
          break;
        case "7":
          number += "7";
          result.textContent = number;
          break;
        case "8":
          number += "8";
          result.textContent = number;
          break;
        case "9":
          number += "9";
          result.textContent = number;
          break;
      }
      console.log(number);
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
