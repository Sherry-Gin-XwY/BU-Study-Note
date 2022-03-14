const colors = require('colors');

const ZipCodeEmitter = require('./zipCodeEmitter').ZipCodeEmitter;

const cities = new ZipCodeEmitter();

cities.on('lookupByZipCode', (args) => {
    console.log('Event lookupByZipCode raised!')
    console.log(args)
})

cities.on('lookupByCityState', (args) => {
    console.log('Event lookupByCityState raised! (Handler1)')
    console.log(args)
})

cities.on('lookupByCityState', (args) => {
    console.log('Event lookupByCityState raised! (Handler2)')
    console.log(' City: ' + args.city + ', State: ' + args.state)
    for (let i = 0; i < args.data.length; i++) {
        console.log('   ' + args.data[i].zip + ' has a population of ' + args.data[i].pop)
    }
})

cities.on('getPopulationByState', (args) => {
    console.log('Event getPopulationByState raised!')
    console.log(args)
})

cities.lookupByZipCode('02215')
cities.lookupByCityState('BOSTON', 'MA')
cities.getPopulationByState('MA')