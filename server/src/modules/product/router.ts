import { Router } from 'express';
import { authGuard } from '../../middleware';
import { productController } from './controllers';

export const productRouter = Router();
export const productsRouter = Router();

// products
productRouter.post(
  '/',
  authGuard('SUPER_ADMIN', 'ADMIN'),
  productController.addProduct
);

// products
productsRouter.get('/', productController.getProducts);
