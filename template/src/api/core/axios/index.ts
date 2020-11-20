import Axios, { AxiosError, AxiosInstance, AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';
import { debugRequestInterceptor, debugResponseInterceptor } from './debug-interceptor';
import paginateResponseInterceptor from './paginate-interceptor';

const config: AxiosRequestConfig = {
  baseURL: process.env.BASE_URL || '',
};

const axios: AxiosInstance = Axios.create(config);

axios.interceptors.response.use(paginateResponseInterceptor);
if (process.env.NODE_ENV === 'development') {
  axios.interceptors.response.use(debugResponseInterceptor);
  axios.interceptors.request.use(debugRequestInterceptor);
}

export default axios;
export { AxiosError, AxiosResponse, AxiosRequestConfig, AxiosPromise };
