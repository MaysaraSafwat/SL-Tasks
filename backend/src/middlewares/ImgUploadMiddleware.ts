import multer from "multer";
import path from "path";;



 const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    const imgName = file.fieldname + "-" + uniqueSuffix;
    req.body.image = imgName;
    cb(null, imgName);
  },

});



export const upload = multer({ storage: storage });