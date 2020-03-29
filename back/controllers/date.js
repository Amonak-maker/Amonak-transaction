//middlware for the DATE
exports.date=function (req,res,next){
    req.requestTime=new Date().toISOString()
    next()
}