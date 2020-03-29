const router = require('express').Router();

const categorieController=require('../controllers/categorie')

    router.post('/create',(req,res,next)=>{
        categorieController.createCategorie(req,res,next)
    })
    router.get('/getall',(req,res,next)=>{
        categorieController.getallCategorie(req,res,next)
    })
    router.get('/getOne/:id',(req,res,next)=>{
        categorieController.getoneCategorie(req,res,next)
    })
    router.post('/update_categorie/:id',(req,res,next)=>{
        categorieController.updateCategorie(req,res,next)
    })
    router.delete('/delete/:id',(req,res,next)=>{
        categorieController.deleteCategorie(req,res,next)
    })

module.exports=router;




