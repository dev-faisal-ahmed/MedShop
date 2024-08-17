import { Model, Schema } from 'mongoose';

export type TUserRole = 'SUPER_ADMIN' | 'ADMIN' | 'USER';
export type TUser = {
  _id: Schema.Types.ObjectId;
  name: string;
  image: string;
  email: string;
  password: string;
  role: TUserRole;
  isVerified: boolean;
};
