import { jwtDecode, JwtPayload } from 'jwt-decode';

export const tokenKeys = {
  verificationToken: 'verification_token',
  accessToken: 'accessToken',
  refreshToken: 'refreshToken',
};

export const setVerificationToken = (token: string | undefined) => {
  if (token) localStorage.setItem(tokenKeys.verificationToken, token);
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

export const setAccessToken = (token: string | undefined) => {
  if (token) localStorage.setItem(tokenKeys.accessToken, token);
};

export const getAccessToken = () => {
  if (typeof window === 'undefined') return null;
  const token = localStorage.getItem(tokenKeys.accessToken);
  return token;
};

export const setRefreshToken = (token: string | undefined) => {
  if (token) localStorage.setItem(tokenKeys.refreshToken, token);
};
