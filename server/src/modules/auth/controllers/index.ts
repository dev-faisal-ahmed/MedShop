import { login } from './login';
import { register } from './register';
import { verifyEmail } from './verify.email';
import { getAccessToken } from './get.access.token';
import { resendVerificationCode } from './resend.verification.code';

export const authController = {
  login,
  register,
  verifyEmail,
  getAccessToken,
  resendVerificationCode,
};
