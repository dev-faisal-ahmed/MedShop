import { sendSuccessResponse } from '../../../helpers';
import { tryCatch } from '../../../middleware';
import { Category } from '../model';
import { addPrimaryCategorySchema } from '../validation';

export const addPrimaryCategory = tryCatch(async (req, res) => {
  // validation
  const payload = await addPrimaryCategorySchema.parseAsync(req.body);

  // creating new primary category
  const category = await Category.create({ ...payload, type: 'PRIMARY' });

  sendSuccessResponse(res, {
    status: 200,
    message: 'Category created successfully',
    data: category,
  });
});
