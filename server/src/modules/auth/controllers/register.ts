import {
  encryptPassword,
  sendSuccessResponse,
  sendVerificationCode,
} from '../../../helpers';
import { tryCatch } from '../../../middleware';
import { AppError } from '../../../utils';
import { User } from '../../user/model';
import { registerSchema } from '../validation';

export const register = tryCatch(async (req, res) => {
  // validation
  const payload = await registerSchema.parseAsync(req.body);

  // hashing password
  const password = await encryptPassword(payload.password);

  // creating user
  const user = await User.create({ ...payload, password });
  if (!user) throw new AppError('Failed to create user!', 400);

  // generating verification token and codes and sending to the user
  const { email, name } = payload;
  const verificationToken = await sendVerificationCode(email, name);

  sendSuccessResponse(res, {
    status: 200,
    message: 'User created, check email to verify',
    data: { verificationToken },
  });
});
