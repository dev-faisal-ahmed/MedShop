import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string({ required_error: 'Name is required' }),
  image: z.string({ required_error: 'Image is required' }),
  email: z
    .string({ required_error: 'Email is Required' })
    .email({ message: 'Invalid Message' }),
  password: z.string({ required_error: 'Password is required' }),
});

export const verifyEmailSchema = z.object({
  verificationToken: z.string({ required_error: 'Token is required' }),
  code: z.string({ required_error: 'Verification code is required' }),
});

export const resendVerificationCodeSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Invalid Email' }),
});

export const loginSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Invalid Email' }),
  password: z.string({ required_error: 'Password is required' }),
});

export const getAccessTokenSchema = z.object({
  refreshToken: z.string({ required_error: 'RefreshToken is required' }),
});
