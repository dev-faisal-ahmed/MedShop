import { sendSuccessResponse } from '../../../helpers';
import { tryCatch } from '../../../middleware';
import { Variant } from '../model';
import { addVariantSchema } from '../validation';

export const addVariant = tryCatch(async (req, res) => {
  // validation
  const payload = await addVariantSchema.parseAsync(req.body);

  // creating new variant
  const variant = await Variant.create(payload);

  sendSuccessResponse(res, {
    status: 200,
    message: 'Variant added successfully',
    data: variant,
  });
});
