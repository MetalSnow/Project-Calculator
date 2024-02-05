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
let addition = document.querySelector("#add");
let subtraction = document.querySelector("#subtract");
let multiplication = document.querySelector("#multiply");
let division = document.querySelector("#divide");
let equals = document.querySelector("#equals");
let clear = document.querySelector("#clear");

// Numbers section
let numOne = "";
let numTwo = "";

numBtn.addEventListener("click", (event) => {
  let isButton = event.target.nodeName === "BUTTON";
  if (!isButton) {
    return;
  } else if (operator !== "") {
    displayDiv.textContent = numTwo;
    displayDiv.textContent += event.target.textContent;
    numTwo = displayDiv.textContent;
  } else {
    displayDiv.textContent = numOne;
    displayDiv.textContent += event.target.textContent;
    numOne = displayDiv.textContent;
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
  displaySign.textContent = operator;
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
  displaySign.textContent = operator;
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
  result =
    result.toString().length > 7
      ? Math.floor(result * 10 ** 6) / 10 ** 6
      : result;
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
});

clear.addEventListener("click", () => {
  numOne = "";
  numTwo = "";
  operator = "";
  displayDiv.textContent = "0";
});
