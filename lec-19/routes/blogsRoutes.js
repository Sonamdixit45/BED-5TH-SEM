const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

// Routes
router.post("/", blogController.createBlog);
router.delete("/:blogId", blogController.deleteBlog);
router.get("/", blogController.getAllBlogs);
router.get("/:id", blogController.getBlogById);

module.exports = router;
