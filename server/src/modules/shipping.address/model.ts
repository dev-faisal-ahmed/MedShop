import { model, Schema } from 'mongoose';
import { TShippingAddress } from './interface';

const shippingAddressSchema = new Schema<TShippingAddress>({
  userId: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
  name: { type: String, required: true },
  district: { type: String, required: true },
  division: { type: String, required: true },
  streetAddress: { type: String, required: true },
  subDistrict: { type: String, required: true },
  phone: { type: String, required: true },
});

shippingAddressSchema.index({ name: 1, userId: 1 }, { unique: true });

export const ShippingAddress = model<TShippingAddress>(
  'shipping-address',
  shippingAddressSchema
);
