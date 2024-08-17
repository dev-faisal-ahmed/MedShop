import { sendSuccessResponse } from '../../../helpers';
import { tryCatch } from '../../../middleware';
import { ShippingAddress } from '../model';
import { addShippingAddressSchema } from '../validation';

export const addShippingAddress = tryCatch(async (req, res) => {
  // validation
  const payload = await addShippingAddressSchema.parseAsync(req.body);
  const user = req.user;
  const userId = user._id;

  const shippingAddress = await ShippingAddress.create({ ...payload, userId });

  sendSuccessResponse(res, {
    status: 200,
    message: 'Address is created',
    data: shippingAddress,
  });
});
