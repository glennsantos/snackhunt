var express = require('express');
var app     = express();

//For avoidong Heroku $PORT error

app.use(express.static(__dirname + '/public'))

app.listen('port', (process.env.PORT || 5000))
