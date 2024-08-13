import { jwtDecode, JwtPayload } from 'jwt-decode';

export const tokenKeys = {
  verificationToken: 'verification_token',
  accessToken: 'accessToken',
  refreshToken: 'refreshToken',
};

export const setVerificationToken = (token: string) => {
  localStorage.setItem(tokenKeys.verificationToken, token);
};

export const getVerificationToken = () => {
  if (typeof window === 'undefined') return null;
  const token = localStorage.getItem(tokenKeys.verificationToken);
  return token;
};

export const decodeVerificationToken = () => {
  const token = getVerificationToken();
  if (!token) return null;
  const decodedData = jwtDecode(token);
  return decodedData as JwtPayload & { email: string };
};

export const removeVerificationToken = () => {
  localStorage.removeItem(tokenKeys.verificationToken);
};
