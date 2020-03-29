// models/product.js
const Categorie=require('./categorie');
const mongoose = require('mongoose');

const Files=require('./file')
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
    code_product: {
        type: String,
    },
    nom_product:{
        type:String
    },
    image_Product:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Files'
    }],
    description: {
        type: String
    },
    prix:{
        type:Number,
    },
    prod_categorie:{
        type: mongoose.Schema.Types.ObjectId, 
        ref:'Categorie',
    }

});
const Product = mongoose.model('Product', ProductSchema);


module.exports=Product