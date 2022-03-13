
const User = require ('../../DB/userDB');

module.exports = async (req, res, next) => {

    let users = await User.find({});

    let result = users.map( emp => {
        return {
            id: emp._id,
            username: emp.username,
            role: emp.role
        };
    });

    res.render('manageShopView/5manageDisplayUserView',
        {title: "List of Users", data: result});
};