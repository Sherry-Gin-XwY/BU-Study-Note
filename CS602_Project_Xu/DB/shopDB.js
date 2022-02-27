const mongoose = require('mongoose');

const credentials = require("./credentials.js");

// Original remote mongodb

// Original remote mongodb
/*
const dbUrl = 'mongodb+srv://' + credentials.username +
	':' + credentials.password + '@' + credentials.host + '/' + credentials.database;
*/

// => localhost
const dbUrl = 'mongodb://localhost:27017';

// => my personal remote server
// const dbUrl = 'mongodb+srv://' + credentials.username + ':' + credentials.password + '@' + credentials.remotehost + '/' + credentials.database;

let connection = null;
let model = null;

let Schema = mongoose.Schema;

// Step 1. Fill in the schema definition

// Step 2. For collection, replace lastName below with your lastName

let shopSchema = new Schema({
    shopName: String,
    amount: Number,
}, {
    collection: 'shops_Xu'
});

module.exports = {
    getModel: () => {
        if (connection == null) {
            console.log("Creating connection and model...");
            connection = mongoose.createConnection(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
			model = connection.model("ShopModel",
							shopSchema);
        }
        return model;
    }
};