const apiUrl = 'http://localhost:3000/api'; // Base URL for the API

// Function to handle user login
async function userLogin(credentials) {
    const response = await fetch(`${apiUrl}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });
    return response.json();
}

// Function to handle admin login
async function adminLogin(credentials) {
    const response = await fetch(`${apiUrl}/auth/admin-login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });
    return response.json();
}

// Function to submit a complaint
async function submitComplaint(complaintData) {
    const response = await fetch(`${apiUrl}/complaints`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(complaintData),
    });
    return response.json();
}

// Function to fetch all complaints
async function fetchComplaints() {
    const response = await fetch(`${apiUrl}/complaints`);
    return response.json();
}

// Function to fetch details of a specific complaint
async function fetchComplaintDetails(complaintId) {
    const response = await fetch(`${apiUrl}/complaints/${complaintId}`);
    return response.json();
}

// Function to fetch user complaints
async function fetchUserComplaints(userId) {
    const response = await fetch(`${apiUrl}/complaints/user/${userId}`);
    return response.json();
}

// Function to delete a complaint
async function deleteComplaint(complaintId) {
    const response = await fetch(`${apiUrl}/complaints/${complaintId}`, {
        method: 'DELETE',
    });
    return response.json();
}