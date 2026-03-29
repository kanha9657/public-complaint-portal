// This file contains the logic for handling complaint-related requests.

const Complaint = require('../models/complaintModel');

// Submit a new complaint
exports.submitComplaint = async (req, res) => {
    try {
        const { userId, title, description } = req.body;
        const newComplaint = new Complaint({ userId, title, description });
        await newComplaint.save();
        res.status(201).json({ message: 'Complaint submitted successfully', complaint: newComplaint });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting complaint', error: error.message });
    }
};

// Get all complaints
exports.getAllComplaints = async (req, res) => {
    try {
        const complaints = await Complaint.find();
        res.status(200).json(complaints);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving complaints', error: error.message });
    }
};

// Get complaint by ID
exports.getComplaintById = async (req, res) => {
    try {
        const complaint = await Complaint.findById(req.params.id);
        if (!complaint) {
            return res.status(404).json({ message: 'Complaint not found' });
        }
        res.status(200).json(complaint);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving complaint', error: error.message });
    }
};

// Update a complaint
exports.updateComplaint = async (req, res) => {
    try {
        const complaint = await Complaint.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!complaint) {
            return res.status(404).json({ message: 'Complaint not found' });
        }
        res.status(200).json({ message: 'Complaint updated successfully', complaint });
    } catch (error) {
        res.status(500).json({ message: 'Error updating complaint', error: error.message });
    }
};

// Delete a complaint
exports.deleteComplaint = async (req, res) => {
    try {
        const complaint = await Complaint.findByIdAndDelete(req.params.id);
        if (!complaint) {
            return res.status(404).json({ message: 'Complaint not found' });
        }
        res.status(200).json({ message: 'Complaint deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting complaint', error: error.message });
    }
};