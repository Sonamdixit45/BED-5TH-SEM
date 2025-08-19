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
        res.json({
            success: true,
            message: "User fetched successfully",
            data: user
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
