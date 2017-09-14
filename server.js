//# Required extern dependancies
const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();

//# Port
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes')(app, {});

app.listen(port, () => {
    console.log('We are listening on ' + port);
});