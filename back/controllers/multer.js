
const multer=require('multer')

//multer config

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
  })
exports.uploads = multer({ storage: storage })