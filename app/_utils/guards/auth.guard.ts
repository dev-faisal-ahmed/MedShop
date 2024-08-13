'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';
import { tokenKeys } from '../helpers';
import { TLoggedUser, TUserRole } from '../types';

export const authGuard = async (...requiredRoles: TUserRole[]) => {
  const accessToken = cookies().get(tokenKeys.accessToken)?.value;
  if (!accessToken) redirect('/login');

  const decodedUser = jwtDecode(accessToken) as TLoggedUser;
  if (!decodedUser) redirect('/login');

  const { role } = decodedUser;
  if (!requiredRoles.includes(role)) redirect('/login');

  return decodedUser as TLoggedUser;
};
