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

// Get displays and buttons node
let displayDiv = document.querySelector(".display-one");
let displaySign = document.querySelector(".display-two");

let numBtn = document.querySelector(".numbers");
let decimalButton = document.querySelector(".dot");

let addition = document.querySelector("#add");
let subtraction = document.querySelector("#subtract");
let multiplication = document.querySelector("#multiply");
let division = document.querySelector("#divide");
let equals = document.querySelector("#equals");
let clear = document.querySelector("#clear");

let maxLength = 10;

// Numbers section
let numOne = "";
let numTwo = "";

numBtn.addEventListener("click", (event) => {
  let isButton = event.target.nodeName === "BUTTON";
  let isTarget = event.target.textContent;

  if (!isButton) {
    return;
  } else if (operator !== "") {
    // numTwo statement
    if (
      isTarget === "." &&
      !decimalButton.disabled &&
      displayDiv.textContent === "0"
    ) {
      displayDiv.textContent += numTwo;
      displayDiv.textContent += isTarget;
      numOne = displayDiv.textContent;
      decimalButton.disabled = true;
    } else if (isTarget === "." && !decimalButton.disabled) {
      displayDiv.textContent =
        displayDiv.textContent == numOne ? "0" + numTwo : numTwo;
      displayDiv.textContent += isTarget;
      numTwo = displayDiv.textContent;
      decimalButton.disabled = true;
    } else if (isTarget !== "." && isTarget !== "⌫") {
      displayDiv.textContent = numTwo;
      displayDiv.textContent += isTarget;
      numTwo = displayDiv.textContent;
    } else if (
      isTarget === "⌫" &&
      (displayDiv.textContent == numOne || displayDiv.textContent.length === 1)
    ) {
      displayDiv.textContent = "0";
      numTwo = "";
    } else if (isTarget === "⌫") {
      displayDiv.textContent = displayDiv.textContent.slice(0, -1);
      numTwo = numTwo.slice(0, -1);
    }
  } else {
    // numOne statement
    if (
      isTarget === "." &&
      !decimalButton.disabled &&
      displayDiv.textContent === "0"
    ) {
      displayDiv.textContent += numOne;
      displayDiv.textContent += isTarget;
      numOne = displayDiv.textContent;
      decimalButton.disabled = true;
    } else if (isTarget === "." && !decimalButton.disabled) {
      displayDiv.textContent = numOne;
      displayDiv.textContent += isTarget;
      numOne = displayDiv.textContent;
      decimalButton.disabled = true;
    } else if (isTarget !== "." && isTarget !== "⌫") {
      displayDiv.textContent = numOne;
      displayDiv.textContent += isTarget;
      numOne = displayDiv.textContent;
    } else if (isTarget === "⌫" && displayDiv.textContent.length === 1) {
      displayDiv.textContent = "0";
      numOne = "";
    } else if (isTarget === "⌫") {
      displayDiv.textContent = displayDiv.textContent.slice(0, -1);
      numOne = numOne.slice(0, -1);
    }
  }
  //Limit input length
  if (displayDiv.textContent.length > maxLength) {
    displayDiv.textContent = displayDiv.textContent.slice(0, maxLength);
  }
});

// Operator Section
let operator = "";

addition.addEventListener("click", () => {
  if (operator == "") {
    operator = "+";
  } else if (operator !== "+") {
    operate();
    displayDiv.textContent = result;
    operator = "+";
    numOne = result;
    numTwo = "";
  } else {
    operator = "+";
    operate();
    displayDiv.textContent = result;
    numOne = result;
    numTwo = "";
  }
  // Show Operator Content
  displaySign.textContent = operator;

  // Enable decimal button
  decimalButton.disabled = false;
});

subtraction.addEventListener("click", () => {
  if (operator == "") {
    operator = "-";
  } else if (operator !== "-") {
    operate();
    displayDiv.textContent = result;
    operator = "-";
    numOne = result;
    numTwo = "";
  } else {
    operator = "-";
    operate();
    displayDiv.textContent = result;
    numOne = result;
    numTwo = "";
  }
  // Show Operator Content
  displaySign.textContent = operator;
  // Enable decimal button
  decimalButton.disabled = false;
});

multiplication.addEventListener("click", () => {
  if (operator == "") {
    operator = "*";
  } else if (operator !== "*") {
    operate();
    displayDiv.textContent = result;
    operator = "*";
    numOne = result;
    numTwo = "";
  } else {
    operator = "*";
    operate();
    displayDiv.textContent = result;
    numOne = result;
    numTwo = "";
  }
  // Show Operator Content
  displaySign.textContent = "x";
  // Enable decimal button
  decimalButton.disabled = false;
});

division.addEventListener("click", () => {
  if (operator == "") {
    operator = "/";
  } else if (operator !== "/") {
    operate();

    displayDiv.textContent = result;
    operator = "/";
    numOne = result;
    numTwo = "";
  } else {
    operator = "/";
    operate();
    displayDiv.textContent = result;
    numOne = result;
    numTwo = "";
  }
  // Show Operator Content
  displaySign.textContent = "÷";
  // Enable decimal button
  decimalButton.disabled = false;
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
  //Limit input length
  if (result.toString().length > maxLength) {
    result = result.toString().slice(0, maxLength);
  }
  return result;
}

equals.addEventListener("click", () => {
  if (operator == "") {
    return;
  } else {
    operate();
    result =
      result === Infinity || result === -Infinity
        ? (displayDiv.textContent = "Syntax Error!")
        : (displayDiv.textContent = result);

    numOne = result;
    numTwo = "";
    operator = "";
  }
  // Show Operator Content
  displaySign.textContent = "...";
  // Enable decimal button
  decimalButton.disabled = false;
});

clear.addEventListener("click", () => {
  numOne = "";
  numTwo = "";
  operator = "";
  displayDiv.textContent = "0";
  // Show Operator Content
  displaySign.textContent = "...";
  // Enable decimal button
  decimalButton.disabled = false;
});
