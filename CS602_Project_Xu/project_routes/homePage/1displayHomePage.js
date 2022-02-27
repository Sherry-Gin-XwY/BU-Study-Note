
// for the user

module.exports = async (req, res, next) => {

    // TODO: fill in the code
    res.render('homePageView/1homepageView',
        {title: "This is Home Page"}
    );

};