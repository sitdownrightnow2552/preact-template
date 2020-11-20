import { AxiosRequestConfig } from 'axios';
import { Page } from './model';
import axios from './axios';

export interface RestAPI<T, ID> {
  post(payload: T, config?: AxiosRequestConfig): Promise<T>;

  put(id: ID, payload: T, config?: AxiosRequestConfig): Promise<T>;

  delete(id: ID, config?: AxiosRequestConfig): Promise<void>;

  get(id: ID, config?: AxiosRequestConfig): Promise<T>;
}

export interface PagedRestAPI<T> {
  getPage(
    config?: AxiosRequestConfig & {
      params: {
        search?: string;
        query?: string;
        page?: number;
        size?: number;
        sort?: string;
        [key: string]: any;
      };
    },
  ): Promise<Page<T>>;
}

export interface UnPagedRestAPI<T> {
  getAll(
    config?: AxiosRequestConfig & {
      params: {
        search?: string;
        query?: string;
        sort?: string;
        [key: string]: any;
      };
    },
  ): Promise<T[]>;
}

export function BaseRestAPI<T, ID>(url: string): RestAPI<T, ID> & PagedRestAPI<T> & UnPagedRestAPI<T> {
  return {
    delete<ID>(id: ID, config?: AxiosRequestConfig): Promise<void> {
      return axios.delete(`${url}/${id}`, config).then(res => res.data);
    },

    get<ID>(id: ID, config?: AxiosRequestConfig & { params: { query?: string; sort?: string } }): Promise<T> {
      return axios.get(`${url}/${id}`, config).then(res => res.data);
    },

    put<ID, T>(id: ID, payload: T, config?: AxiosRequestConfig): Promise<T> {
      return axios.put(`${url}/${id}`, payload, config).then(res => res.data);
    },

    post(payload: T, config?: AxiosRequestConfig): Promise<T> {
      return axios.post<T>(url, payload, config).then(res => res.data);
    },

    getAll(config?: AxiosRequestConfig & { params: { query?: string; sort?: string } }): Promise<T[]> {
      return axios.get(`${url}/all`, config).then(res => res.data);
    },

    getPage(
      config?: AxiosRequestConfig & { params: { query?: string; page?: number; size?: number; sort?: string } },
    ): Promise<Page<T>> {
      return axios.get(`${url}`, config).then(res => res.data);
    },
  };
}
