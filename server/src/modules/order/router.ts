import { Router } from 'express';
import { authGuard } from '../../middleware';
import { orderController } from './controllers';

export const orderRouter = Router();

orderRouter.post('/', authGuard('USER'), orderController.addOrder);
