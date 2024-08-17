import { categoryTypes } from './constant';
import { TCategory } from './interface';
import { model, Schema } from 'mongoose';

const categorySchema = new Schema<TCategory>({
  name: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true },
  thumbnail: { type: String, required: true },
  type: { type: String, enum: categoryTypes, required: true },

  primaryCategoryId: {
    type: Schema.Types.ObjectId,
    ref: 'category',
  },

  secondaryCategoryId: {
    type: Schema.Types.ObjectId,
    ref: 'category',
  },
  isDeleted: { type: Boolean, default: false },
});

export const Category = model<TCategory>('category', categorySchema);
