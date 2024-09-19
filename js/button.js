document.addEventListener("DOMContentLoaded", () => {
  // Grab all sections for different steps
  const steps = document.querySelectorAll(".side-bar .step");
  const containers = document.querySelectorAll(".container > div:not(.side-bar)");
  const nextButtons = document.querySelectorAll(".next-btn");
  const returnButtons = document.querySelectorAll(".return-btn"); // Select all return buttons


  let currentStep = 0;

  function showCurrentStep() {
    // Hide all the sections first
    containers.forEach(container => (container.style.display = "none"));
    
    // Show the current step container
    containers[currentStep].style.display = "block";
    
    // Update the active step in the sidebar
    steps.forEach(step => step.classList.remove("active"));
    steps[currentStep].classList.add("active");
  }

  // Attach event listeners to each next button
  nextButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (currentStep < containers.length - 1) {
        currentStep++;
        showCurrentStep();
      }
    });
  });

  // Attach event listeners to each return button
  returnButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (currentStep > 0) {
        currentStep--;
        showCurrentStep();
      }
    });
  });

  // Initial display setup
  showCurrentStep();
});

