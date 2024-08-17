import { Router } from 'express';
import { authRouter } from '../modules/auth/router';
import { orderRouter } from '../modules/order/router';
import { variantRouter } from '../modules/variant/router';
import { productRouter, productsRouter } from '../modules/product/router';
import { shippingAddressRouter } from '../modules/shipping.address/router';
import { categoriesRouter, categoryRouter } from '../modules/category/router';

export const appRouter = Router();

// all routes
appRouter.use('/auth', authRouter);
appRouter.use('/order', orderRouter);
appRouter.use('/product', productRouter);
appRouter.use('/products', productsRouter);
appRouter.use('/variant', variantRouter);
appRouter.use('/category', categoryRouter);
appRouter.use('/categories', categoriesRouter);
appRouter.use('/shipping-address', shippingAddressRouter);
