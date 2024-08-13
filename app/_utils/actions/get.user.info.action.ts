'use server';

import { cookies } from 'next/headers';
import { jwtDecode } from 'jwt-decode';
import { tokenKeys } from '../helpers';
import { TLoggedUser } from '../types';

export const getUserInfoAction = async () => {
  const token = cookies().get(tokenKeys.accessToken)?.value;
  if (!token) return null;

  const decodedUser = jwtDecode(token);
  return decodedUser as TLoggedUser;
};
