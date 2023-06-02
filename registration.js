const form = document.getElementById('registration-form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');

  if (nameInput.value.trim() === '') {
    alert('Please enter your name');
    nameInput.focus();
    return;
  }

  if (emailInput.value.trim() === '') {
    alert('Please enter your email');
    emailInput.focus();
    return;
  }

  // We don't need to validate email field by regex, because it is done by browser.

  const formData = new FormData();
  formData.append('name', nameInput.value);
  formData.append('email', emailInput.value);

  fetch('https://pcu-ai-conference.com/register', {
    method: 'POST',
    body: formData
  })
    .then(response => {
      if (response.ok) {
        alert('Registration successful!');
        form.reset();
      } else {
        throw new Error('Registration failed, it happens because pcu-ai-conference.com is a fake website');
      }
    })
    .catch(error => {
      alert('Registration failed, it happens because pcu-ai-conference.com is a fake website');
      console.error(error);
    });

});