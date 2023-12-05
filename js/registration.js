// registration.js

// Function to validate user input
function validateRegistrationData(username, email, password, confirmPassword) {
    // Basic validation criteria - can be expanded as needed
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validEmail = emailRegex.test(email);
    const validPassword = password.length >= 6;
    const passwordsMatch = password === confirmPassword;

    return {
        valid: validEmail && validPassword && passwordsMatch,
        errors: {
            email: validEmail ? null : 'Invalid email format',
            password: validPassword ? null : 'Password must be at least 6 characters long',
            confirmPassword: passwordsMatch ? null : 'Passwords do not match'
        }
    };
}

// Function to submit registration data
async function submitRegistrationData(username, email, password) {
    try {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });

        if (!response.ok) {
            throw new Error('Failed to register');
        }

        return await response.json();
    } catch (error) {
        console.error('Registration error:', error);
        throw error;
    }
}

// Event listener for the registration form submission
document.getElementById('registrationForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const { valid, errors } = validateRegistrationData(username, email, password, confirmPassword);

    if (!valid) {
        // Handle validation errors
        console.log('Validation errors:', errors);
        // You can update the UI to reflect these errors
        return;
    }

    try {
        const registrationResult = await submitRegistrationData(username, email, password);
        console.log('Registration successful:', registrationResult);
        // Redirect to login page or dashboard after successful registration
    } catch (error) {
        // Handle registration errors
        console.log('Registration failed:', error);
        // Update the UI to show the registration error
    }
});
