import {
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
  VERIFICATION_TOKEN_SECRET,
} from '../config';
import jwt from 'jsonwebtoken';
import { TLoggedUser } from '../global/types';

export const generateVerificationToken = (email: string, code: string) => {
  const verificationToken = jwt.sign(
    { email, code },
    VERIFICATION_TOKEN_SECRET!,
    { expiresIn: '60s' }
  );

  return verificationToken;
};

export const generateAccessToken = (payload: TLoggedUser) => {
  const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET!, {
    expiresIn: '120s',
  });
  return accessToken;
};

export const generateRefreshToken = (email: string) => {
  const refreshToken = jwt.sign({ email }, REFRESH_TOKEN_SECRET!, {
    expiresIn: '1d',
  });
  return refreshToken;
};

export const verifyAccessToken = (token: string) => {
  const decodedData = jwt.verify(token, ACCESS_TOKEN_SECRET!);
  return decodedData;
};

export const verifyRefreshToken = (token: string) => {
  const decodedData = jwt.verify(token, REFRESH_TOKEN_SECRET!);
  return decodedData as { email: string };
};
