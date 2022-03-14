const employeeDB = require('../employeeDB.js');
const Employee = employeeDB.getModel();

module.exports =  async (req , res , next) => {

    // Fill in the code
    var id = req.body.id;

    Employee.findById(id, function (err, employee) {
      if(err)
        console.log("Error Selecting : %s ", err);
      if(!employee)
        return res.render(404);

      employee.remove(function (err) {
        if (err)
          console.log("Error deleting : %s ", err );
        res.redirect('/employees');
      });
    });
  };

