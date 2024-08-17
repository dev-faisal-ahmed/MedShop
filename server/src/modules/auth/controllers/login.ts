import {
  comparePassword,
  generateAccessToken,
  generateRefreshToken,
  sendSuccessResponse,
} from '../../../helpers';
import { tryCatch } from '../../../middleware';
import { AppError } from '../../../utils';
import { User } from '../../user/model';
import { loginSchema } from '../validation';

export const login = tryCatch(async (req, res) => {
  // validation
  const payload = await loginSchema.parseAsync(req.body);
  const { email, password } = payload;

  const user = await User.findOne({ email });
  // no user found with the email
  if (!user) throw new AppError('Invalid credentials', 400);

  const isPasswordMatch = await comparePassword(password, user.password);
  // password does not match
  if (!isPasswordMatch) throw new AppError('Invalid credentials', 400);

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

  // generating refresh token
  const refreshToken = generateRefreshToken(email);

  sendSuccessResponse(res, {
    status: 200,
    message: 'Login successful',
    data: { accessToken, refreshToken },
  });
});
