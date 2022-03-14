const data = require('./zips.json');

module.exports.lookupByZipCode =  (zip) => {
    console.log('Look up by zip code ('+ zip +')')
    // loop the data
    for (let i of data) {
        // if found specific argument, return it
        if (i._id == zip) {
            return i;
        }
    }
    // otherwise return undefined
    return undefined;
}

module.exports.lookupByCityState = (city, state) => {
    console.log('Look up by city ('+ city + ', ' + state + ')')
    // Create an array for store data.
    const storedDate = [];
    // loop the data
    for (let i of data) {
        // if found specific argument, store the data
        if (i.city == city && i.state == state) {
            storedDate.push({
                zip: i._id,
                pop: i.pop
            })
        }
    }
    // otherwise return undefined
    return {city, state, 'data' : storedDate}
};

module.exports.getPopulationByState = (state) => {
    console.log('Get population by state ('+ state + ')')
    let storedPop = 0;
    for (let i of data) {
        if(i.state == state) {
            storedPop += i.pop;
        }
    }
    return {state, "pop":storedPop}
};

