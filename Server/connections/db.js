const mongoose = require("mongoose");

const mongooseURI =process.env.DB_URI;

// Connection to MongoDB
const connectToMongo = () => {
    mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((error) => {
            // Logging the error
            console.error("Error in connecting to MongoDB: ", error.message);
        });
    
}

module.exports = connectToMongo;
