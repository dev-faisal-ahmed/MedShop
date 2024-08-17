import { sendSuccessResponse, sendVerificationCode } from '../../../helpers';
import { tryCatch } from '../../../middleware';
import { AppError } from '../../../utils';
import { User } from '../../user/model';
import { resendVerificationCodeSchema } from '../validation';

export const resendVerificationCode = tryCatch(async (req, res) => {
  // validation
  const { email } = await resendVerificationCodeSchema.parseAsync(req.body);

  // finding user
  const user = await User.findOne({ email });
  if (!user) throw new AppError('User not found', 404);

  // already verified
  if (user.isVerified) throw new AppError('Already Verified', 400);

  const verificationToken = await sendVerificationCode(email, user.name);

  sendSuccessResponse(res, {
    status: 200,
    message: 'Verification code has been sent',
    data: { verificationToken },
  });
});
