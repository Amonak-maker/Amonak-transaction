const Publication=require('../models/publication');
const Files=require('../models/file');

//Create One Publication
exports.createPublication=function(req,res,next){
    const id_pub=req.body.id_pub;
    const type=req.body.type;
    const contenu=req.body.contenu;
    const date=req.requestTime;
    const pub_product=req.body.pub_product;
    const newPublication =new Publication({
        id_pub,
        type,
        contenu,
        date,
        pub_product
    })
    newPublication.save()
        .then((publications)=>{
            res.json(publications)
        })
        .catch(err => res.status(400).json('Error'+err))

}
//Read All publication
exports.getallPublication=function(req,res,next){
    Publication.find()
        .then(publications=> res.json(publications))
        .catch(err=> res.status(400).json('Error'+err))
}
//Read One Publication By ID
exports.getonePublication=function(req,res,next){
    Publication.findById(req.params.id)
        .then(publications=>res.json(publications))
        .catch(err=> res.status(400).json('Error'+err))    
}
//Update One publication By ID
exports.updatePublication=function(req,res,next){
    const id_pub=req.body.id_pub;
    const type=req.body.type;
    const contenu=req.body.contenu;
    const date=req.requestTime;
    const pub_product=req.body.pub_product;
    Publication.findOneAndUpdate(req.params.id)
        .then(publications=>{
            if(id_pub){
                publications.set('id_pub',id_pub)
            }
            if(type){
                publications.set('type',type) 
            }
            if(contenu){
                publications.set('contenu',contenu) 
            }
            if(date){
                publications.set('date',date) 
            }
            if(pub_product){
                publications.set('pub_product',pub_product) 
            }
            publications.save()
            res.json(publications)
        })
        .catch(err=>res.status(400).json('Error'+err))
}
//Delete One publications By ID
exports.deletePublication=function(req,res,next){
    Publication.findByIdAndDelete(req.params.id)
        .then(()=>res.json('publication deleted.'))
        .catch(err=> res.status(400).json('Error'+err))
}
//Multiple files upload
exports.uploadPublication=function(req,res,next){
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
    Publication.findByIdAndUpdate(req.params.id)
        .then(publication=>{
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
           
            publication.image=publication.image.concat(file)
            publication.save()
                .then((publication)=>res.json(publication.image))
                .catch((err)=> {res.status(400).json('Error'+err)})
        })
        .catch(err=>res.status(400).json('Error'+err))


}