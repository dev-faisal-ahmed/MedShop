import { sendSuccessResponse } from '../../../helpers';
import { tryCatch } from '../../../middleware';
import { AppError } from '../../../utils';
import { Category } from '../model';

export const deleteCategory = tryCatch(async (req, res) => {
  const { categoryId } = req.params;

  // deleting category
  const deletedStatus = await Category.updateOne(
    { _id: categoryId },
    { $set: { isDeleted: true } }
  );

  if (!deletedStatus.acknowledged)
    throw new AppError('Failed to delete category', 400);

  sendSuccessResponse(res, {
    status: 200,
    message: 'Category deleted successfully',
    data: null,
  });
});
