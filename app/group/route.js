let groupSchema = require('./schema'),
    express = require('express'),
    router = express.Router(),
    _ = require('lodash')


//# Create new group
router.post('/new', (request, response) => {
    let newEntry = new groupSchema()
    let data = request.body

    // Verifier que les différents champs existent
    if (_.isNil(data.name) || _.isNil(data.year)) {
        console.log('Error data is missing - Create group')
        return response.json({error: "New group data is missing"}).status(400)
    }

    // Match data
    newEntry.name = data.name
    newEntry.year = data.year


    newEntry.save((err, data) => {
        if (err) {
            console.log('Error during mongoose save - group', err)
            return response.json({error: "Error during mongo saving", stack: err}).status(300)
        } else {
            console.log('group created', data)
            return response.json(data).status(200)
        }
    })
})

module.export = router;
