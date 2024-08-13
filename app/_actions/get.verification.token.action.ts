'use server';

import { apiUrl } from '../_data/api.url';
import { fetchOption } from '../_helpers/fetch.helper';

export const getVerificationTokenAction = async (email: string) => {
  const response = await fetch(
    apiUrl.getVerifyToken,
    fetchOption({ method: 'POST', body: { email } }),
  );

  const data = await response.json();
  return data;
};
