var express = require('express');
var app     = express();

//For avoidong Heroku $PORT error

app.use('/', express.static('./public'));

app.listen(process.env.PORT || 5000)
