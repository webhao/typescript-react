import Axios, { AxiosResponse } from 'axios';

interface Params {
  [key: string]: any;
}

Axios.defaults.baseURL = API_URL;

Axios.interceptors.response.use((ar: AxiosResponse) => {
  const { data } = ar;
  if (data.error) {
    return Promise.reject(data.error.message);
  }
  if (!data.data) {
    return data;
  }
  return data.data;
}, (error) => {
  return Promise.reject(error);
});

async function get<T = any>(url: string, params?: Params): Promise<T> {
  return (Axios.get<T>(url, { params }) as Promise<any>);
}

async function post<T = any>(url: string, data: any): Promise<T> {
  return (Axios.post<T>(url, data) as Promise<any>);
}

export const HttpClient = {
  get,
  post,
};
