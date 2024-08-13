import { apiUrl } from '../_data/api.url';
import { fetchOption } from '../_helpers/fetch.helper';

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
