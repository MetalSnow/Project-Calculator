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

// Get buttons node
let displayDiv = document.querySelector(".display");
let numBtn = document.querySelector(".numbers");
let operators = document.querySelector(".operators");
let equals = document.querySelector("#equals");
let clear = document.querySelector("#clear");

// Numbers section
let numOne = "";
let numTwo = "1";

numBtn.addEventListener("click", (event) => {
  let isButton = event.target.nodeName === "BUTTON";
  if (!isButton) {
    return;
  } else if (operator !== "") {
    displayDiv.textContent = numTwo;
    displayDiv.textContent += event.target.textContent;
    numTwo = displayDiv.textContent;
    console.log("im num Two: ", numTwo);
  } else {
    // numOne = "";
    displayDiv.textContent += event.target.textContent;
    numOne = displayDiv.textContent;
    console.log("im num one: ", numOne);
  }
});

// Operator Section
let operator = "";
let tempResult = "";

operators.addEventListener("click", (event) => {
  let id = event.target.id;
  let isButton = event.target.nodeName === "BUTTON";
  if (!isButton) {
    return;
  }

  switch (id) {
    case "add":
      operator = "+";
      break;
    case "subtract":
      operator = "-";
      break;
    case "multiply":
      operator = "*";
      break;
    case "divide":
      operator = "/";
      break;
  }

  if ((operator == "+" || operator == "-") && numTwo == "1") {
    numTwo = "";
    operate();
    displayDiv.textContent = result;
    numOne = result;
    numTwo = "";
  } else {
    operate();
    displayDiv.textContent = result;
    numOne = result;
    numTwo = "";
  }
  console.log(numOne);
  console.log(numTwo);
});

// Operate Section
let result = "";
function operate() {
  switch (operator) {
    case "+":
      result = add(+numOne, +numTwo);
      break;
    case "-":
      result = subtract(+numOne, +numTwo);
      break;
    case "*":
      result = multiply(+numOne, +numTwo);
      break;
    case "/":
      result = divide(+numOne, +numTwo);
      break;
  }
  return result;
}

equals.addEventListener("click", () => {
  if (operator == "*" || operator == "/") {
    operate();
    displayDiv.textContent = result;
    numOne = result;
    numTwo = "";
  } else if ((operator == "+" || operator == "-") && numTwo == "1") {
    numTwo = "";
    operate();
    displayDiv.textContent = result;
    numOne = result;
    numTwo = "";
  } else {
    operate();
    displayDiv.textContent = result;
    numOne = result;
    numTwo = "";
  }
  operator = "";
});

clear.addEventListener("click", () => {
  numOne = "";
  numTwo = "1";
  operator = "";
  displayDiv.textContent = "";
  console.log("cleared");
});
