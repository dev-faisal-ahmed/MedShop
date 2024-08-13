type TFetchOption = {
  method: 'POST' | 'PATCH' | 'DELETE';
  body?: any;
};

export const fetchOption = ({ method, body }: TFetchOption) => {
  return {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
};
