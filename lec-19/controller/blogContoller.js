const Blog = require("../model/blog");
const User = require("../model/user");

// Create Blog
exports.createBlog = async (req, res) => {
    try {
        let { title, body, userId } = req.body;
        let user = await User.findById(userId);

        if (!user) {
            return res.json({
                success: false,
                message: "Invalid user"
            });
        }

        let newBlog = new Blog({ title, body, date: Date.now(), userId });
        await newBlog.save();

        user.blogs.push(newBlog._id);
        await user.save();

        res.json({
            success: true,
            message: "Blog added successfully",
            data: newBlog
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// Delete Blog
exports.deleteBlog = async (req, res) => {
    try {
        let { blogId } = req.params;
        let { userId } = req.body;

        let blog = await Blog.findById(blogId);
        if (!blog) {
            return res.json({
                success: false,
                message: "Blog does not exist"
            });
        }

        if (String(blog.userId) !== String(userId)) {
            return res.json({
                success: false,
                message: "Permission denied"
            });
        }

        await Blog.findByIdAndDelete(blogId);
        res.json({
            success: true,
            message: "Blog deleted successfully"
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// Get All Blogs
exports.getAllBlogs = async (req, res) => {
    try {
        let blogs = await Blog.find();
        res.json({
            success: true,
            message: "All blogs fetched successfully",
            data: blogs
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// Get Single Blog
exports.getBlogById = async (req, res) => {
    try {
        let blog = await Blog.findById(req.params.id);
        res.json({
            success: true,
            message: "Blog fetched successfully",
            data: blog
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
