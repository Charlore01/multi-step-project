document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("name");
  const nameErrorMsg = document.getElementById("name-error");
  const phoneInput = document.getElementById("phone");
  const phoneErrorMsg = document.getElementById("phone-error");
  const emailInput = document.getElementById("email");
  const emailErrorMsg = document.getElementById("email-error");
  const nextBtn = document.querySelector(".next-btn");

  // Regular expression for name validation (letters, spaces, and hyphen only)
  const nameRegex = /^[a-zA-Z\s\-]+$/;

  // Regular expression for phone number validation (digits, spaces, and "+" symbol allowed)
  const phoneRegex = /^[+]*[0-9\s]+$/;

  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Initially disable the next button
  nextBtn.disabled = true;

  // Function to check if all fields are valid
  function validateForm() {
    const isNameValid = validateName();
    const isPhoneValid = validatePhone();
    const isEmailValid = validateEmail();

    // If all validations are successful, enable the button
    if (isNameValid && isPhoneValid && isEmailValid) {
      nextBtn.disabled = false;
    } else {
      nextBtn.disabled = true;
    }

    return isNameValid && isPhoneValid && isEmailValid;
  }

  // Validate the name field
  function validateName() {
    const nameValue = nameInput.value.trim();

    if (nameValue === "") {
      nameErrorMsg.textContent = "Name cannot be left empty";
      nameErrorMsg.classList.remove("display-n"); // Show error message
      nameErrorMsg.classList.add("display-b"); // Show error message
      nameInput.classList.add("border-red"); // Add red border
      return false;
    } else if (!nameRegex.test(nameValue)) {
      nameErrorMsg.textContent =
        "Invalid name (letters, spaces, and hyphen allowed)";
      nameErrorMsg.classList.remove("display-n"); // Show error message
      nameErrorMsg.classList.add("display-b"); // Show error message
      nameInput.classList.add("border-red"); // Add red border
      return false;
    } else {
      nameErrorMsg.classList.add("display-n"); // Hide error message
      nameErrorMsg.classList.remove("display-b"); // Hide error message
      nameInput.classList.remove("border-red"); // Remove red border
      return true;
    }
  }

  // Validate the phone field
  function validatePhone() {
    const phoneValue = phoneInput.value.trim();

    if (phoneValue === "") {
      phoneErrorMsg.textContent = "Phone field cannot be left empty";
      phoneErrorMsg.classList.remove("display-n"); // Show error message
      phoneErrorMsg.classList.add("display-b"); // Show error message
      phoneInput.classList.add("border-red"); // Add red border
      return false;
    } else if (!phoneRegex.test(phoneValue)) {
      phoneErrorMsg.textContent =
        "Invalid phone number (letters are not allowed)";
      phoneErrorMsg.classList.remove("display-n"); // Show error message
      phoneErrorMsg.classList.add("display-b"); // Show error message
      phoneInput.classList.add("border-red"); // Add red border
      return false;
    } else {
      phoneErrorMsg.classList.add("display-n"); // Hide error message
      phoneErrorMsg.classList.remove("display-b"); // Hide error message
      phoneInput.classList.remove("border-red"); // Remove red border
      return true;
    }
  }

  // Validate the email field
  function validateEmail() {
    const emailValue = emailInput.value.trim();

    if (emailValue === "") {
      emailErrorMsg.textContent = "Email field cannot be left empty";
      emailErrorMsg.classList.remove("display-n"); // Show error message
      emailErrorMsg.classList.add("display-b"); // Show error message
      emailInput.classList.add("border-red"); // Add red border
      return false;
    } else if (!emailRegex.test(emailValue)) {
      emailErrorMsg.textContent = "Invalid email format";
      emailErrorMsg.classList.remove("display-n"); // Show error message
      emailErrorMsg.classList.add("display-b"); // Show error message
      emailInput.classList.add("border-red"); // Add red border
      return false;
    } else {
      emailErrorMsg.classList.add("display-n"); // Hide error message
      emailErrorMsg.classList.remove("display-b"); // Hide error message
      emailInput.classList.remove("border-red"); // Remove red border
      return true;
    }
  }

  // Event listeners to validate fields in real-time
  nameInput.addEventListener("input", validateForm);
  phoneInput.addEventListener("input", validateForm);
  emailInput.addEventListener("input", validateForm);

  // Function to display the "Select your plan" section after validation
  function showPlanSelection() {
    const formSection = document.querySelector(".form-container"); // The current form section
    const planSection = document.querySelector(".select-plan-container"); // The plan selection section

    // Hide the current form section and show the plan selection section
    formSection.classList.add("display-n"); // Hide form section
    formSection.classList.remove("display-b"); // Hide form section
    planSection.classList.remove("display-n"); // Show plan selection
    planSection.classList.add("display-b"); // Show plan selection
  }

  // Event listener for the "Next" button click
  nextBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission or navigation

    // If all fields are valid, proceed to the next step
    if (validateForm()) {
      alert("Proceeding to the next step!");
      // Navigate to the "Select your plan" section
      showPlanSelection(); 
    } else {
      alert("Please fill out all fields correctly before proceeding.");
    }
  });
});
