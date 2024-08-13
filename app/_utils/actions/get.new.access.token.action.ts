'use server';

import { cookies } from 'next/headers';
import { fetchOption, tokenKeys } from '../helpers';
import { apiUrl } from '@/app/_data';

export const getNewAccessTokenAction = async () => {
  const refreshToken = cookies().get(tokenKeys.refreshToken)?.value;
  if (!refreshToken) return null;

  const response = await fetch(
    apiUrl.getNewAccessToken,
    fetchOption({ method: 'POST', body: { refreshToken } }),
  );

  const responseData = await response.json();

  let accessToken;
  if (responseData?.ok) accessToken = responseData.data?.accessToken;

  if (accessToken) cookies().set(tokenKeys.accessToken, accessToken);
  else {
    // deleting both tokens
    cookies().delete(tokenKeys.accessToken);
    cookies().delete(tokenKeys.refreshToken);
    return null;
  }

  return accessToken;
};
