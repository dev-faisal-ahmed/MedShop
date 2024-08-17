import { Router } from 'express';
import { authGuard } from '../../middleware';
import { variantController } from './controllers';

export const variantRouter = Router();

variantRouter.post(
  '/',
  authGuard('SUPER_ADMIN', 'ADMIN'),
  variantController.addVariant
);
