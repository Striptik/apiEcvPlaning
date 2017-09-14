//# Required extern dependancies
const bodyParser = require('body-parser'),
    db = require('./config/db'),
    mongoose = require('mongoose'),
    express = require('express'),
    app = express()

//# DB Connection
mongoose.connect(db.url, db.options)

let db = mongoose.connection
db.on('error', console.error.bind(console, 'Oups, Mongoose Connect Error !'))
db.once('open', function () {
    console.log("Connected to the DB MAN !")
})

//# Handle json request/response
app.use(bodyParser.json({
    limit: '15mb'
}))
app.use(bodyParser.urlencoded({
    limit: '15mb',
    extended: false
}))

app.listen(db.port, () => {
    console.log('Listen on port ' + port)
})

//# Define the router
let InitRoute = ()



MongoClient.connect(db.url, (err, database) => {
    if (err) {
        return console.log(err)
    }

    require('./app/routes')(app, database)


})
