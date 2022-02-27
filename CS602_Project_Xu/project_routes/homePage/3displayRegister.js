// for display the register page for user

module.exports = async(req, res, next) => {

    // fill in the code
    res.render('homePageView/2homepageDisplayRegisterView',
            {title: "This is Register Page"}
    );
};