const express = require('express');
const router = express.Router();
const complaintController = require('../controllers/complaintController');

// Route to submit a new complaint
router.post('/submit', complaintController.submitComplaint);

// Route to get all complaints
router.get('/', complaintController.getAllComplaints);

// Route to get a specific complaint by ID
router.get('/:id', complaintController.getComplaintById);

// Route to update a complaint
router.put('/:id/status', complaintController.updateComplaint);

// Route to delete a complaint
router.delete('/:id', complaintController.deleteComplaint);

module.exports = router;