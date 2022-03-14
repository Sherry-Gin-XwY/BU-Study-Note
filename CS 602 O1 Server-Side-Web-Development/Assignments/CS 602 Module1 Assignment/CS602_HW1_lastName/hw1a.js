const cities = require('./zipCodeModule_v1');
const colors = require('colors');

// Lookup by zip code: 02215, and print the results.
console.log(cities.lookupByZipCode("02215"));
// Lookup by zip code: 99999, and print the results.
console.log(cities.lookupByZipCode("99999"));

// Lookup by city, state: BOSTON, MA, and print the results.
console.log(cities.lookupByCityState("BOSTON", "MA"));
// Lookup by city, state: BOSTON, TX, and print the results.
console.log(cities.lookupByCityState("BOSTON", "TX"));
// Lookup by city, state: BOSTON, AK, and print the results.
console.log(cities.lookupByCityState("BOSTON", "AK"));

// Get population by state: MA, and print the results.
console.log(cities.getPopulationByState("MA"))
// Get population by state: TX, and print the results.
console.log(cities.getPopulationByState("TX"))
// Get population by state: AA, and print the results
console.log(cities.getPopulationByState("AA"))