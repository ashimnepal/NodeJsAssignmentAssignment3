$(document).ready(function() {
    // Toggle between login and signup forms
    $('#signupLink').click(function() {
      $('#loginForm').hide();
      $('#signupForm').show();
    });

    $('#loginLink').click(function() {
      $('#loginForm').show();
      $('#signupForm').hide();
    });

    // Form submission handling
    $('#signupForm').submit(function(event) {
      event.preventDefault();
      // Perform signup form validation and submission
      let username = $('#signupUsername').val();
      let password = $('#signupPassword').val();
      let repeatPassword = $('#signupRepeatPassword').val();
      let userType = $('#userType').val();

      // Implement your validation logic here (e.g., password match)
      // Example validation
      if (password !== repeatPassword) {
        alert('Passwords do not match!');
        return;
      }

      // Example: submit form data using AJAX or submit normally
      console.log('Signup submitted:', username, password, userType);
      // Here you can submit the form data to your backend or perform other actions
    });

    $('#loginForm').submit(function(event) {
      event.preventDefault();
      // Perform login form submission
      let username = $('#username').val();
      let password = $('#password').val();

      // Example: submit form data using AJAX or submit normally
      console.log('Login submitted:', username, password);
      // Here you can submit the form data to your backend or perform other actions
    });
  });