import { cookies } from 'next/headers';
import { tokenKeys } from './_helpers';
import { jwtDecode } from 'jwt-decode';

export default async function Home() {
  const accessToken = cookies().get(tokenKeys.accessToken)?.value;
  let user;
  if (accessToken) user = jwtDecode(accessToken);

  return <div>{JSON.stringify(user)}</div>;
}
