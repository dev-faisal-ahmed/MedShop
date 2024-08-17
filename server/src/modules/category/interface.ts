import { Schema } from 'mongoose';

export type TCategoryType = 'PRIMARY' | 'SECONDARY' | 'TERTIARY';
export type TCategory = {
  _id: Schema.Types.ObjectId;
  primaryCategoryId: Schema.Types.ObjectId;
  secondaryCategoryId: Schema.Types.ObjectId;
  name: string;
  slug: string;
  thumbnail: string;
  type: TCategoryType;
  isDeleted: boolean;
};
