const MongoClient = require('mongodb').MongoClient;
const credentials = require("./credentials.js");

// Original remote mongodb
/*
const dbUrl = 'mongodb+srv://' + credentials.username +
	':' + credentials.password + '@' + credentials.host + '/' + credentials.database;
*/

// => localhost
const dbUrl = 'mongodb://localhost:27017';


// => my personal remote server
// const dbUrl = 'mongodb+srv://' + credentials.username + ':' + credentials.password + '@' + credentials.remotehost + '/' + credentials.database;

let client = null;

const getConnection = async () => {
	if (client == null)
		client = await MongoClient.connect(dbUrl,  { useNewUrlParser: true ,  useUnifiedTopology: true });
	return client;
}

module.exports.lookupByZipCode =  async (zip) => {

	let client = await getConnection();
	let collection = client.db(credentials.database).collection('zipcodes');

	let result = await collection.find({'_id': zip}).toArray();

	if (result.length > 0)
		return result[0];
	else
		return undefined;
};

// Complete the code for the following

module.exports.lookupByCityState = async (city, state) => {



	let client = await getConnection();
	let collection = client.db(credentials.database).collection('zipcodes');

	// Fill in the rest
	let result = await collection.find({'city': city, 'state': state}).toArray();


	if (result.length > 0) {
		const stdata = [];
		for (let i = 0; i < result.length; i++) {
			stdata.push({
				zip: result[i]._id,
				pop: result[i].pop});
		}

		return ({
			city: city,
			state: state,
			data: stdata
		});
	}
	else
		return undefined;

};

module.exports.getPopulationByState =
	async (state) => {

		let client = await getConnection();
		let collection = client.db(credentials.database).collection('zipcodes');

		// Fill in the rest
		let result = await collection.find({'state': state}).toArray();

		if(result.length > 0) {
			let storedPop = 0;
			for (let i = 0; i < result.length; i++) {
				storedPop += result[i].pop;
			}
			return {
				state: state,
				pop: storedPop
			};
		}
		else
			return undefined;

	};

