// This file contains the logic for handling admin-related requests.

const Complaint = require('../models/complaintModel');

exports.getAllComplaints = async (req, res) => {
    try {
        const complaints = await Complaint.find();
        res.status(200).json(complaints);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving complaints', error });
    }
};

exports.getComplaintById = async (req, res) => {
    const { id } = req.params;
    try {
        const complaint = await Complaint.findById(id);
        if (!complaint) {
            return res.status(404).json({ message: 'Complaint not found' });
        }
        res.status(200).json(complaint);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving complaint', error });
    }
};

exports.updateComplaintStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
        const updatedComplaint = await Complaint.findByIdAndUpdate(id, { status }, { new: true });
        if (!updatedComplaint) {
            return res.status(404).json({ message: 'Complaint not found' });
        }
        res.status(200).json(updatedComplaint);
    } catch (error) {
        res.status(500).json({ message: 'Error updating complaint status', error });
    }
};

exports.deleteComplaint = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedComplaint = await Complaint.findByIdAndDelete(id);
        if (!deletedComplaint) {
            return res.status(404).json({ message: 'Complaint not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting complaint', error });
    }
};