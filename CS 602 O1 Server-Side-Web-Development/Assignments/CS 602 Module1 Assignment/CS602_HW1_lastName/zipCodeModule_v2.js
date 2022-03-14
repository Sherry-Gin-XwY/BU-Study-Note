const data = require('./zips.json');

module.exports.lookupByZipCode =  (zip) => {
    console.log('Look up by zip code ('+ zip +')')
    const res = data.find(i => i._id == zip)
        return res;
};

module.exports.lookupByCityState = (city, state) => {
    console.log('Look up by city ('+ city + ',' + state + ')')
    const res = data.filter(i => i.city == city && i.state == state).map(i => {
        return {zip: i._id, pop: i.pop}
    })

    return {city, state, 'data': res}
};

module.exports.getPopulationByState = (state) => {
    console.log('Get population by state ('+ state + ')')
    let storedPop = data.reduce((prev, cur) =>{
        if(cur.state == state) {
            prev += cur.pop
        }
        return prev
    }, 0)
    return { state, pop: storedPop }

};

