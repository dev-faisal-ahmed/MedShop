import { z } from 'zod';
import { dateGenerator, enumGenerator } from '../../helpers';

// sub schema
const productSubSchema = z.object({
  productId: z.string({ required_error: 'ProductId is required' }),
  variantId: z.string().optional(),
  quantity: z.number({ required_error: 'Product Quantity is required' }),
});

const addressSubSchema = z.object({
  division: z.string({ required_error: 'Division is required' }),
  district: z.string({ required_error: 'District is required' }),
  subDistrict: z.string({ required_error: 'SubDistricts is required' }),
  streetAddress: z.string({ required_error: 'StreetAddress is required' }),
  phone: z.string({ required_error: 'PhoneNumber is required' }),
});

// main schema
export const addOrderSchema = z.object({
  products: productSubSchema.array(),
  address: addressSubSchema,
  shippingCharge: z.number().min(0).optional(),
});
