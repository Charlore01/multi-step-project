document.addEventListener('DOMContentLoaded', () => {
    // Get the confirm button, thank-you card, and summary section
    const confirmButton = document.getElementById('confirm-btn');
    const thankYouCard = document.getElementById('thank-you-card');
    const summarySection = document.getElementById('summary');
  
    // Ensure the thank-you card is initially hidden using inline styles as a fallback
    thankYouCard.style.display = 'none'; // Explicitly set to 'none'
  
    // Event listener for the confirm button click
    confirmButton.addEventListener('click', () => {
      // Hide the summary section
      summarySection.style.display = 'none'; // Ensure this hides properly
  
      // Show the thank-you card
      thankYouCard.style.display = 'block'; // Directly set display to block
  
      // Apply the animation to the writing class dynamically
      const writingElements = document.querySelectorAll('.writing');
      writingElements.forEach((element) => {
        // Reset animation by clearing the style and re-triggering the animation
        element.style.width = '0'; // Reset the width to start animation
        element.style.animation = 'none'; // Reset previous animation
        setTimeout(() => {
          element.style.animation = 'typing 3.5s steps(50, end), blink-caret 0.75s step-end infinite';
          element.style.width = '100%'; // Manually trigger the width change for the animation
        }, 10); // Small delay to ensure animation reset
      });
    });
  });
  

//   // Get references to the confirm button, summary section, and thank-you card
// const confirmBtn = document.getElementById('confirm-btn');
// const summarySection = document.getElementById('summary');
// const thankYouCard = document.getElementById('thank-you-card');

// // Add event listener to the confirm button
// confirmBtn.addEventListener('click', function() {
//     // Hide the summary section
//     summarySection.style.display = 'none';

//     // Display the thank-you card
//     thankYouCard.style.display = 'flex'; // Or 'block', depending on your layout needs

//     const writingElements = document.querySelectorAll('.writing');
//     writingElements.forEach((element) => {
//       // Reset animation by clearing the style and re-triggering the animation
//       element.style.width = '0'; // Reset the width to start animation
//       element.style.animation = 'none'; // Reset previous animation
//       setTimeout(() => {
//         element.style.animation = 'typing 3.5s steps(50, end), blink-caret 0.75s step-end infinite';
//         element.style.width = '100%'; // Manually trigger the width change for the animation
//       }, 10); // Small delay to ensure animation reset
//     });
// });


// // Function to hide the summary container and show the thank-you card
// function handleConfirmButtonClick() {
//   // Get references to the elements
//   const summaryContainer = document.getElementById('summary');
//   const thankYouCard = document.getElementById('thank-you-card');
  
//   // Check if elements exist
//   if (summaryContainer && thankYouCard) {
//     // Hide the summary container
//     summaryContainer.classList.remove('display-b'); // Remove 'display-b' class (if it's applied)
//     summaryContainer.classList.add('display-n');    // Add 'display-n' class to hide
    
//     // Show the thank-you card
//     thankYouCard.classList.remove('display-n');     // Remove 'display-n' class (if it's applied)
//     thankYouCard.classList.add('display-b');        // Add 'display-b' class to show
//   } else {
//     console.error('Elements not found: summary or thank-you-card');
//   }
// }

// // Attach the function to the confirm button's click event
// document.getElementById('confirm-btn').addEventListener('click', handleConfirmButtonClick);
