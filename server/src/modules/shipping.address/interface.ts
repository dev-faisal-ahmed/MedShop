import { Schema } from 'mongoose';

export type TShippingAddress = {
  _id: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  name: string;
  division: string;
  district: string;
  subDistrict: string;
  streetAddress: string;
  phone: string;
};
