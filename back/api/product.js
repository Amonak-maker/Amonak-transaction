const router =require('express').Router();
const productController=require('../controllers/product')
const dates=require('../controllers/date')
const multerConf=require('../controllers/multer')



    router.route('/create').post((req,res,next)=>{
        productController.createProduct(req,res,next)
    })
    router.route('/getall').get((req,res,next)=>{
        productController.getallProduct(req,res,next)
    })
    router.route('/getOne/:id').get((req,res,next)=>{
        productController.getoneProduct(req,res,next)
    })
    router.route('/update_categorie/:id').post((req,res,next)=>{
        productController.updateProduct(req,res,next)
    })
    router.route('/delete/:id').delete((req,res,next)=>{
        productController.deleteProduct(req,res,next)
    })
    router.route('/upload/:id').post(dates.date,multerConf.uploads.array('files',10),(req,res,next)=>{
        productController.uploadProduct(req,res,next)
    })

    
    module.exports=router;