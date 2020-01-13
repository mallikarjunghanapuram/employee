// const MongoClient = require('mongodb').MongoClient;
// const MONGO_URL = "mongodb://localhost:27017/polyglot_ninja";


// module.exports = function (app) {
//     MongoClient.connect(MONGO_URL)
//         .then((connection) => {
//             app.test = connection.collection("test");
//             console.log("Database connection established")
//         })
//         .catch((err) => console.error(err))

// };

const mongoose = require('mongoose')

const connect = () => {
    console.log(`${'mongodb://localhost:27017'}/${'test'}`)
    mongoose.connect(`${'mongodb://localhost:27017'}/${'test'}`, { useUnifiedTopology: true })
        .then(() => console.log('Connected to mongoDB'))
        .catch(err => console.log('Could not connect to MongoDB...', err))
}

module.exports = {connect};