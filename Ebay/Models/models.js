var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({

  username : String,
  password : String,
  created_at : {type: Date, default: Date.now}

});

var detailsSchema = new mongoose.Schema({

  username : String,
  birthdate : Date,
  contact : Number,
  address : String,
  city : String,
  pin : Number

});


var advertiseSchema1 = new mongoose.Schema({

  username : String,
  type : String,
  description : String,
  seller_details : String,
  price : Number,
  quantity : Number

});

var shoppingCart = new mongoose.Schema({

  username : String,
  type : String,
  description : String,
  seller_details : String,
  price : Number,
  quantity : Number

});


mongoose.model("User", userSchema);
mongoose.model("Details", detailsSchema);
mongoose.model("Advertise1",advertiseSchema1);
mongoose.model("Cart",shoppingCart);
