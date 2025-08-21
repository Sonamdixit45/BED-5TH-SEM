const User = require("../model/user");

// Create User
exports.createUser = async (req, res) => {
    try {
        let { name, email, password } = req.body;
        let newUser = new User({ name, email, password });
        await newUser.save();
        res.json({
            success: true,
            message: "User added successfully",
            data: newUser
        });
    } catch (err) {
        // Duplicate email handling
        if (err.code === 11000) {
            return res.status(400).json({ success: false, message: "Email already exists" });
        }
        res.status(500).json({ success: false, message: err.message });
    }
};

// Get All Users
exports.getAllUsers = async (req, res) => {
    try {
        let users = await User.find();
        res.json({
            success: true,
            message: "All users fetched successfully",
            data: users
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// Get Single User
exports.getUserById = async (req, res) => {
    try {
        let user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.json({
            success: true,
            message: "User fetched successfully",
            data: user
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// Delete User
exports.deleteUser = async (req, res) => {
    try {
        let deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.json({
            success: true,
            message: "User deleted successfully"
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
