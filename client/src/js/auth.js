// This file manages authentication-related functions, including login and logout processes.

const apiUrl = 'http://localhost:5000/api'; // Adjust the API URL as needed

// User login function
async function userLogin(event) {
    event.preventDefault();
    const email = document.getElementById('user-email').value;
    const password = document.getElementById('user-password').value;

    const response = await fetch(`${apiUrl}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
        localStorage.setItem('token', data.token);
        window.location.href = 'submit-complaint.html'; // Redirect to complaint submission page
    } else {
        alert(data.message);
    }
}

// Admin login function
async function adminLogin(event) {
    event.preventDefault();
    const email = document.getElementById('admin-email').value;
    const password = document.getElementById('admin-password').value;

    const response = await fetch(`${apiUrl}/auth/admin/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
        localStorage.setItem('adminToken', data.token);
        window.location.href = 'admin-dashboard.html'; // Redirect to admin dashboard
    } else {
        alert(data.message);
    }
}

// Logout function
function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('adminToken');
    window.location.href = 'index.html'; // Redirect to homepage
}

// Event listeners for login forms
document.getElementById('user-login-form').addEventListener('submit', userLogin);
document.getElementById('admin-login-form').addEventListener('submit', adminLogin);