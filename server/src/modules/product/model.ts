import { model, Schema } from 'mongoose';
import { TProduct } from './interface';
import { productStatuses } from './constant';

const productSchema = new Schema<TProduct>({
  name: { type: String, required: true },
  categoryId: { type: Schema.Types.ObjectId, required: true, ref: 'category' },
  description: { type: String, required: true },
  discount: { type: Number, max: 100 },
  images: { type: [String], required: true },
  metaKey: { type: String, required: true },
  price: { type: Number, required: true },
  slug: { type: String, required: true, unique: true },
  status: { type: String, enum: productStatuses, default: 'ACTIVE' },
  stockStatus: { type: Boolean, default: true },
  isDeleted: { type: Boolean, default: false },
});

export const Product = model<TProduct>('product', productSchema);
