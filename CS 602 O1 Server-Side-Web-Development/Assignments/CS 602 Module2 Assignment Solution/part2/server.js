const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// setup handlebars view engine
const handlebars = require('express-handlebars');

app.engine('handlebars',
	handlebars({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

// static resources
app.use(express.static(__dirname + '/public'));

// Use the zipCode module
const cities = require('./zipCodeModule_v2');

// GET request to the homepage

app.get('/',  (req, res) => {
	res.render('homeView');
});

app.get('/zip', (req, res) => {
	if(req.query.id) {
		console.log("Found Query Id: " + req.query.id);
		let id = req.query.id;
		let result = cities.lookupByZipCode(id);
		res.render('lookupByZipView', result);
	} else {
		res.render('lookupByZipForm');
	}

});

app.post('/zip', (req, res) => {
	let id = req.body.id;
	let result = cities.lookupByZipCode(id);
	res.render('lookupByZipView', result);
});

// Implement the JSON, XML, & HTML formats

app.get('/zip/:id', (req, res) => {
	let id = req.params.id;
	console.log("Found Parameter ID: " + req.params.id);
	let result = cities.lookupByZipCode(id);

	res.format({
		// JSON format
		'application/json': function() {
			res.json(result);
		},

		// xml format
		'application/xml': function() {
			let resultXml =
			'<?xml version="1.0"?>\n' +
				'<zipCode id="' + result._id + '">\n' +
				'<city>' + result.city + '</city>\n' +
				'<state>' + result.state + '</state>\n' +
				'<pop>' + result.pop + '</pop>\n' +
				'</zipCode>\n';

			res.type('application/xml');
			res.send(resultXml);
		},

		'text/html': function() {
			res.render('lookupByZipView', result);
		}
	});
});



app.get('/city', (req, res) => {
	if ((req.query.city) && (req.query.state)) {
		let city = req.query.city;
		let state = req.query.state;
		let result = cities.lookupByCityState(city, state);
		res.render('lookupByCityStateView', result);
	} else {
		res.render('lookupByCityStateForm');
	}

});

app.post('/city', (req, res) => {
	let city = req.body.city;
	let state = req.body.state;
	let result = cities.lookupByCityState(city, state);
	res.render('lookupByCityStateView', result);
});

// Implement the JSON, XML, & HTML formats

app.get('/city/:city/state/:state', (req, res) => {
	let city = req.params.city;
	let state = req.params.state;
	let result = cities.lookupByCityState(city, state);

	res.format({
		// json
		'application/json':function() {
			res.json(result);
		},

		// xml
		'application/xml': function() {
			let resultXml =
			'<?xml version="1.0"?>\n' +
			'<city-state city="' + result.city + '" state="' + result.state + '">\n' +  result.data.map(elem => {
				let str = ' < entry zip="' + elem.zip + '" pop="' + elem.pop + '" />';
				return str;
			}).join("\n")
			+ '\n</city-state>\n';

			res.type('application/xml');
			res.send(resultXml);
		},

		// html
		'text/html': function() {
			res.render('lookupByCityStateView', result);
		}
	});
});



app.get('/pop', (req, res) => {
	if((req.query.pop) && (req.query.state)) {
		let state = req.query.state;
		let pop = cities.getPopulationByState(state);
	} else {
		res.render('populationForm');
	}


});

// Implement the JSON, XML, & HTML formats

app.get('/pop/:state', (req, res) => {
	let state = req.params.state;
	res.format({

		// Implement the JSON
		'application/json': function() {
			res.json(result);
		},

		// Implement the Xml
		'application/xml': function() {
			let resultXml =
			'<?xml version="1.0"?>\n' +
			'<state="' + result.state + '" pop' + result.pop + '">\n'

			res.type('application/xml');
			res.send(resultXml);
		},

		'text/html': function() {
			res.render('populationForm', result);
		}
	})

});


app.use((req, res) => {
	res.status(404);
	res.render('404');
});

app.listen(3000, () => {
  console.log('http://localhost:3000');
});




