// document.addEventListener('DOMContentLoaded', () => {
//     // Step numbers
//     const steps = document.querySelectorAll('.step-number');
  
//     // Sections corresponding to each step
//     const sections = {
//       1: document.getElementById('personal-info'),
//       2: document.getElementById('select-plan'),
//       3: document.getElementById('add-ons'),
//       4: document.getElementById('summary'),
//     };
  
//     // Function to hide all sections and only display the selected one
//     function showSection(stepNumber) {
//       Object.values(sections).forEach(section => {
//         section.classList.add('display-n'); // Hide all sections
//         section.classList.remove('display-b'); // Hide all sections
//       });
//       sections[stepNumber].classList.remove('display-n'); // Show the selected section
//       sections[stepNumber].classList.add('display-b'); // Show the selected section
//     }
  
//     // Add click event listeners to all step numbers
//     steps.forEach((step, index) => {
//       step.addEventListener('click', () => {
//         const stepNumber = index + 1; // Convert step index to step number (1-based)
        
//         // Show the correct section based on the clicked step
//         showSection(stepNumber);
  
//         // Update active step styling
//         document.querySelectorAll('.step').forEach(stepDiv => {
//           stepDiv.classList.remove('active');
//         });
//         step.parentElement.classList.add('active');
//       });
//     });
//   });
  


// navigation.js
document.addEventListener('DOMContentLoaded', () => {
  const steps = document.querySelectorAll('.step-number');
  
  // Sections corresponding to each step
  const sections = {
    1: document.getElementById('personal-info'),
    2: document.getElementById('select-plan'),
    3: document.getElementById('add-ons'),
    4: document.getElementById('summary')
  };

  // Function to hide all sections and show the selected one
  function showSection(stepNumber) {
    Object.values(sections).forEach(section => {
      section.classList.add('display-n');
      section.classList.remove('display-b');
    });
    sections[stepNumber].classList.remove('display-n');
    sections[stepNumber].classList.add('display-b');

    // Update active step styling
    document.querySelectorAll('.step').forEach(stepDiv => {
      stepDiv.classList.remove('active');
    });
    document.querySelector(`.step:nth-child(${stepNumber})`).classList.add('active');
  }

  // Add click event listeners to all step numbers
  steps.forEach((step, index) => {
    step.addEventListener('click', () => {
      const stepNumber = index + 1;
      
      // Show the correct section based on the clicked step
      showSection(stepNumber);

      // If navigating to summary, update it
      if (stepNumber === 4) {
        updateSummary();
      }
    });
  });

  // Initial display (if needed)
  showSection(1);
});
