'use server';

import { apiUrl } from '@/data';
import { fetchOption, tokenKeys } from '@/helpers';
import { cookies } from 'next/headers';

type TPayload = { email: string; password: string };

export const loginAction = async (payload: TPayload) => {
  const response = await fetch(
    apiUrl.login,
    fetchOption({ method: 'POST', body: payload }),
  );

  const responseData = await response.json();

  if (responseData?.ok && responseData?.data) {
    cookies().set(tokenKeys.accessToken, responseData.data.refreshToken);
    cookies().set(tokenKeys.accessToken, responseData.data.accessToken);
  }

  return responseData;
};
