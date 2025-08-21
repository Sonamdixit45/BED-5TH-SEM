const express = require("express");
const { createBlog, getBlogs, deleteBlog } = require("../controller/blogContoller");

const router = express.Router();

router.post("/", createBlog);
router.get("/", getBlogs);
router.delete("/:id", deleteBlog);

module.exports = router;