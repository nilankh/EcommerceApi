const mongoose = require('mongoose');
const Product = require('../models/Product');
// add producgt
module.exports.addProduct = function(req,res){
    console.log(req.body);
    

    Product.create(req.body, function(err, doc){
        if(err){
            console.error(err);
            return  res.redirect('/')
        }
        return  res.json({doc})
    })
}

//get product
module.exports.getProduct = function(req,res){
  Product.find({},function(err,docs){
    if(err){
      console.log(err);
      return  res.redirect('/');
    }
    return  res.json({data:{
      products:docs
    }});
  })
}

//updating product
module.exports.updateProduct = function(req,res){
  const number = parseInt(req.query.number);
  console.log("params:", req.params.id);
  Product.findByIdAndUpdate(req.params.id, {$inc:{quantity:number}},{new:true} ,function(err,doc) {
    if (err) {
      console.error(err);
      return res.redirect("/");
    } else {
      return res.json({data:{
        product:doc,
        message: "updated  succesfully"
      }})
    }
  });

}

// deleting product
module.exports.deleteProduct = function(req, res) {
    console.log(req.body);
    Product.findByIdAndRemove(req.params.id, function(err) {
      if (err) {
        console.error(err);
        return res.redirect("/");
      } else {
        return res.json({data:{message:"products deleted"}})
      }
    });
  };