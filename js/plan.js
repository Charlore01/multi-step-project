document.addEventListener("DOMContentLoaded", function () {
    // Select all the plan options, checkbox, billing options, next button, and error message
    const planOptions = document.querySelectorAll(".plan-option");
    const checkbox = document.getElementById("billing-toggle-checkbox");
    const billingOptions = document.querySelectorAll(".billing-option");
    const nextStepBtn = document.querySelector(".next-btn");
    const errorMessage = document.getElementById("error-message");
  
    let selectedCard = null; // Variable to store the currently selected card
  
    // Disable the Next Step button initially
    nextStepBtn.disabled = true;
  
    // Function to update text color based on toggle state
    function updateBillingTextColor() {
      if (checkbox.checked) {
        billingOptions[0].classList.remove("text-marine-blue");
        billingOptions[1].classList.add("text-marine-blue"); // Yearly
      } else {
        billingOptions[1].classList.remove("text-marine-blue");
        billingOptions[0].classList.add("text-marine-blue"); // Monthly
      }
    }
  
    // Set initial color state
    updateBillingTextColor();
  
    // Listen for changes on the checkbox
    checkbox.addEventListener("change", updateBillingTextColor);
  
    // Function to darken the background of the clicked card
    function selectCard(card) {
      // Unselect the previous card, if there is one
      if (selectedCard) {
        selectedCard.classList.remove("selected-card");
      }
  
      // Select the clicked card and store it as selected
      card.classList.add("selected-card");
      selectedCard = card;
  
      // Enable the Next Step button when a card is selected
      nextStepBtn.disabled = false;
  
      // Remove the error message when a card is selected
      errorMessage.style.display = "none";
    }
  
    // Add click event listeners to each plan option
    planOptions.forEach(function (card) {
      card.addEventListener("click", function () {
        selectCard(card); // Call selectCard function on card click
      });
    });
  
    // Add click event listener to the "Next Step" button
    nextStepBtn.addEventListener("click", function () {
      // Check if no card is selected
      if (!selectedCard) {
        // Show the error message if no card is selected
        errorMessage.style.display = "block";
      } else {
        // Proceed to the next page if a card is selected
        errorMessage.style.display = "none"; // Hide the error message
        // window.location.href = "next-page.html"; // Change "next-page.html" to your actual next page URL
      }
    });
  
    // Initially hide the error message
    errorMessage.style.display = "none";
  });
  