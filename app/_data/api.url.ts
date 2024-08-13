import { IMGBB_API_KEY } from '../_config';

export const serverAddress = `http://localhost:5000/api/v1`;
export const apiUrl = {
  // auth
  register: `${serverAddress}/auth/register`,
  verifyUser: `${serverAddress}/auth/verify`,
  getVerifyToken: `${serverAddress}/auth/verify/resend`,
  login: `${serverAddress}/auth/login`,

  // image uploading
  imageBBUrl: `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
};
