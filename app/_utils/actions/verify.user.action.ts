'use server';

import { apiUrl } from '@/app/_data';
import { fetchOption } from '@/app/_utils/helpers';

type TPayload = { code: string; verificationToken: string };

export const verifyUserAction = async (payload: TPayload) => {
  const response = await fetch(
    apiUrl.verifyUser,
    fetchOption({ method: 'POST', body: payload }),
  );

  const data = await response.json();
  return data;
};
