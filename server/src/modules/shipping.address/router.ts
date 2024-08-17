import { Router } from 'express';
import { authGuard } from '../../middleware';
import { shippingAddressController } from './controllers';

export const shippingAddressRouter = Router();

shippingAddressRouter.post(
  '/',
  authGuard('USER'),
  shippingAddressController.addShippingAddress
);
