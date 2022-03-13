const bcrypt = require("bcryptjs/dist/bcrypt");
const User = require('../../DB/userDB');

// for the user

module.exports = async (req, res, next) => {

    const {username, password} = req.body
    // Check if username and password is provided
    if(!username || !password) {
        return res.status(400).json({
            message: "Username or Password not present"
        })
    }
    try {
        const user = await User.findOne({ username })
        if(!user) {
            res.status(401).json({
                message: "Login not successful",
                error: "User not found",
            })
        } else {
            // comparing given password with hashed password
            bcrypt.compare(password, user.password)
            .then(function (result) {
                if (result) {
                    if (user.role === 'admin') {
                        res.redirect('/shops/');
                    } else {
                        res.redirect('/customerShopPage/'+ user.id);
                    }
                } else {
                    res.status(400).json ({ message: "Login not successful"})
                }
            })
        }
    } catch (error) {
        res.status(400).json({
            message: "An error occurred",
            error: error.message,
        })
    }



};