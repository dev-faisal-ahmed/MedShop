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
