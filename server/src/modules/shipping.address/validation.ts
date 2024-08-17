import { z } from 'zod';

export const addShippingAddressSchema = z.object({
  name: z.string({ required_error: 'AddressName is required' }),
  division: z.string({ required_error: 'Division is required' }),
  district: z.string({ required_error: 'District is required' }),
  subDistrict: z.string({ required_error: 'SubDistricts is required' }),
  streetAddress: z.string({ required_error: 'StreetAddress is required' }),
  phone: z.string({ required_error: 'PhoneNumber is required' }),
});
