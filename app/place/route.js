/**
 * Created by davidmaarek on 14/09/2017.
 */

let placeSchema = require('./schema'),
    express = require('express'),
    router = express.Router(),
    _ = require('lodash');


//# Create new teacher
router.post('/new', (request, response) => {
    let newEntry = new placeSchema();
    let data = request.body;

    // Verifier que les différents champs existent
    if (_.isNil(data.name) || _.isNil(data.streetNumber)
        || _.isNil(data.streetName) || _.isNil(data.zipCode) || _.isNil(data.city) || _.isNil(data.country)) {
        console.log('Error data is missing - Create place');
        return response.json({error: "New place data is missing"}).status(400)
    }

    // Match data
    newEntry.name = data.name;
    newEntry.streetNumber = data.streetNumber;
    newEntry.streetName = data.streetName;
    newEntry.zipCode = data.zipCode;
    newEntry.city = data.cite;
    newEntry.country = data.country;


    newEntry.save((err, data) => {
        if (err) {
            console.log('Error during mongoose save - Place', err);
            return response.json({error: "Error during mongo saving", stack: err}).status(300)
        } else {
            console.log('Place created', data);
            return response.json(data).status(200)
        }
    })
});

module.export = router;