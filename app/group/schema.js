let mongoose = require('mongoose')

let groupSchema = mongoose.Schema({
    name: String,
    year: String,
});

module.exports = mongoose.model('group', groupSchema);
