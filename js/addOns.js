document.addEventListener("DOMContentLoaded", function () {
    const addonItems = document.querySelectorAll(".addon-item"); // Select all add-on items
    const nextBtn = document.querySelector(".next-btn"); // Select the Next Step button
    const errorMessage = document.createElement('p'); // Create the error message element
    errorMessage.textContent = "Please select at least one add-on before proceeding.";
    errorMessage.classList.add("error-message", "display-n"); // Add classes for styling
    document.querySelector('.main-content').appendChild(errorMessage); // Add the error message to the DOM
  
    // Function to update the Next Step button state and error message
    function updateNextButtonState() {
      const anyCheckboxChecked = Array.from(document.querySelectorAll(".addon-item input[type='checkbox']"))
        .some(checkbox => checkbox.checked);
  
      if (anyCheckboxChecked) {
        nextBtn.disabled = false; // Enable the button
        errorMessage.classList.add("display-n"); // Hide the error message
        errorMessage.classList.remove("display-b"); // Hide the error message
      } else {
        nextBtn.disabled = true; // Disable the button
        errorMessage.classList.remove("display-n"); // Show the error message
        errorMessage.classList.add("display-b"); // Show the error message
      }
    }
  
    // Function to handle click on add-on items
    addonItems.forEach(item => {
      item.addEventListener("click", function () {
        const checkbox = item.querySelector("input[type='checkbox']");
  
        // Toggle checkbox
        checkbox.checked = !checkbox.checked;
  
        // Toggle background color
        if (checkbox.checked) {
          item.classList.add("selected-addon");
        } else {
          item.classList.remove("selected-addon");
        }
  
        // Update the Next Step button state
        updateNextButtonState();
      });
    });
  
    // Handle Next Step button click
    nextBtn.addEventListener("click", function () {
      if (Array.from(document.querySelectorAll(".addon-item input[type='checkbox']"))
        .some(checkbox => checkbox.checked)) {
        errorMessage.classList.add("display-n"); // Hide the error message
        errorMessage.classList.remove("display-b"); // Hide the error message
        // Code to navigate to the next section
      } else {
        errorMessage.classList.remove("display-n"); // Show the error message
        errorMessage.classList.add("display-b"); // Show the error message
      }
    });
  
    // Initial state of the Next Step button
    updateNextButtonState();
  });
  