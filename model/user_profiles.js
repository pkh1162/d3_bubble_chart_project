var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  name : String,
  email_address : String,
  phone : String,
  github : String,    // or if no page: 'blank'
  porfolio : String,
  image : String,
  uniqueProjects : [
    {
      name : String,
      description : String,
      link : String,
      tags : [String]
    }
  ],
  statement : String
  
}); 

module.exports = mongoose.model('User', UserSchema);

/*
[
    {
      name : String,
      description : String,
      link : String,
      tags : [String]
    }
  ]
  */