import { Router } from 'express';
import { authGuard } from '../../middleware';
import { categoryController } from './controllers';

export const categoryRouter = Router();
export const categoriesRouter = Router();

// category
categoryRouter.post(
  '/primary',
  authGuard('SUPER_ADMIN'),
  categoryController.addPrimaryCategory
);

categoryRouter.post(
  '/secondary',
  authGuard('SUPER_ADMIN'),
  categoryController.addSecondaryCategory
);

categoryRouter.post(
  '/tertiary',
  authGuard('SUPER_ADMIN'),
  categoryController.addTertiaryCategory
);

categoryRouter.patch(
  '/:categoryId',
  authGuard('SUPER_ADMIN'),
  categoryController.updateCategory
);

categoryRouter.delete(
  '/:categoryId',
  authGuard('SUPER_ADMIN'),
  categoryController.deleteCategory
);

// categories
categoriesRouter.get('/', categoryController.getCategories);

categoriesRouter.get(
  '/admin',
  authGuard('ADMIN', 'SUPER_ADMIN'),
  categoryController.getCategoriesForAdmin
);
