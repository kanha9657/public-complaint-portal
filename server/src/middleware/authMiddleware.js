module.exports = {
    authenticateUser: (req, res, next) => {
        const token = req.headers['authorization'];
        if (!token) {
            return res.status(401).json({ message: 'No token provided, authorization denied.' });
        }

        // Verify token logic here (e.g., using JWT)
        // If valid, attach user info to request object
        // req.user = decoded; // assuming decoded contains user info
        // next();
        
        // Placeholder for token verification
        next(); // Remove this line when implementing actual verification
    },

    authorizeAdmin: (req, res, next) => {
        if (req.user && req.user.role === 'admin') {
            return next();
        }
        return res.status(403).json({ message: 'Access denied, admin only.' });
    }
};