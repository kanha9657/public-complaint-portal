INSERT INTO users (username, password, role) VALUES 
('admin', 'admin_password', 'admin'),
('user1', 'user1_password', 'user'),
('user2', 'user2_password', 'user');

INSERT INTO complaints (user_id, description, status) VALUES 
(2, 'Complaint about service delay.', 'pending'),
(2, 'Issue with product quality.', 'resolved'),
(3, 'Feedback on customer support.', 'pending');