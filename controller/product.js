const Product = require('../models/Product');

//product create @POST
module.exports.addProducts = function(req, res){
    // return res.re

    Product.create(req.body ,function(err,doc){
        if(err){
            console.error(err);

        }
        return res.json({doc});
    })

}
