import { z } from 'zod';

export const addVariantSchema = z.object({
  name: z.string({ required_error: 'VariantName is required' }),
  price: z.number({ required_error: 'Price is required' }).min(0),
  productId: z.string({ required_error: 'ProductId is required' }),
});
