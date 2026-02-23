const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentValue = "";


buttons.forEach(button => {
  button.addEventListener("click", () => {
    handleInput(button.innerText);
  });
});


document.addEventListener("keydown", (event) => {

  if (event.repeat) return;   
  let key = event.key;

  if (
    !isNaN(key) || 
    key === "." || 
    key === "+" || 
    key === "-" || 
    key === "*" || 
    key === "/" || 
    key === "%"
  ) {
    handleInput(key);
  }

  else if (key === "Enter") {
    handleInput("=");
  }

  else if (key === "Backspace") {
    handleInput("DEL");
  }

  else if (key === "Escape") {
    handleInput("C");
  }

});


function handleInput(value) {

  if (value === "C") {
    currentValue = "";
    display.value = "";
  }

  else if (value === "DEL") {
    currentValue = currentValue.slice(0, -1);
    display.value = currentValue;
  }

  else if (value === "=") {
    try {
      currentValue = eval(currentValue).toString();
      display.value = currentValue;
    } catch {
      display.value = "Error";
      currentValue = "";
    }
  }

  else {
    currentValue += value;
    display.value = currentValue;
  }

}