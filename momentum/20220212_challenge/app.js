const loginForm = document.getElementById("login-form"); 
const loginInput = document.querySelector("#login-form input"); 
const loginButton = document.querySelector("#login-form button");
const HIDDEN_CLASSNAME = "hidden"; 
const greeting = document.querySelector("#greeting"); 

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("username", username);
  greeting.innerText = "Hello " + username;
  greeting.classList.remove("hidden");
}

loginButton.addEventListener("click", onLoginSubmit);