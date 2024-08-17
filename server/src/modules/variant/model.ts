import { model, Schema } from 'mongoose';
import { TVariant } from './interface';

const variantSchema = new Schema<TVariant>({
  productId: { type: Schema.Types.ObjectId, required: true, ref: 'product' },
  name: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  isDeleted: { type: Boolean, default: false },
});

variantSchema.index({ name: 1, productId: 1 }, { unique: true });

export const Variant = model<TVariant>('variant', variantSchema);
