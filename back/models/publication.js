// models/publication.js
const Product=require('./product');
const mongoose = require('mongoose');
const Files=require('./file');
const Schema = mongoose.Schema;
const PublicationSchema = new Schema({
    id_pub: {
        type: String,
        required: true,
        unique: true
    },
    type:{
        type:String
    },
    contenu:{
        type:String,
    },
    image: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Files'
    }],
    video:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Files'
    }],
    date:{
        type:String,
    },
    pub_product:{
        type: mongoose.Schema.Types.ObjectId, 
        ref:'Product'
    }

});
module.exports = Publication = mongoose.model('Publication', PublicationSchema);