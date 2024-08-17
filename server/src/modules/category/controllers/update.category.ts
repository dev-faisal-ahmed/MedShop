import { isEmptyObject, sendSuccessResponse } from '../../../helpers';
import { tryCatch } from '../../../middleware';
import { AppError } from '../../../utils';
import { Category } from '../model';
import { updateCategorySchema } from '../validation';

export const updateCategory = tryCatch(async (req, res) => {
  // validation
  const payload = await updateCategorySchema.parseAsync(req.body);
  const { categoryId } = req.params;

  if (isEmptyObject(payload)) throw new AppError('Nothing to update', 400);

  const category = await Category.findOneAndUpdate(
    { _id: categoryId },
    { $set: payload },
    { runValidators: true, new: true }
  );

  sendSuccessResponse(res, {
    status: 200,
    message: 'Category updated',
    data: category,
  });
});
