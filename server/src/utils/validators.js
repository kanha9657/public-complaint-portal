function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    return password.length >= 6; // Minimum length for password
}

function validateComplaint(complaint) {
    return complaint && complaint.trim().length > 0; // Ensure complaint is not empty
}

module.exports = {
    validateEmail,
    validatePassword,
    validateComplaint
};