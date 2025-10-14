import axios, { AxiosError, type AxiosInstance } from 'axios';
import { parseLinkHeader } from './utils';
import type { LinkObject } from './types';

const headers = {
  'Content-Type': 'application/json',
};

interface RequestParams {
  url: string;
  params?: unknown;
  data?: unknown;
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 30000,
  headers,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    return Promise.reject(error);
  }
);

const get = async <T>({ url, params }: RequestParams) => {
  const response = await axiosInstance.get<T>(url, { params });
  return {
    data: response.data,
    meta: {
      total: Number(response.headers?.['x-total-count'] ?? 0),
      link: response.headers?.['link'] ? parseLinkHeader(response.headers?.['link']) : ({} as LinkObject),
    },
  };
};

export { get };
