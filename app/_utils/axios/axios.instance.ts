import axios from 'axios';
import { getAccessToken, setAccessToken } from '../helpers';
import { TErrorResponse, TSuccessResponse } from '../types';
import { getNewAccessTokenAction } from '../actions';
import { serverAddress } from '@/app/_data';

export const axiosInstance = axios.create({
  baseURL: serverAddress,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },

  function (error) {
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  //@ts-ignore
  function (response) {
    const responseObject: TSuccessResponse = {
      data: response?.data?.data,
      meta: response?.data?.meta,
      message: response?.data.message,
    };

    return responseObject;
  },

  async function (error) {
    const config = error.config;
    if (error?.response?.status === 500 && !config.sent) {
      config.sent = true;
      const accessToken = await getNewAccessTokenAction();
      if (accessToken) config.headers['Authorization'] = accessToken;
      setAccessToken(accessToken);
      return axiosInstance(config);
    } else {
      const responseObject: TErrorResponse = {
        statusCode: error?.response?.data?.statusCode || 500,
        message: error?.response?.data?.message || 'Something went wrong!!!',
      };
      return responseObject;
    }
  },
);
