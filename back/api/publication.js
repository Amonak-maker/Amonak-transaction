const router =require('express').Router();
const publicationController=require('../controllers/publication')
const dates=require('../controllers/date')
const multerConf=require('../controllers/multer')


    router.route('/create').post(dates.date,(req,res,next)=>{
        publicationController.createPublication(req,res,next)
    })
    router.route('/getall').get((req,res,next)=>{
        publicationController.getallPublication(req,res,next)
    })
    router.route('/getOne/:id').get((req,res,next)=>{
        publicationController.getonePublication(req,res,next)
    })
    router.route('/update_categorie/:id').post(dates.date,(req,res,next)=>{
        publicationController.updatePublication(req,res,next)
    })
    router.route('/delete/:id').delete((req,res,next)=>{
        publicationController.deletePublication(req,res,next)
    })
    router.route('/upload/:id').post(dates.date,multerConf.uploads.array('files',10),(req,res,next)=>{
        publicationController.uploadPublication(req,res,next)
    })

    module.exports=router;

