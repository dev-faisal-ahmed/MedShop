import { TUser } from '../modules/user/interface';

export type TLoggedUser = Omit<TUser, 'password'>;
