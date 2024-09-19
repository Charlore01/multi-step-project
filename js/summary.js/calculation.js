// // calculateTotal.js
// function calculateTotal() {
//     let total = 0;
  
//     // Extract numerical value from plan price
//     const planPrice = parseFloat(formData.selectedPlan.price.replace(/[^0-9.]/g, ''));
//     total += planPrice;
  
//     // Add add-ons prices
//     formData.addOns.forEach(addOn => {
//       const addOnPrice = parseFloat(addOn.price.replace(/[^0-9.]/g, ''));
//       total += addOnPrice;
//     });
  
//     // Update total in formData
//     formData.total = total;
  
//     // Update total in summary
//     document.querySelector('.total-price').innerText = `+$${total}/mo`;
//   }
  

// // calculateTotal.js
// function calculateTotal() {
//   let total = 0;

//   // Add add-ons prices from formData
//   formData.addOns.forEach(addOn => {
//     const addOnPrice = parseFloat(addOn.price.replace(/[^0-9.]/g, '')); // More robust price extraction
//     total += addOnPrice;
//   });

//   // Update total in formData
//   formData.total = total;

//   // Update total in the summary
//   document.querySelector('.total-price').innerText = `+$${total}/mo`;
// }

// calculateTotal.js
function calculateTotal() {
  let total = 0;

  // Extract numerical value from the selected plan's price
  const planPrice = parseFloat(formData.selectedPlan.price.replace(/[^0-9.]/g, ''));
  console.log('Plan Price:', planPrice); // Debugging log
  total += planPrice;

  // Add add-ons prices to the total
  formData.addOns.forEach(addOn => {
      const addOnPrice = parseFloat(addOn.price.replace(/[^0-9.]/g, ''));
      console.log('Add-on Price:', addOnPrice); // Debugging log
      total += addOnPrice;
  });

  // Update total in formData
  formData.total = total;

  // Debugging: Log the total price
  console.log('Total Price:', total);

  // Update total in the summary section
  document.querySelector('.total-price').innerText = `Total: +$${total}/mo`;
}
