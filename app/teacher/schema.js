let mongoose = require('mongoose')

let teacherSchema = mongoose.Schema({
    name: String,
    lastname: String,
    email: String,
    phone: String
});

module.exports = mongoose.model('teacher', teacherSchema);