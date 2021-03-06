const net = require('net');

const colors = require('colors');

const cities = require('./zipCodeModule_v2');

const server = net.createServer((socket) => {

	console.log("Client connection...".red);

	socket.on('end', () => {
		console.log("Client disconnected...".red);
	});

	// HW Code - Write the following code to process data from client

	socket.on('data', (data) => {

		let input = data.toString();
		console.log(colors.blue('...Received %s'), input);

		// Fill in the rest
		var parts = input.split(',');
		var result;
		switch (parts[0]) {
			case 'lookupByZipCode':
				result = cities.lookupByZipCode(parts[1]) || "undefined";
				break;
			case 'lookupByCityState':
				result = cities.lookupByCityState(parts[1], parts[2]);
				break;
			case 'getPopulationByState':
				result = cities.getPopulationByState(parts[1]);
				break;
			default:
				result = 'Invalid request';
		};
		socket.write(JSON.stringify(result));
	});

});

// listen for client connections
server.listen(3000, () => {
	console.log("Listening for connections on port 3000");
});
