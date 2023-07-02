import { Router } from 'express';
import * as ProductsController from './Products.controller';
import { Product , ProductWithId} from './Products.model';
import validateRequest from '../../middlewares/validateRequestMiddleware'
import {ParamsId }from "../../interfaces/ParamId"
import {upload }from "../../middlewares/ImgUploadMiddleware"
import { authMiddleware } from '../../middlewares/authMiddleware';

const ProductsRouter = Router();

ProductsRouter.get('/',authMiddleware, ProductsController.getAllProducts);

ProductsRouter.post( '/', authMiddleware,validateRequest({body: Product}), ProductsController.createProduct);

ProductsRouter.get('/:id',authMiddleware, validateRequest({params: ParamsId, }), ProductsController.getProduct );

ProductsRouter.put('/:id',authMiddleware, validateRequest({ params: ParamsId, body: Product,}), ProductsController.updateProduct,);

ProductsRouter.delete('/:id',authMiddleware,validateRequest({ params: ParamsId, }), ProductsController.deleteProduct);

export default ProductsRouter;

