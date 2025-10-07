const express = require("express");
const { createUser, getUsers, deleteUser } = require("../controller/userContoller");

const router = express.Router();

router.post("/", createUser);
router.get("/", getUsers);
router.delete("/:id", deleteUser);

module.exports = router;
