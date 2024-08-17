import { sendSuccessResponse } from '../../../helpers';
import { tryCatch } from '../../../middleware';
import { Variant } from '../../variant/model';
import { Order } from '../model';
import { addOrderSchema } from '../validation';
import { Product } from '../../product/model';
import { AppError } from '../../../utils';

export const addOrder = tryCatch(async (req, res) => {
  // validation
  const payload = await addOrderSchema.parseAsync(req.body);

  if (!payload.products.length)
    throw new AppError('Please add some product first', 400);

  // calculating total cost
  let totalPrice = payload.shippingCharge || 0;

  for (const product of payload.products) {
    const { productId, quantity, variantId } = product;

    if (variantId) {
      // for variant
      const variantDetails = await Variant.findOne({ _id: variantId });
      if (!variantDetails) throw new AppError('Invalid VariantId', 400);

      totalPrice += quantity * variantDetails.price;
    } else {
      // if no variant
      const productDetails = await Product.findOne({ _id: productId });
      if (!productDetails) throw new AppError('Invalid ProductId', 400);
      totalPrice += quantity * productDetails.price;
    }
  }

  // creating order
  const order = await Order.create({ ...payload, totalPrice });

  sendSuccessResponse(res, {
    status: 200,
    message: 'Order added successfully',
    data: order,
  });
});
