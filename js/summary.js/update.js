// updateSummary.js
function updateSummary() {
    // Update Personal Info in Summary if needed (not present in your current summary)
    // If you want to display personal info in summary, add the corresponding HTML and update here.
  
    // Update Selected Plan
    const planNameElem = document.querySelector('.summary-box .selected-plan .plan-name');
    const planPriceElem = document.querySelector('.summary-box .selected-plan .plan-price');
  
    if (formData.selectedPlan.name) {
      planNameElem.innerText = `${formData.selectedPlan.name} (${formData.selectedPlan.billing})`;
      planPriceElem.innerText = formData.selectedPlan.price;
    }
  
    // Update Add-Ons
    const addOnsContainer = document.querySelector('.summary-box .add-ons');
    addOnsContainer.innerHTML = ''; // Clear previous add-ons
  
    formData.addOns.forEach(addOn => {
      const addOnHTML = `
        <div class="add-on-item pb-1">
          <span>${addOn.name}</span>
          <span class="pl-6">${addOn.price}</span>
          <p><a href="#" class="change-plan pb-1">Change</a></p>
        </div>
      `;
      addOnsContainer.insertAdjacentHTML('beforeend', addOnHTML);
    });
  
    // Update Total
    const totalPriceElem = document.querySelector('.summary-box .total-summary .total-price');
    totalPriceElem.innerText = `+$${formData.total}/mo`;
    
  }
