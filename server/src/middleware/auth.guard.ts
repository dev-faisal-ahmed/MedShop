import { AppError } from '../utils';
import { tryCatch } from './try.catch';
import { User } from '../modules/user/model';
import { TLoggedUser } from '../global/types';
import { verifyAccessToken } from '../helpers';
import { TUserRole } from '../modules/user/interface';
import { JsonWebTokenError } from 'jsonwebtoken';

const BEARER = 'Bearer';

export const authGuard = (...requiredRoles: TUserRole[]) => {
  return tryCatch(async (req, _, next) => {
    const token = req.headers.authorization;
    if (!token) throw new AppError('No Token Found!', 404);

    const [bearer, authToken] = token.split(' ');
    if (bearer.toLocaleLowerCase() !== BEARER.toLowerCase())
      throw new AppError('Invalid token formate', 400);

    // decoding the token
    let decodedData: TLoggedUser;

    // managing token expiring
    try {
      decodedData = verifyAccessToken(authToken) as TLoggedUser;
      if (!decodedData) throw new AppError('Invalid accessToken', 401);

      const user = await User.findOne({ _id: decodedData._id });
      if (!user) throw new AppError('User not found, please login', 402);

      // checking roles
      if (requiredRoles && !requiredRoles.includes(user.role))
        throw new AppError('Unauthorized access', 400);

      req.user = user;
      next();
    } catch (error: any) {
      if (error instanceof JsonWebTokenError && error.message === 'jwt expired')
        throw new AppError('Access Token Expired', 401);
      throw new AppError(error?.message, 400);
    }
  });
};
