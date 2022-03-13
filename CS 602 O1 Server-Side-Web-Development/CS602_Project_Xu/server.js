var express = require('express');
const app = express();
const PORT = 3000

var bodyParser = require('body-parser');
var handlebars = require('express-handlebars');

const connectDB = require("./DB/db");
connectDB();



// setup handlebars view engine
app.engine('handlebars',
    handlebars({defaultLayout: 'main_logo'}));
app.set('view engine', 'handlebars');

// static resources
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Routing

var routes = require('./project_routes/index');
app.use('/', routes);


// Handling Error
process.on("unhandledRejection", err => {
  console.log(`An error occurred: ${err.message}`)
  server.close(() => process.exit(1))
})

app.use(express.json());
app.use("/auth", require("./project_routes/index"))


app.use(function(req, res) {
    res.status(404);
    res.render('404');
});

const server = app.listen(PORT, function(){
  console.log(`Server Connected to port ${PORT}`);
});