import { sendSuccessResponse } from '../../../helpers';
import { tryCatch } from '../../../middleware';
import { addProductSchema } from '../validation';
import { Product } from '../model';

export const addProduct = tryCatch(async (req, res) => {
  // validation
  const payload = await addProductSchema.parseAsync(req.body);

  // creating product
  const product = await Product.create(payload);

  sendSuccessResponse(res, {
    status: 200,
    message: 'Product created successfully',
    data: product,
  });
});
