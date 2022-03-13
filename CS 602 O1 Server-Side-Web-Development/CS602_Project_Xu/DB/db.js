const Mongoose = require("mongoose")
const localDB = `mongodb://localhost:27017`


Mongoose.set('useCreateIndex', true);
const connectDB = async () => {
    console.log("Creating connection and model...");
    connection = Mongoose.connect(localDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("MongoDB Connected")
}
module.exports = connectDB