const form = document.querySelector('form');
const emailInput = document.querySelector('#email');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting to the server

  const email = emailInput.value;

  // Save the email to a file using a server-side script (e.g. PHP)
  // In this example, we assume that the server-side script is named "save-email.php"
  fetch('save-email.php', {
    method: 'POST',
    body: JSON.stringify({ email }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to save email');
    }
    alert('Email saved successfully');
  })
  .catch(error => {
    console.error(error);
    alert('Failed to save email');
  });
});
