const mongoose = require("mongoose")
var Schema = mongoose.Schema;

const feeSchema = Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
});

module.exports = mongoose.model('test', feeSchema);