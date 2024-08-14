'use server';

import { apiUrl } from '@/app/_data';
import { fetchOption } from '../helpers';

// verification token
export const getVerificationTokenAction = async (email: string) => {
  const response = await fetch(
    apiUrl.getVerifyToken,
    fetchOption({ method: 'POST', body: { email } }),
  );

  const data = await response.json();
  return data;
};
