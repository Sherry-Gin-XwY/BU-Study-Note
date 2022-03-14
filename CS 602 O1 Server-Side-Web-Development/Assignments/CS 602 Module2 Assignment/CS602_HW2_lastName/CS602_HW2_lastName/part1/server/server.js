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
		const inputCommand = input.split(',')

		switch (inputCommand[0]) {
			case 'lookupByZipCode':
				resultData = JSON.stringify(cities.lookupByZipCode(inputCommand[1]));
				socket.write(resultData);
				break;

			case 'lookupByCityState':
				resultData = JSON.stringify(cities.lookupByCityState(inputCommand[1], inputCommand[2]))
				socket.write(resultData);
				break;

			case 'getPopulationByState':
				resultData = JSON.stringify(cities.getPopulationByState(inputCommand[1]))
				socket.write(resultData)
				break;
			default:
				socket.write("Invalid request")

		}

	});

});

// listen for client connections
server.listen(3000, () => {
	console.log("Listening for connections on port 3000");
});
