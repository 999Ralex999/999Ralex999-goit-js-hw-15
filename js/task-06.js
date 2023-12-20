/**
  |============================
  | Element
  |============================
*/
const inputValidation = document.querySelector("#validation-input");

/**
  |============================
  | Function
  |============================
*/
function inputValidationFunc(event) {
  const curEl = event.target;
  const isLengthValid = curEl.value.length === Number(curEl.dataset.length);

  curEl.classList.toggle("valid", isLengthValid);
  curEl.classList.toggle("invalid", !isLengthValid);
}

/**
  |============================
  | Event
  |============================
*/
inputValidation.addEventListener("blur", inputValidationFunc);
