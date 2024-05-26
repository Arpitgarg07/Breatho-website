// Get the form elements
const form = document.querySelector("form");
const firstNameInput = document.querySelector("#floatingInput");
const lastNameInput = document.querySelector("#form_lastname input");
const emailInput = document.querySelector("#form_size input");
const passwordInput = document.querySelector("#floatingPassword");
const confirmPasswordInput = document.querySelector(
  "#form_size input:nth-child(3)"
);
const signupButton = document.querySelector("#signup");
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

// Function to validate the confirm password
function isValidConfirmPassword(password, confirmPassword) {
  return password === confirmPassword;
}

// Function to check if the form is valid
function isFormValid() {
  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  if (
    !firstName ||
    !lastName ||
    !isValidEmail(email) ||
    !isValidPassword(password) ||
    !isValidConfirmPassword(password, confirmPassword)
  ) {
    if (!firstName) {
      alert("Please enter your first name.");
      return false;
    }

    if (!lastName) {
      alert("Please enter your last name.");
      return false;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    if (!isValidPassword(password)) {
      alert("Password must be at least 8 characters long.");
      return false;
    }

    if (!isValidConfirmPassword(password, confirmPassword)) {
      alert("Passwords do not match.");
      return false;
    }

    return true;
  }

  return true;
}

// Event listener for the signup button
signupButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (!isFormValid()) {
    return;
  }

  // If validation passes, send a request to the server to sign up
  // For demonstration purposes, I'll just log a success message
  console.log("Sign up successful!");
  // You can replace this with an AJAX request or a fetch API call to your server
  // to sign up the user and create a new account
});

// Event listener for the email input field to clear the error message
emailInput.addEventListener("input", () => {
  errorMessage.textContent = "";
});

// Event listener for the password input field to clear the error message
passwordInput.addEventListener("input", () => {
  errorMessage.textContent = "";
});

// Event listener for the confirm password input field to clear the error message
confirmPasswordInput.addEventListener("input", () => {
  errorMessage.textContent = "";
});

// Event listener for the first name input field to clear the error message
firstNameInput.addEventListener("input", () => {
  errorMessage.textContent = "";
});

// Event listener for the last name input field to clear the error message
lastNameInput.addEventListener("input", () => {
  errorMessage.textContent = "";
});
