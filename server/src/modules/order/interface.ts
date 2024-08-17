import { Schema } from 'mongoose';
import { TShippingAddress } from '../shipping.address/interface';

export type TOrderStatus = 'PENDING' | 'DELIVERED' | 'CANCEL';
export type TOrderAddress = Omit<TShippingAddress, '_id' | 'name' | 'userId'>;

export type TOrderProduct = {
  productId: Schema.Types.ObjectId;
  quantity: number;
  variantId?: Schema.Types.ObjectId;
};

export type TOrder = {
  _id: Schema.Types.ObjectId;
  products: TOrderProduct[];
  status: TOrderStatus;
  orderedAt: Date;
  address: TOrderAddress;
  shippingCharge: number;
  totalPrice: number;
};
