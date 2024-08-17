import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export const NODE_ENV = process.env.NODE_ENV;
export const MONGO_URI = process.env.MONGO_URI;
export const PORT = process.env.PORT;
export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
export const VERIFICATION_TOKEN_SECRET = process.env.VERIFICATION_TOKEN_SECRET;
export const BCRYPT_SALT = Number(process.env.BCRYPT_SALT);
export const SUPER_ADMIN_NAME = process.env.SUPER_ADMIN_NAME;
export const SUPER_ADMIN_EMAIL = process.env.SUPER_ADMIN_EMAIL;
export const SUPER_ADMIN_PASSWORD = process.env.SUPER_ADMIN_PASSWORD;
export const GMAIL_ID = process.env.GMAIL_ID;
export const GMAIL_PASS = process.env.GMAIL_PASS;
