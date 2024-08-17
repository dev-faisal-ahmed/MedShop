import { model, Schema } from 'mongoose';
import { orderStatuses } from './constant';
import { TOrder, TOrderAddress, TOrderProduct } from './interface';

const productSubSchema = new Schema<TOrderProduct>({
  productId: { type: Schema.Types.ObjectId, required: true, ref: 'product' },
  variantId: { type: Schema.Types.ObjectId, ref: 'variant' },
  quantity: { type: Number, required: true, min: 0 },
});

const addressSubSchema = new Schema<TOrderAddress>({
  division: { type: String, required: true },
  district: { type: String, required: true },
  subDistrict: { type: String, required: true },
  streetAddress: { type: String, required: true },
  phone: { type: String, required: true },
});

const orderSchema = new Schema<TOrder>({
  products: { type: [productSubSchema], required: true },
  address: { type: addressSubSchema, required: true },
  orderedAt: { type: Date, default: new Date() },
  status: { type: String, enum: orderStatuses, default: 'PENDING' },
  shippingCharge: { type: Number, default: 0, min: 0 },
  totalPrice: { type: Number, required: true, min: 0 },
});

export const Order = model<TOrder>('order', orderSchema);
