import { Schema } from 'mongoose';

export type TVariant = {
  _id: Schema.Types.ObjectId;
  productId: Schema.Types.ObjectId;
  name: string;
  price: number;
  isDeleted: boolean;
};
