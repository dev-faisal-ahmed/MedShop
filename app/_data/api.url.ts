import { IMGBB_API_KEY } from '../_config';

export const serverAddress = `http://localhost:5000/api/v1`;
export const apiUrl = {
  register: `${serverAddress}/auth/register`,
  // image uploading
  imageBBUrl: `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
};
