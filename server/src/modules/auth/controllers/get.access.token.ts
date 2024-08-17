import {
  generateAccessToken,
  sendSuccessResponse,
  verifyRefreshToken,
} from '../../../helpers';
import { tryCatch } from '../../../middleware';
import { AppError } from '../../../utils';
import { User } from '../../user/model';
import { getAccessTokenSchema } from '../validation';

export const getAccessToken = tryCatch(async (req, res) => {
  // validation
  const payload = await getAccessTokenSchema.parseAsync(req.body);

  // verify token
  const decodedData = verifyRefreshToken(payload.refreshToken);
  if (!decodedData) throw new AppError('Invalid token!', 400);

  // retrieving user info from db
  const { email } = decodedData;
  const user = await User.findOne({ email });

  // incase user not found in db
  if (!user) throw new AppError('User not found', 404);

  // generating access token
  const { _id, name, image, role, isVerified } = user;
  const accessToken = generateAccessToken({
    _id,
    name,
    email,
    image,
    role,
    isVerified,
  });

  sendSuccessResponse(res, {
    status: 200,
    message: 'AccessToken generated successfully',
    data: { accessToken },
  });
});
