let teacherSchema = require('./schema'),
    express = require('express'),
    router = express.Router(),
    _ = require('lodash')


//# Create new teacher
router.post('/new', (request, response) => {
    let newEntry = new teacherSchema()
    let data = request.body

    // Verifier que les différents champs existent
    if (_.isNil(data.name) || _.isNil(data.lastname)
        || _.isNil(data.phone) || _.isNil(data.email)) {
        console.log('Error data is missing - Create Teacher')
        return response.json({error: "New teacher data is missing"}).status(400)
    }

    // Match data
    newEntry.name = data.name
    newEntry.lastname = data.lastname
    newEntry.phone = data.phone
    newEntry.email = data.email


    newEntry.save((err, data) => {
        if (err) {
            console.log('Error during mongoose save - Teacher', err)
            return response.json({error: "Error during mongo saving", stack: err}).status(300)
        } else {
            console.log('Teacher created', data)
            return response.json(data).status(200)
        }
    })
})
