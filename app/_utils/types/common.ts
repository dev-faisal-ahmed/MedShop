export type TMeta = {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
};

export type TSuccessResponse = {
  message: string;
  data: any;
  meta?: TMeta;
};

export type TErrorResponse = {
  statusCode: number;
  message: string;
};

export type TUserRole = 'SUPER_ADMIN' | 'ADMIN' | 'USER';

export type TLoggedUser = {
  _id: string;
  name: string;
  image: string;
  email: string;
  role: TUserRole;
  isVerified: boolean;
};
