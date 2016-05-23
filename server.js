var express = require('express'),
    app = express(), // routes
    bodyParser = require('body-parser'), // parse variable
    moment = require('./routes/moment'); //routes

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));
app.use('/moments', moment);

app.listen(8000);

console.log("Listening to PORT 8000");
