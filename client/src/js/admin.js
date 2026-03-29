// This file contains JavaScript functions specific to the admin functionalities, such as viewing and managing complaints.

document.addEventListener('DOMContentLoaded', function() {
    const complaintList = document.getElementById('complaint-list');
    
    // Fetch and display complaints
    function fetchComplaints() {
        fetch('/api/admin/complaints')
            .then(response => response.json())
            .then(data => {
                complaintList.innerHTML = '';
                data.forEach(complaint => {
                    const complaintItem = document.createElement('div');
                    complaintItem.classList.add('complaint-item');
                    complaintItem.innerHTML = `
                        <h3>${complaint.title}</h3>
                        <p>${complaint.description}</p>
                        <button onclick="deleteComplaint(${complaint.id})">Delete</button>
                    `;
                    complaintList.appendChild(complaintItem);
                });
            })
            .catch(error => console.error('Error fetching complaints:', error));
    }

    // Delete a complaint
    window.deleteComplaint = function(id) {
        fetch(`/api/admin/complaints/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                fetchComplaints();
            } else {
                console.error('Error deleting complaint:', response.statusText);
            }
        })
        .catch(error => console.error('Error deleting complaint:', error));
    };

    // Initial fetch of complaints
    fetchComplaints();
});