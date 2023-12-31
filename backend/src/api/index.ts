import express from 'express';
import ProductsRouter from './products/Products.routes';
import { upload } from '../middlewares/ImgUploadMiddleware';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

router.post("/upload", authMiddleware,upload.single('image'), (req,res)=>{
    let data={
        image:req.body.image
    }
    res.json({
           message: 'image created!',
           data
          });
})
router.use('/products', ProductsRouter);


export default router;