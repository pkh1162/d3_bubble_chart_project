var express = require ('express');
var mongoose = require ('mongoose');
var bodyParser = require('body-parser');

var app = express();
var router = express.Router();

var User = require('./model/user_profiles');

var port = process.env.API_PORT || 3001;


//db config
var username = process.env.MONGO_USERNAME;
var password = process.env.MONGO_PASSWORD;
mongoose.connect('mongodb://' + username + ':' + password + '@ds013310.mlab.com:13310/bubble_profiles');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

    //and remove cacheing so we get the most recent comments
    res.setHeader('Cache-Control', 'no-cache');
    next();
});


//now we can set the route path & initialize the API
app.get('/', function(req, res) {
    //res.json({ message: 'API Initialized, huzzah!'});
    User.find(function(err, users) {
      if (err)
        res.send(err);
      //responds with a json object of our database comments.
      res.json(users)
    });
});


app.listen(port, function() {
      
});

