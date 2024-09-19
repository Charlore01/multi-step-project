// // addOns.js
// document.addEventListener('DOMContentLoaded', () => {
//     const nextBtn = document.querySelector('#add-ons .next-btn');
//     const addOnInputs = document.querySelectorAll('#add-ons .addon-item input[type="checkbox"]');
  
//     nextBtn.addEventListener('click', () => {
//       // Clear previous add-ons
//       formData.addOns = [];
  
//       // Capture selected add-ons
//       addOnInputs.forEach(checkbox => {
//         if (checkbox.checked) {
//           const label = checkbox.nextElementSibling.innerText;
//           const priceText = checkbox.parentElement.parentElement.querySelector('span.text-purplish-blue').innerText; // e.g., "+$1/mo"
//           const price = parseInt(priceText.replace(/[^0-9]/g, ''));
  
//           formData.addOns.push({
//             name: label,
//             price: priceText
//           });
//         }
//       });
  
//       // Optional: Add validation if at least one add-on is required
  
//       // Calculate total
//       calculateTotal();
  
//       // Update summary
//       updateSummary();
  
//       // Navigate to Summary section
//       showSection(4);
//     });
//   });
  
// addSummary.js
document.addEventListener('DOMContentLoaded', () => {
  const nextBtn = document.querySelector('#add-ons .next-btn');
  const addOnInputs = document.querySelectorAll('#add-ons .addon-item input[type="checkbox"]');

  nextBtn.addEventListener('click', () => {
      // Clear previous add-ons
      formData.addOns = [];

      // Capture selected add-ons
      addOnInputs.forEach(checkbox => {
          if (checkbox.checked) {
              const label = checkbox.nextElementSibling.innerText;
              const priceText = checkbox.parentElement.parentElement.querySelector('span.text-purplish-blue').innerText; // e.g., "+$1/mo"
              const price = parseInt(priceText.replace(/[^0-9]/g, ''));

              formData.addOns.push({
                  name: label,
                  price: priceText
              });
          }
      });

      // Calculate total after selecting add-ons
      calculateTotal();

      // Update summary
      updateSummary();

      // Navigate to Summary section
      showSection(4);
  });
});
