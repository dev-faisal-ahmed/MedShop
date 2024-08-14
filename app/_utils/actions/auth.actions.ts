'use server';

import { apiUrl } from '@/app/_data';
import { fetchOption, tokenKeys } from '@/app/_utils/helpers';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

// get new access token
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

  if (!response?.ok) {
    cookies().delete(tokenKeys.accessToken);
    cookies().delete(tokenKeys.refreshToken);
    redirect('/login');
  }

  return accessToken;
};

export const getAccessTokeAction = async () => {
  const token = cookies().get(tokenKeys.accessToken)?.value;
  return token;
};
