const Blog = require("../model/blog");
const User = require("../model/user");

// Create Blog
module.exports.createBlog = async (req, res) => {
    try {
        let { title, body, userId } = req.body;
        let newBlog = new Blog({ title, body, userId });
        await newBlog.save();
        res.json({
            success: true,
            message: "Blog created successfully",
            data: newBlog
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// Get All Blogs
module.exports.getAllBlogs = async (req, res) => {
    try {
        let blogs = await Blog.find().populate("userId", "name email"); // show user info
        res.json({
            success: true,
            message: "All blogs fetched successfully",
            data: blogs
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// Get Single Blogmodule.
module.exports.getBlogById = async (req, res) => {
    try {
        let blog = await Blog.findById(req.params.id).populate("userId", "name email");
        if (!blog) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }
        res.json({
            success: true,
            message: "Blog fetched successfully",
            data: blog
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// Update Blog
module.exports.updateBlog = async (req, res) => {
    try {
        let { title, body } = req.body;
        let updatedBlog = await Blog.findByIdAndUpdate(
            req.params.id,
            { title, body },
            { new: true }
        );
        if (!updatedBlog) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }
        res.json({
            success: true,
            message: "Blog updated successfully",
            data: updatedBlog
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// Delete Blog
module.exports.deleteBlog = async (req, res) => {
    try {
        let deletedBlog = await Blog.findByIdAndDelete(req.params.id);
        if (!deletedBlog) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }
        res.json({
            success: true,
            message: "Blog deleted successfully"
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};




const Blog = require("../models/blogModel");

// Create Blog
const createBlog = async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get Blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete Blog
const deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog deleted successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createBlog, getBlogs, deleteBlog };
