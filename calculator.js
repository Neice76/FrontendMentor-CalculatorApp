/* Variables */
let numberButtons = document.getElementsByClassName("numberButton");
let deleteOperator = document.getElementById("deleteOperatorButton");
let plusOperator = document.getElementById("plusOperatorButton");
let subtractOperator = document.getElementById("subtractOperatorButton");
let multiplyOperator = document.getElementById("multiplyOperatorButton");
let equalsOperator = document.getElementById("equalOperatorButton");
let divideOperator = document.getElementById("divideOperatorButton");
let decimalOperator = document.getElementById("decimalOperatorButton");
let resetOperator = document.getElementById("resetOperatorButton");
let calculatorDisplay = document.getElementById("calculatorDisplay");
let link = document.querySelector('link[rel="stylesheet"]');
let themeSlider = document.getElementById("themeSlider");

/* calculator functions */
function appendNumberOperator(value) {
    calculatorDisplay.value += value;
}

function resetEquation() {
    calculatorDisplay.value = "";
}

function deleteEquation() {
    calculatorDisplay.value = calculatorDisplay.value.slice(0, -1);
}

function calculateEquation() {
  let equation = calculatorDisplay.value;
  let equationArray = equation.split(/([\+\-\x\/])/);
  let result = Number(equationArray[0]);
  for (let i = 1; i < equationArray.length; i += 2) {
    let operator = equationArray[i];
    let number = Number(equationArray[i + 1]);

    if (operator === "+") {
      result += number;
    } else if (operator === "-") {
      result -= number;
    } else if (operator === "x") {
      if (result === 0 && number === 0) {
          result = 0;
      } else if (result === 0) {
          result = 0;
      } else if (number === 0) {
          result = 0;
      } else {
          result *= number;
      }
    } else if (operator === "/") {
      if (result === 0 && number === 0) {
        result = 0;
      } else if (result === 0) {
          result = 0;
      } else if (number === 0) {
          result = 0;
      } else {
          result /= number;
      }
    }
  }

  // set the calculator display to the result
  calculatorDisplay.value = result;
}

for (let n = 0; n < numberButtons.length; n++) {
    numberButtons[n].addEventListener("click", function () {
        appendNumberOperator(numberButtons[n].value);
    });
}

decimalOperator.addEventListener("click", function () {
    appendNumberOperator(".");
});

multiplyOperator.addEventListener("click", function () {
    appendNumberOperator("x");
})

divideOperator.addEventListener("click", function () {
    appendNumberOperator("/");
})

plusOperator.addEventListener("click", function () {
    appendNumberOperator("+");
});

subtractOperator.addEventListener("click", function () {
    appendNumberOperator("-");
});

resetOperator.addEventListener("click", function () {
    resetEquation();
});

deleteOperator.addEventListener("click", function () {
    deleteEquation();
});

equalsOperator.addEventListener("click", function () {
    calculateEquation();
})

themeSlider.addEventListener("input", function () {
    const sliderValue = themeSlider.value;

    if (sliderValue == 1) {
        const changeHref = "./index.css";
        link.setAttribute("href", changeHref);
    } else if (sliderValue == 2) {
        const changeHref = "./calculator2.css";
        link.setAttribute("href", changeHref);
    } else if (sliderValue == 3) {
        const changeHref = "./calculator3.css";
        link.setAttribute("href", changeHref);
    }
    
    console.log(sliderValue);
})