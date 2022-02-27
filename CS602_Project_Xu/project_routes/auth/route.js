const express = require("express")
const router = express.Router()
const { register, login, update, deleteUser } = require("./auth");

// register router
router.route("/register").post(register);

// login router
router.route("/login").post(login);

// Update router
router.route("/update").put(update);

// Delete router
router.route("/deleteUser").delete(deleteUser);

module.exports = router;