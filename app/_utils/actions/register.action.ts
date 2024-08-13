import { apiUrl } from '@/app/_data';
import { fetchOption } from '@/app/_utils/helpers';

type TRegister = {
  name: string;
  email: string;
  password: string;
  image: string;
};

export const registerAction = async (payload: TRegister) => {
  const response = await fetch(
    apiUrl.register,
    fetchOption({ method: 'POST', body: payload }),
  );

  const data = await response.json();
  return data;
};
