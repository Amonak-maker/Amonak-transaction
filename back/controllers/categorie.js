const Categorie=require('../models/categorie');


//Create One Categorie

exports.createCategorie=function(req,res,next){
    const nom_cat=req.body.nom_cat;
    const description_cat=req.body.description_cat;
    const newCategorie =new Categorie({
        nom_cat,
        description_cat
    })
    newCategorie.save()
        .then((categories)=>{
            res.json(categories)
        })
        .catch(err => res.status(400).json('Error'+err))

}

//Read All Categories
exports.getallCategorie=function(req,res,next){
    Categorie.find()
        .then(categories=> res.json(categories))
        .catch(err=> res.status(400).json('Error'+err))
}
//Read One Categorie By ID
exports.getoneCategorie=function(req,res,next){
    Categorie.findById(req.params.id)
        .then(categories=>res.json(categories))
        .catch(err=> res.status(400).json('Error'+err))
        
}

//Update One Ctegorie By ID
exports.updateCategorie=function (req,res,next){
    const nom_cat=req.body.nom_cat;
    const description_cat=req.body.description_cat;
    Categorie.findOneAndUpdate(req.params.id)
        .then(categories=>{
            if(nom_cat){
                categories.set('nom_cat',nom_cat)
            }
            if(description_cat){
                categories.set('description_cat',description_cat) 
            }
            categories.save()
            res.json(categories)
        })
        .catch(err=>res.status(400).json('Error'+err))
}

//Delete One Categorie By ID
exports.deleteCategorie=function (req,res,next){
    Categorie.findByIdAndDelete(req.params.id)
        .then(()=>res.json('categorie deleted.'))
        .catch(err=> res.status(400).json('Error'+err))
}