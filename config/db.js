const mongoose = require("mongoose");

const url = 'mongodb://mongo:27017/dockerNodeDB'


const connectToMongo = async () => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("Mongo DB Running")
}

module.exports = connectToMongo