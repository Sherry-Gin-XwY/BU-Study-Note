const employeeDB = require('../employeeDB.js');
const Employee = employeeDB.getModel();

module.exports = async (req , res , next) => {

    // Fill in the code
    var id = req.params.id;

    Employee.findById(id, function (err, employee) {
        if(err)
            console.log("Error Selecting : %s ", err);
        if (!employee)
            return res.render('404');
        res.render('editEmployeeView',
            {title: "Edit Employee",
            data: {id: employee.id,
                    firstName: employee.firstName,
                    lastName: employee.lastName}
                });
        });
};

