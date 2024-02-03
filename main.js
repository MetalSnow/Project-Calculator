function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

//var
let numOne = 1;
let operator = "*";
let numTwo = 1;

let result;
function operate() {
  switch (operator) {
    case "+":
      result = add(numOne, numTwo);
      break;
    case "-":
      result = subtract(numOne, numTwo);
      break;
    case "*":
      result = multiply(numOne, numTwo);
      break;
    case "/":
      result = divide(numOne, numTwo);
      break;
  }
}
operate();

console.log(result);

let displayDiv = document.querySelector(".display");
let numBtn = document.querySelector(".numbers");

let value = "";

numBtn.addEventListener("click", (event) => {
  let isButton = event.target.nodeName === "BUTTON";
  if (!isButton) {
    return;
  } else {
    value += event.target.textContent;
  }
  displayDiv.textContent = value;
});
