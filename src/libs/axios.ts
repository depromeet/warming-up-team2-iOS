import axios, { AxiosInstance } from 'axios';

const API_BASE_URL: string = 'http://booboo.depromeet.com/api';

let instance: AxiosInstance | null = null;

function configureAxios() {
  if (instance) {
    return instance;
  }

  instance = axios.create({
    baseURL: API_BASE_URL,
  });

  return instance;
}

let currentAuthorizationToken: string | null = null;

export const setAuthorization = (token: string | null) => {
  currentAuthorizationToken = token;

  console.log('token', token);

  const axiosInstance = configureAxios();
  axiosInstance.defaults.headers.common.Authorization = token
    ? `Bearer ${token}`
    : '';
};

export function getAuthorizationToken() {
  return currentAuthorizationToken;
}

export default configureAxios();
