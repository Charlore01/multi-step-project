document.querySelector('.change-select-plan').addEventListener('click', function (e) {
  e.preventDefault(); // Prevent default link behavior

  // Hide the Summary section (step 4)
  // document.getElementById('select-plan').style.display = 'none';
  document.getElementById('summary').style.display = 'none';

  // Show the Select Plan section (step 2)
  document.getElementById('select-plan').style.display = 'block';

  // document.querySelector('.plan-btn').addEventListener('click', function(e) {
  //   e.preventDefault(); // Prevent default link behavior

  //   // Hide the Summary section (step 4)
  //   // document.getElementById('select-plan').style.display = 'none';
  //   document.getElementById('summary').style.display = 'block';

  //   // Show the Select Plan section (step 2)
  //   document.getElementById('select-plan').style.display = 'none';
  //   document.getElementById('thank-you-card').style.display = 'none';
  // });
});
// document.getElementById('select-plan').scrollIntoView({ behavior: 'smooth' });


document.querySelector('.change-plan').addEventListener('click', function (e) {
  e.preventDefault(); // Prevent default link behavior

  // Hide the Summary section (step 4)
  document.getElementById('summary').style.display = 'none';

  // Show the Select Plan section (step 2)
  document.getElementById('add-ons').style.display = 'block';  // Changed from 'add-ons' to 'select-plan'
});


