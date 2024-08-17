import { Schema, model } from 'mongoose';
import { TUser } from './interface';
import { userRoles } from './constants';

const userSchema = new Schema<TUser>(
  {
    name: { type: String, required: true },
    image: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: userRoles, default: 'USER' },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const User = model<TUser>('user', userSchema);
