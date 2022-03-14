const EventEmitter = require('events').EventEmitter;
const data = require('./zips.json');

// Custom class
class ZipCodeEmitter  extends EventEmitter {

	// member functions
	lookupByZipCode(zip)  {
		console.log('Look up by zip code ('+ zip +')')
		let res = data.find(i => i._id === zip)
		this.emit('lookupByZipCode', res)
	}

	lookupByCityState(city, state)  {
		console.log('Lookup by city ('+ city + ', ' + state + ')')
		let res = data.filter(i => i.city == city && i.state == state).map(i => {
			return {"zip": i._id, 'pop': i.pop}
		})

		let result ={'city': city, 'state': state, 'data': res}
		this.emit('lookupByCityState', result)
	}

	getPopulationByState(state) {
		console.log('Get Population by State ('+ state + ')')
		let storedPop = data.reduce((prev, cur) =>{
			if(cur.state == state) {
				prev += cur.pop
			}
			return prev
		}, 0)
		let result = {'state': state, 'pop': storedPop}
		this.emit('getPopulationByState', result)
	}

}

module.exports.ZipCodeEmitter = ZipCodeEmitter;

