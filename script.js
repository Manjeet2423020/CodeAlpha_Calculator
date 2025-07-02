const display = document.getElementById("display");
let currentInput = "";

function updateDisplay() {
  display.textContent = currentInput || "0";
}

function appendNumber(num) {
  currentInput += num;
  updateDisplay();
}

function appendOperator(op) {
  if (currentInput === "") return;
  const lastChar = currentInput[currentInput.length - 1];
  if ("+-*/".includes(lastChar)) {
    currentInput = currentInput.slice(0, -1) + op;
  } else {
    currentInput += op;
  }
  updateDisplay();
}

function clearDisplay() {
  currentInput = "";
  updateDisplay();
}

function calculateResult() {
  try {
    const result = eval(currentInput);
    currentInput = result.toString();
  } catch {
    currentInput = "Error";
  }
  updateDisplay();
}
document.addEventListener("keydown", (e) => {
  if (e.key >= "0" && e.key <= "9") {
    appendNumber(e.key);
  } else if (["+", "-", "*", "/"].includes(e.key)) {
    appendOperator(e.key);
  } else if (e.key === "Enter") {
    calculateResult();
  } else if (e.key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
  } else if (e.key === "c" || e.key === "C") {
    clearDisplay();
  } else if (e.key === ".") {
    appendNumber(".");
  }
});
