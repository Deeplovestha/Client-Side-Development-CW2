$(document).ready(function() {
    // Toggle password visibility
    $('.toggle-password').click(function() {
        const passwordField = $('.passBtn');
        const button = $(this);
        
        if (passwordField.attr('type') === 'password') {
            passwordField.attr('type', 'text');
            button.text('Hide');
        } else {
            passwordField.attr('type', 'password');
            button.text('Show');
        }
    });

    // Login form submission
    $('#loginForm').submit(function(e) {
        e.preventDefault();
        const email = $('.userBtn').val();
        const pass = $('.passBtn').val();

        // Check against stored users
        const users = JSON.parse(localStorage.getItem("users")) || {};
        if (users[email] && users[email].password === pass) {
            alert("Login Successful");
            window.location.href = "../index/index.html";
        } else {
            alert("Invalid Username or Password");
        }
    });

    // Show/hide forms
    $('#show-signup').click(function(e) {
        e.preventDefault();
        $('#login-container').hide();
        $('#signup-form').show();
    });

    $('#show-login').click(function(e) {
        e.preventDefault();
        $('#signup-form').hide();
        $('#login-container').show();
    });

    // Create account function
    $('#signup-submit').click(function() {
        const fname = $('#fname').val().trim();
        const lname = $('#lname').val().trim();
        const email = $('#newEmail').val().trim();
        const pass = $('#newPass').val().trim();
        const confirm = $('#confirmPass').val().trim();

        // Validation
        if (!fname || !lname || !email || !pass || !confirm) {
            alert("Please fill in all fields.");
            return;
        }

        if (pass !== confirm) {
            alert("Passwords do not match.");
            return;
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (pass.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || {};

        if (users[email]) {
            alert("An account with this email already exists.");
            return;
        }

        // Store user data
        users[email] = {
            firstName: fname,
            lastName: lname,
            password: pass
        };
        
        localStorage.setItem("users", JSON.stringify(users));
        
        // Redirect to index.html after successful account creation
        window.location.href = "index.html";
    });
});