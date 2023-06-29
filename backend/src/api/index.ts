import express from 'express';
import ProductsRouter from './products/Products.routes';
import { upload } from '../middlewares/ImgUploadMiddleware';

const router = express.Router();

router.post("/upload", upload.single('image'), (req,res)=>{
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