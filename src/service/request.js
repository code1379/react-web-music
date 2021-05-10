import axios from 'axios';

import { BASE_URL, TIME_OUT } from './config';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT
});

instance.interceptors.request.use(
  (config) => config,
  (err) => {
    console.log(err);
  }
);

instance.interceptors.response.use(
  (res) => res.data,
  (err) => {
    console.log(err);
  }
);

export default instance;
