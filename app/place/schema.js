/**
 * Created by davidmaarek on 14/09/2017.
 */

let mongoose = require('mongoose');

let placeSchema = mongoose.Schema({
    name: String,
    streetNumber: String,
    streetName: String,
    zipCode: String,
    city: String,
    country: String
});

module.exports = mongoose.model('place', placeSchema);