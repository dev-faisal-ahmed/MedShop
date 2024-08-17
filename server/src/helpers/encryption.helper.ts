import bcrypt from 'bcrypt';
import { BCRYPT_SALT } from '../config';

export const encryptPassword = async (password: string) => {
  const encryptedPassword = await bcrypt.hash(password, BCRYPT_SALT);
  return encryptedPassword;
};

export const comparePassword = async (
  password: string,
  hashedPassword: string
) => {
  const isPasswordMatch = await bcrypt.compare(password, hashedPassword);
  return isPasswordMatch;
};
