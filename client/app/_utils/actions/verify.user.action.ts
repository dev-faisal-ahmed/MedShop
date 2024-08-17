'use server';

import { apiUrl } from '@/app/_data';
import { fetchOption } from '../helpers';

// verify user
type TVerifyUserPayload = { code: string; verificationToken: string };

export const verifyUserAction = async (payload: TVerifyUserPayload) => {
  const response = await fetch(
    apiUrl.verifyUser,
    fetchOption({ method: 'POST', body: payload }),
  );

  const data = await response.json();
  return data;
};
