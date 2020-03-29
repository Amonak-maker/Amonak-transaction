

const mongoose = require('mongoose');


const Schema = mongoose.Schema;



const filesSchema= new Schema({
    originalname:{
        type:String,
        },
    mimetype:{
        type:String
    },
    encoding:{
        type:String
    },
    createdAt:{
        type:String
    }
})
const Files=mongoose.model('Files',filesSchema)
module.exports=Files