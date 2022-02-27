const express = require("express")
const router = express.Router()
const { register, login } = require("./auth");

// register
router.route("/register").post(register);

// login
router.route("/login").post(login);

module.exports = router;