// // personalInfo.js
// document.addEventListener('DOMContentLoaded', () => {
//     const nextBtn = document.querySelector('#personal-info .next-btn');
//     const nameInput = document.getElementById('name');
//     const emailInput = document.getElementById('email');
//     const phoneInput = document.getElementById('phone');
  
//     nextBtn.addEventListener('click', () => {
//       // Capture input values
//       formData.personalInfo.name = nameInput.value.trim();
//       formData.personalInfo.email = emailInput.value.trim();
//       formData.personalInfo.phone = phoneInput.value.trim();
  
//       // Optional: Add validation here or rely on existing validation.js
  
//       // Navigate to Select Plan section
//       showSection(2);
//     });
//   });
  

document.addEventListener('DOMContentLoaded', () => {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');

  const summaryName = document.getElementById('summary-name');
  const summaryEmail = document.getElementById('summary-email');
  const summaryPhone = document.getElementById('summary-phone');

  // Function to update the summary
  function updateSummary() {
      summaryName.innerText = nameInput.value.trim() || 'N/A'; // If empty, show 'N/A'
      summaryEmail.innerText = emailInput.value.trim() || 'N/A';
      summaryPhone.innerText = phoneInput.value.trim() || 'N/A';
  }

  // Add input event listeners to update the summary in real-time
  nameInput.addEventListener('input', updateSummary);
  emailInput.addEventListener('input', updateSummary);
  phoneInput.addEventListener('input', updateSummary);

  // Initialize the summary with current form values
  updateSummary();
});
