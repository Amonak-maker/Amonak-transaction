
const Product=require('../models/product');
const Files=require('../models/file')



//Create One Product
exports.createProduct=function (req,res,next){
    const code_product=req.body.code_product;
    const nom_product=req.body.nom_product;
    const description=req.body.description;
    const prix=req.body.prix;
    const prod_categorie=req.body.prod_categorie;
    const newProduct =new Product({
        code_product,
        nom_product,
        description,
        prix,
        prod_categorie
    })
    newProduct.save()
        .then((products)=>{
            res.json(products)
        })
        .catch(err => res.status(400).json('Error'+err))

}
//Read All Categories
exports.getallProduct=function (req,res,next){
    Product.find()
        .then(products=> res.json(products))
        .catch(err=> res.status(400).json('Error'+err))
}
//Read One Product By ID
exports.getoneProduct=function (req,res,next){
    Product.findById(req.params.id)
        .then(products=>res.json(products))
        .catch(err=> res.status(400).json('Error'+err))    
}
//Update One Product By ID
exports.updateProduct=function(req,res,next){
    const code_product=req.body.code_product;
    const nom_product=req.body.nom_product;
    const description=req.body.description;
    const prix=req.body.prix;
    const prod_categorie=req.body.prod_categorie;
    Product.findOneAndUpdate(req.params.id)
        .then(products=>{
            if(code_product){
                products.set('code_product',code_product)
            }
            if(nom_product){
                products.set('nom_product',nom_product) 
            }
            if(description){
                products.set('description',description) 
            }
            if(prix){
                products.set('prix',prix) 
            }
            if(prod_categorie){
                products.set('prod_categorie',prod_categorie) 
            }
            products.save()
            res.json(products)
        })
        .catch(err=>res.status(400).json('Error'+err))
}
//Delete One Product By ID
exports.deleteProduct=function(req,res,next){
    Product.findByIdAndDelete(req.params.id)
        .then(()=>res.json('product deleted.'))
        .catch(err=> res.status(400).json('Error'+err))
}


//Multiple files upload
exports.uploadProduct=function(req,res,next){
    const files=req.files
    if(!files){
        res.status(400).json('please upload one file please')
    }
    var i
    for(i=0;i<files.length;i++){
        
        if(files[i].mimetype.indexOf('image')==-1){
            res.status(401).json('file not good')
        }
    }
    Product.findByIdAndUpdate(req.params.id)
        .then(product=>{
            var compteur;
            var file=[]
            for(compteur=0;compteur<files.length;compteur++){
                const originalname=files[compteur].originalname
                const mimetype=files[compteur].mimetype
                const encoding=files[compteur].encoding
                const createdAt=req.requestTime
                
            
                                const newFiles=new Files({
                                    originalname,
                                    mimetype,
                                    encoding,
                                    createdAt
                                })
                                file.push(newFiles._id)
                                newFiles.save()
                               
                
            }
           
            product.image_Product=product.image_Product.concat(file)
            product.save()
                .then((product)=>res.json(product.image_Product))
                .catch((err)=> {res.status(400).json('Error'+err)})
        })
        .catch(err=>res.status(400).json('Error'+err))

}