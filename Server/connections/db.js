const mongoose = require('mongoose');
require('dotenv').config();

const mongooseURI = process.env.DB_URI || "mongodb://127.0.0.1:27017/UniGatherDB";
// console.log(mongooseURI);

const connectToMongo = () => {
  // Connect to MongoDB
  mongoose.connect(mongooseURI)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
}

module.exports = connectToMongo;
