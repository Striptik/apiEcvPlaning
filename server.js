//# Required extern dependancies
const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
const db             = require('./config/db');

//# Port
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));



MongoClient.connect(db.url, (err, database) => {
    if (err) {
        return console.log(err)
    }

    require('./app/routes')(app, database);

    app.listen(port, () => {
        console.log('Listen on port ' + port);
    });
})
