import { sendSuccessResponse } from '../../../helpers';
import { tryCatch } from '../../../middleware';
import { Category } from '../model';
import { addSecondaryCategorySchema } from '../validation';

export const addSecondaryCategory = tryCatch(async (req, res) => {
  // validation
  const payload = await addSecondaryCategorySchema.parseAsync(req.body);

  const category = await Category.create({ ...payload, type: 'SECONDARY' });

  sendSuccessResponse(res, {
    status: 200,
    message: 'Category created successfully',
    data: category,
  });
});
