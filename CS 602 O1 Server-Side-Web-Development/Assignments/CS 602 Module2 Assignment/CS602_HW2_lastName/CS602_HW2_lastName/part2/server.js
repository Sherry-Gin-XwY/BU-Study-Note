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

	const lookingCode = req.query.id
	console.log('test for -zip-get')

	if(lookingCode != undefined) {
		res.render('lookupByZipView',
			{
				zipCodeFoundByZipCode: cities.lookupByZipCode(lookingCode)._id,
				cityFoundByZipCode: cities.lookupByZipCode(lookingCode).city,
				stateFoundByZipCode: cities.lookupByZipCode(lookingCode).state,
				populationFoundByZipCode: cities.lookupByZipCode(lookingCode).pop
			}
		)
	} else {
		res.render('lookupByZipForm')
	}

});

app.post('/zip', (req, res) => {
	const lookingCode = req.body.id
	console.log('test for -zip-post')
	//TODO: Need to throw the error if there is no result match.
	res.render('lookupByZipView',
		{
			zipCodeFoundByZipCode: cities.lookupByZipCode(lookingCode)._id,
			cityFoundByZipCode: cities.lookupByZipCode(lookingCode).city,
			stateFoundByZipCode: cities.lookupByZipCode(lookingCode).state,
			populationFoundByZipCode: cities.lookupByZipCode(lookingCode).pop
		}
	)
	console.log(lookingCode)

});

// Implement the JSON, XML, & HTML formats

app.get('/zip/:id', (req, res) => {
	const lookingCode = req.params.id
	console.log(req.params.id)
	console.log('test for -zip-:id')
	//TODO: Need to throw the error if there is no result match.
	res.render('lookupByZipView',
	{
		zipCodeFoundByZipCode: cities.lookupByZipCode(req.params.id)._id,
		cityFoundByZipCode: cities.lookupByZipCode(lookingCode).city,
		stateFoundByZipCode: cities.lookupByZipCode(lookingCode).state,
		populationFoundByZipCode: cities.lookupByZipCode(lookingCode).pop
	});
});



app.get('/city', (req, res) => {

	// stored the looking city and state info
	const lookingCity = req.query.city;
	const lookingState = req.query.state;

	console.log(lookingCity)
	console.log(lookingState)
	console.log('test for -city-get')

	if((lookingCity != undefined) || (lookingState != undefined)){
		res.render('lookupByCityStateView',
		{
			cityFoundByZipCode: lookingCity,
			stateFoundByZipCode: lookingState,
			zipCodeFoundByCityState: cities.lookupByCityState(lookingCity, lookingState).data,
			popFoundedByCityState: cities.lookupByCityState(lookingCity, lookingState).data
		});
	} else {
		res.render('lookupByCityStateForm');
	}

});

app.post('/city', (req, res) => {

	const lookingCity = req.body.city;
	const lookingState = req.body.state;

	console.log(lookingCity)
	console.log(lookingState)
	console.log('test for -city-post')

	res.render('lookupByCityStateView',
	{
		cityFoundByZipCode: lookingCity,
		stateFoundByZipCode: lookingState,
		zipCodeFoundByCityState: cities.lookupByCityState(lookingCity, lookingState).data,
		popFoundedByCityState: cities.lookupByCityState(lookingCity, lookingState).data
	})

	console.log(cities.lookupByCityState(lookingCity, lookingState).data)
});

// Implement the JSON, XML, & HTML formats

app.get('/city/:city/state/:state', (req, res) => {
	const lookingCity = req.params.city;
	const lookingState = req.params.state;

	console.log(req.params.city)
	console.log(req.params.state)
	console.log('test for -city-:city-state-:state-get')

	res.render('lookupByCityStateView',
	{
		cityFoundByZipCode: lookingCity,
		stateFoundByZipCode: lookingState,
		zipCodeFoundByCityState: cities.lookupByCityState(lookingCity, lookingState).data,
		popFoundedByCityState: cities.lookupByCityState(lookingCity, lookingState).data
	})

});


app.get('/pop', (req, res) => {

	console.log('test for -pop-get')

	const lookingState = req.query.state;

	if(lookingState != undefined) {
		res.render('populationView',
		{
			lookingState:lookingState,
			lookingStatePop:cities.getPopulationByState(lookingState).pop}
		)
		console.log(cities.getPopulationByState(lookingState))
		console.log('looking state provided' + lookingState)
	} else {
		console.log('no looking state provided, go to the form page')
		res.render('populationForm')
	}

});

// Implement the JSON, XML, & HTML formats

app.get('/pop/:state', (req, res) => {
	console.log('test for -pop-:state-get')
	const lookingState = req.params.state;
	console.log('Found looking state:' + lookingState)
	res.render('populationView',
	{
		lookingState:lookingState,
		lookingStatePop:cities.getPopulationByState(lookingState).pop}
	)
	console.log(cities.getPopulationByState(lookingState))
});


app.use((req, res) => {
	res.status(404);
	res.render('404');
});

app.listen(3000, () => {
  console.log('http://localhost:3000');
});




