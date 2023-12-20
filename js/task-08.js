/**
  |============================
  | Element
  |============================
*/
const loginFormEl = document.querySelector(".login-form");

/**
  |============================
  | Function
  |============================
*/
function loginFormFunc(event) {
  event.preventDefault();
  const { email, password } = event.target.elements;

  let missingFields = [];
  if (!email.value) missingFields.push("email");
  if (!password.value) missingFields.push("password");

  if (missingFields.length > 0) {
    alert(`Please, enter ${missingFields.join(" and ")}`);
  } else {
    const user = {
      email: email.value,
      password: password.value,
    };
    console.log(user);
    event.target.reset();
  }
}

/**
  |============================
  | Event
  |============================
*/
loginFormEl.addEventListener("submit", loginFormFunc);
