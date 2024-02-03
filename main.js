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

let displayDiv = document.querySelector(".display");
let numBtn = document.querySelector(".numbers");
let operators = document.querySelector(".operators");
let equals = document.querySelector("#equals");

// Numbers section
let numOne = "";
let numTwo = "";

numBtn.addEventListener("click", (event) => {
  let isButton = event.target.nodeName === "BUTTON";
  if (!isButton) {
    return;
  } else if (displayDiv.textContent.startsWith(" ")) {
    displayDiv.textContent += event.target.textContent;
    numTwo = displayDiv.textContent.slice(3);
  } else {
    displayDiv.textContent += event.target.textContent;
    numOne = displayDiv.textContent;
  }
  console.log(numTwo);
});

// Operator Section
let operator = "";
operators.addEventListener("click", (event) => {
  let id = event.target.id;
  let isButton = event.target.nodeName === "BUTTON";

  if (!isButton) {
    return;
  }

  switch (id) {
    case "add":
      displayDiv.textContent = " + ";
      break;
    case "subtract":
      displayDiv.textContent = " – ";
      break;
    case "multiply":
      displayDiv.textContent = " × ";
      break;
    case "divide":
      displayDiv.textContent = " ÷ ";
      break;
  }
  operator = displayDiv.textContent;
  console.log(operator);
});

// Operate Section
let result;
function operate() {
  switch (operator) {
    case " + ":
      result = add(numOne, numTwo);
      break;
    case " – ":
      result = subtract(numOne, numTwo);
      break;
    case " × ":
      result = multiply(numOne, numTwo);
      break;
    case " ÷ ":
      result = divide(numOne, numTwo);
      break;
  }
}
equals.addEventListener("click", () => {
  console.log(operate());
});
