import { Router } from 'express';
import * as ProductsController from './Products.controller';
import { Product , ProductWithId} from './Products.model';
import validateRequest from '../../middlewares/validateRequestMiddleware'
import {ParamsId }from "../../interfaces/ParamId"

const ProductsRouter = Router();

ProductsRouter.get('/', ProductsController.getAllProducts);

ProductsRouter.post( '/', validateRequest({ body: Product,}), ProductsController.createProduct);

ProductsRouter.get('/:id', validateRequest({params: ParamsId, }), ProductsController.getProduct );

ProductsRouter.put('/:id', validateRequest({ params: ParamsId, body: Product,}), ProductsController.updateProduct,);

ProductsRouter.delete('/:id',validateRequest({ params: ParamsId, }), ProductsController.deleteProduct);

export default ProductsRouter;

