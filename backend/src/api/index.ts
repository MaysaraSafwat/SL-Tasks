import express from 'express';
import ProductsRouter from './products/Products.routes';

const router = express.Router();

// router.get('/', (req, res) => {
//   res.json({
//     message: 'API - 👋🌎',
//   });
// });

router.use('/products', ProductsRouter);

export default router;