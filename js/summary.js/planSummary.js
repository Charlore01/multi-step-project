// // planSelection.js
// document.addEventListener('DOMContentLoaded', () => {
//   const planOptions = document.querySelectorAll('.plan-option');
//   const billingToggle = document.getElementById('billing-toggle-checkbox');

//   // Function to clear active class
//   function clearActivePlans() {
//     planOptions.forEach(plan => plan.classList.remove('active'));
//   }

//   // Function to format price based on billing
//   function formatPrice(price, billing) {
//     return billing === 'Yearly' ? `$${price}/yr` : `$${price}/mo`;
//   }

//   // Listen for plan option clicks
//   planOptions.forEach(plan => {
//     plan.addEventListener('click', () => {
//       // Clear previous selections
//       clearActivePlans();

//       // Mark the clicked plan as active
//       plan.classList.add('active');

//       // Capture selected plan details
//       const planName = plan.querySelector('h3').innerText;
//       const planPriceText = plan.querySelector('p').innerText; // e.g., "$90/yr"
//       const planPrice = planPriceText.split('/')[0]; // "$90"

//       // Determine billing type
//       const billing = billingToggle.checked ? 'Yearly' : 'Monthly';

//       // Adjust price based on billing
//       const adjustedPrice = billing === 'Yearly' ? 
//         (parseInt(planPrice.replace('$', '')) / 12).toFixed(2) : 
//         parseInt(planPrice.replace('$', ''));

//       // Store selected plan in formData
//       formData.selectedPlan = {
//         name: planName,
//         price: formatPrice(adjustedPrice, billing),
//         billing: billing
//       };

//       // Update summary immediately
//       updateSummary();
//     });
//   });

//   // Handle billing toggle change
//   billingToggle.addEventListener('change', () => {
//     const billing = billingToggle.checked ? 'Yearly' : 'Monthly';
//     formData.selectedPlan.billing = billing;

//     // Recalculate plan price based on billing
//     const activePlan = document.querySelector('.plan-option.active');
//     if (activePlan) {
//       const planPriceText = activePlan.querySelector('p').innerText; // e.g., "$90/yr" or "$9/mo"
//       const planPrice = parseInt(planPriceText.replace(/[^0-9]/g, '')); // 90 or 9

//       const adjustedPrice = billing === 'Yearly' ? (planPrice) : (planPrice / 10); // Adjust as needed

//       formData.selectedPlan.price = formatPrice(adjustedPrice, billing);
//     }

//     // Update summary to reflect billing change
//     updateSummary();
//   });
// });

// planSelection.js
document.addEventListener('DOMContentLoaded', () => {
  const planOptions = document.querySelectorAll('.plan-option');
  const billingToggle = document.getElementById('billing-toggle-checkbox');

  planOptions.forEach(plan => {
      plan.addEventListener('click', () => {
          clearActivePlans(); // Clear other selections
          plan.classList.add('active'); // Mark current plan as active

          const planName = plan.querySelector('h3').innerText;
          const planPriceText = plan.querySelector('p').innerText; // e.g., "$90/yr"
          const planPrice = planPriceText.split('/')[0]; // "$90"

          const billing = billingToggle.checked ? 'Yearly' : 'Monthly';

          const adjustedPrice = billing === 'Yearly' ? 
              (parseInt(planPrice.replace('$', '')) / 12).toFixed(2) : 
              parseInt(planPrice.replace('$', ''));

          formData.selectedPlan = {
              name: planName,
              price: `$${adjustedPrice}`,
              billing: billing
          };

          updateSummary(); // Update the summary with the selected plan

          calculateTotal(); // Ensure total is calculated after selecting a plan
      });
  });

  billingToggle.addEventListener('change', () => {
      const billing = billingToggle.checked ? 'Yearly' : 'Monthly';
      formData.selectedPlan.billing = billing;

      const activePlan = document.querySelector('.plan-option.active');
      if (activePlan) {
          const planPriceText = activePlan.querySelector('p').innerText;
          const planPrice = parseInt(planPriceText.replace(/[^0-9]/g, ''));

          const adjustedPrice = billing === 'Yearly' ? (planPrice) : (planPrice / 10);

          formData.selectedPlan.price = `$${adjustedPrice}`;

          updateSummary();
          calculateTotal(); // Recalculate after changing billing type
      }
  });
});
