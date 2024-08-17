import { Schema } from 'mongoose';

export type TProductStatus = 'ACTIVE' | 'INACTIVE';
export type TProductVariant = {
  name: string;
  price: string;
};

export type TProduct = {
  _id: Schema.Types.ObjectId;
  categoryId: Schema.Types.ObjectId;
  name: string;
  slug: string;
  images: string[];
  description: string;
  metaKey: string;
  price: number;
  discount?: number;
  stockStatus: boolean;
  status: TProductStatus;
  isDeleted: boolean;
};
