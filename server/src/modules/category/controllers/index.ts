import { addSecondaryCategory } from './add.secondary.category';
import { addTertiaryCategory } from './add.tertiary.category';
import { addPrimaryCategory } from './add.primary.category';
import { deleteCategory } from './delete.category';
import { getCategories } from './get.categories';
import { updateCategory } from './update.category';
import { getCategoriesForAdmin } from './get.categories.for.admin';

export const categoryController = {
  getCategoriesForAdmin,
  addPrimaryCategory,
  addSecondaryCategory,
  addTertiaryCategory,
  getCategories,
  updateCategory,
  deleteCategory,
};
