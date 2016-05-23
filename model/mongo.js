var mongodb = require("mongoose");

mongodb.connect('mongodb://localhost/Esports-Moments_api', function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});

module.exports = mongodb;
