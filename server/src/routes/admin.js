const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');

// Route to get all complaints for admin
router.get('/complaints', authMiddleware.authorizeAdmin, adminController.getAllComplaints);

// Route to resolve a complaint (update status to 'Resolved')
router.post('/complaints/:id/resolve', authMiddleware.authorizeAdmin, adminController.updateComplaintStatus);

// Route to delete a complaint
router.delete('/complaints/:id', authMiddleware.authorizeAdmin, adminController.deleteComplaint);

module.exports = router;