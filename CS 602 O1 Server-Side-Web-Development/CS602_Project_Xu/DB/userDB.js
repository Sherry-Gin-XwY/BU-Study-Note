const mongoose = require('mongoose');

const credentials = require("./credentials");

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

const Schema = mongoose.Schema;

// Step 1. Fill in the schema definition

// Step 2. For collection, replace lastName below with your lastName

const UserSchema = new Schema({
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: true,
    },
    role: {
      type: String,
      default: "Basic",
      required: true,
    },
  },
  {
    collection: 'users_Xu'
});



const User = mongoose.model("user", UserSchema)
module.exports = User
