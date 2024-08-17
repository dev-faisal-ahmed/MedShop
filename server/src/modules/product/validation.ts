import { z } from 'zod';

export const addProductSchema = z.object({
  name: z.string({ required_error: 'Product name is required' }),
  categoryId: z.string({ required_error: 'CategoryId is required' }),
  description: z.string({ required_error: 'Description is required' }),
  images: z.string({ required_error: 'Images is required' }).array(),
  metaKey: z.string({ required_error: 'MetaKeys is required' }),
  price: z.number({ required_error: 'price is required' }),
  slug: z.string({ required_error: 'Slug is required' }),
  discount: z.number().optional(),
});
