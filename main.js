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

// Get disply and buttons node
let displayDiv = document.querySelector(".display");
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
    console.log("im num Two: ", numTwo);
  } else {
    displayDiv.textContent = numOne;
    displayDiv.textContent += event.target.textContent;
    numOne = displayDiv.textContent;
    console.log("im num one: ", numOne);
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
  console.log(numOne);
  console.log(numTwo);
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
  console.log(numOne);
  console.log(numTwo);
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
  if (operator == "") {
    return;
  } else {
    operate();
    displayDiv.textContent = result;
    numOne = result;
    numTwo = "";
    operator = "";
  }
});

clear.addEventListener("click", () => {
  numOne = "";
  numTwo = "";
  operator = "";
  displayDiv.textContent = "0";
  console.log("cleared");
});
