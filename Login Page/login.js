// Get the form elements
const form = document.querySelector("form");
const emailInput = document.querySelector("#floatingInput");
const passwordInput = document.querySelector("#floatingPassword");
const loginButton = document.querySelector("#login");
const errorMessage = document.querySelector(".txt_1");

// Function to validate the email format
function isValidEmail(email) {
  const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return regex.test(email);
}

// Function to validate the password length
function isValidPassword(password) {
  return password.length >= 8;
}

// Event listener for the login button
loginButton.addEventListener("click", (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Validate the email and password
  if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!isValidPassword(password)) {
    errorMessage.textContent = "Password must be at least 8 characters long.";
    alert("Password must be at least 8 characters long.");
    return;
  }

  // If validation passes, send a request to the server to log in
  // For demonstration purposes, I'll just log a success message
  console.log("Login successful!");
  alert("Login successful!");
  window.location.href("C:UsersVikhyatDesktop\finalhome-pagehome.html");

  // You can replace this with an AJAX request or a fetch API call to your server
  // to authenticate the user and log them in
});

// Event listener for the email input field to clear the error message
emailInput.addEventListener("input", () => {
  errorMessage.textContent = "";
});

// Event listener for the password input field to clear the error message
passwordInput.addEventListener("input", () => {
  errorMessage.textContent = "";
});
