/**
  |============================
  | Element
  |============================
*/
const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

/**
  |============================
  | Function
  |============================
*/
function updateFontSize() {
  text.style.fontSize = fontSizeControl.value + "px";
}

/**
  |============================
  | Initialize 
  |============================
*/
updateFontSize();

/**
  |============================
  | Event
  |============================
*/
fontSizeControl.addEventListener("input", updateFontSize);
