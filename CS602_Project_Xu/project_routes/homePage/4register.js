const bcrypt = require("bcryptjs/dist/bcrypt");
const User = require('../../DB/userDB');

module.exports = async (req, res, next) => {

    const {
        username,
        password
    } = req.body;
    if (password.length < 6) {
        return res.status(400).json({
            message: "Password less than 6 characters "
        });
    }

    bcrypt.hash(password, 10).then(async (hash) => {
        await User.create({
                username,
                password: hash,
            })
            .then((user) =>
                res.redirect('/homepage')
/*                 res.status(200).json({
                    message: "User successfully created",
                    user,
                }) */
            )
            .catch((error) =>
                res.status(401).json({
                    message: "User not successful created",
                    error: error.message,
                })
            );
    });

};