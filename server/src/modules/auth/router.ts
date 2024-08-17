import { Router } from 'express';
import { authController } from './controllers';

export const authRouter = Router();

authRouter.post('/login', authController.login);
authRouter.post('/register', authController.register);
authRouter.post('/verify', authController.verifyEmail);
authRouter.post('/access-token', authController.getAccessToken);
authRouter.post('/verify/resend', authController.resendVerificationCode);
