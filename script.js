let firstNumber;
let secondNumber;
let operator;

function display() {
  let screen = document.querySelector(".screen");
  let btns = document.querySelectorAll(".btn");
  let number = "";
  let result;
  let roundedResult;

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      let val = btn.textContent;
      let symbols = ["-", "+", "/", "x", "=", "C", "AC", "%"];
      let operators = ["-", "+", "/", "x"];

      if (!firstNumber && operators.includes(val)) {
        firstNumber = Number(number);
        number = "";
      }

      // Issue with divide by zero and rounding numbers: line 24 - 41
      if (firstNumber && val === "=") {
        secondNumber = Number(number);
        number = "";
        result = operate(firstNumber, secondNumber, operator);

        if (typeof result !== "number") {
          roundedResult = result;
        } else {
          roundedResult = Number.isInteger(result)
            ? result
            : parseFloat(result.toFixed(2));
        }
        screen.textContent = roundedResult;
        firstNumber = roundedResult;
        secondNumber = 0;
        operator = "";
      }

      if (operators.includes(val)) {
        operator = val;
      }

      if (symbols.includes(val) || number.length === 9) {
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
  if (num2 === 0) {
    return "👌😂";
  }
  return num1 / num2;
}

function operate(num1, num2, operator) {
  if (operator === "+") return add(num1, num2);
  if (operator === "-") return subtract(num1, num2);
  if (operator === "x") return multiply(num1, num2);
  if (operator === "/") return divide(num1, num2);
}

display();
