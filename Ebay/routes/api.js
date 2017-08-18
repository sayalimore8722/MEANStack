var mongoose = require('mongoose');
var Details = mongoose.model('Details');
var Advertise1 = mongoose.model('Advertise1');
var Cart = mongoose.model('Cart');
var express = require('express');
var router = express.Router();


router.route("/about")

  .post(function(req, res)
  {
    var birthdate = req.param('birthdate');
    var username = req.param('username');
    var contact = req.param('contact');
    var address = req.param('address');
    var city = req.param('city');
    var pin = req.param('pin');

    console.log("In Post");
    console.log(username);
    console.log(birthdate);


    var details = new Details();
    details.username = username;
    details.birthdate = birthdate;
    details.contact = contact;
    details.address = address;
    details.city = city;
    details.pin = pin;


    details.save(function(err) {
      if (err){
        console.log('Error in Saving details: '+err);
        throw err;
      }
    });


    return res.send('In post....')
  })



  router.route("/about/:username_id")

.get(function(req, res)
{
    console.log("In Get");
    var username = req.param('username_id');

      console.log(username);

      Details.findOne({ 'username' :  username },
				function(err, user) {

					if (err){
            console.log('In error');
						res.send(err);
          }

					console.log('User logged in');
					res.send(user);

				}
			);
});



router.route("/advertise")


.get(function(req, res)
{
  console.log('debug1');
		Advertise1.find(function(err, advs){
			console.log('debug2');
			if(err){
				return res.send(500, err);
			}
			return res.send(200,advs);

		});
})


.post(function(req, res)
{
    var username = req.param("username");
    var type = req.param("type");
    var description = req.param("description");
    var seller_details = req.param("seller_details");
    var quantity = req.param("quantity");
    var price = req.param("price");

    console.log('In advertise post');
    console.log(username);
    console.log(type);
    console.log(description);
    console.log(seller_details);
    console.log(quantity);
    console.log(price);
    var adv_details = new Advertise1();

    adv_details.username = username;
    adv_details.type = type;
    adv_details.description = description;
    adv_details.seller_details = seller_details;
    adv_details.quantity = quantity;
    adv_details.price = price;

  console.log(':::::::::::::::::::::::');
  adv_details.save(function(err) {
      if (err){
        console.log('Error in Saving details: '+err);
        throw err;
      }

      console.log('Done');

    });


      return res.send('In adv post');
});


router.route("/product/:id")

.get(function(req, res)
{
  console.log("In Get******");
 var _id = req.param('id');

    console.log(_id);

  Advertise1.findById(req.params.id, function(err, product){
			if(err)
				res.send(err);
		return	res.json(product);
  });


});

router.route("/cart")

.post(function(req, res)
{
  var username = req.param("username");
  var type = req.param("type");
  var description = req.param("description");
  var seller_details = req.param("seller_details");
  var quantity = req.param("quantity");
  var price = req.param("price");

  console.log('In advertise post');
  console.log(username);
  console.log(type);
  console.log(description);
  console.log(seller_details);
  console.log(quantity);
  console.log(price);
  var cart_details = new Cart();

  cart_details.username = username;
  cart_details.type = type;
  cart_details.description = description;
  cart_details.seller_details = seller_details;
  cart_details.quantity = quantity;
  cart_details.price = price;

console.log(':::::::::::::::::::::::');
cart_details.save(function(err) {
    if (err){
      console.log('Error in Saving details: '+err);
      throw err;
    }

    console.log('Done');

  });


    return res.send('In cart post');
});

router.route("/carts/:username")

.get(function(req, res)
{
    console.log("In Get");

    console.log(req.params.username);


      Cart.find({ 'username' :  req.params.username },
      function(err, cartd) {

        if (err){
          console.log('In error');
          res.send(err);
        }

        //console.log(cartd.quantity);
        console.log('User logged in');
        console.log(cartd);
        res.json(cartd);

      });

})
module.exports = router;
