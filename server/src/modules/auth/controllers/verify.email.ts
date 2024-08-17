import jwt from 'jsonwebtoken';
import { VERIFICATION_TOKEN_SECRET } from '../../../config';
import { tryCatch } from '../../../middleware';
import { verifyEmailSchema } from '../validation';
import { AppError } from '../../../utils';
import { User } from '../../user/model';
import { sendSuccessResponse } from '../../../helpers';

// type for decoded data from token
type TPayload = { email: string; code: string };

export const verifyEmail = tryCatch(async (req, res) => {
  // validation
  const payload = await verifyEmailSchema.parseAsync(req.body);
  const { code, verificationToken } = payload;

  // parsing the token
  const decodedData = jwt.verify(
    verificationToken,
    VERIFICATION_TOKEN_SECRET!
  ) as TPayload;

  if (!decodedData) throw new AppError('Invalid Verification Token', 400);

  const { email, code: decodedCode } = decodedData;

  // finding user by email
  const user = await User.findOne({ email });

  // if user does not exist
  if (!user) throw new AppError('You account does not exist', 404);
  // if user already verified
  if (user.isVerified) throw new AppError('You are already verified', 400);

  // checking code
  if (code !== decodedCode) throw new AppError('Wrong code', 400);

  const result = await User.updateOne(
    { email },
    { $set: { isVerified: true } }
  );

  if (!result.acknowledged) throw new AppError('Failed to verify', 400);

  sendSuccessResponse(res, {
    status: 200,
    message: 'You email is verified',
    data: null,
  });
});
