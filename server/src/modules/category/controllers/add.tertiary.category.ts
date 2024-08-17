import { sendSuccessResponse } from '../../../helpers';
import { tryCatch } from '../../../middleware';
import { Category } from '../model';
import { addTertiaryCategorySchema } from '../validation';

export const addTertiaryCategory = tryCatch(async (req, res) => {
  // validation
  const payload = await addTertiaryCategorySchema.parseAsync(req.body);

  // creating category
  const category = await Category.create({ ...payload, type: 'TERTIARY' });

  sendSuccessResponse(res, {
    status: 200,
    message: 'Category created successfully',
    data: category,
  });
});
