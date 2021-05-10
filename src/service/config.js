const isDev = process.env.NODE_ENV === 'development';

const devBaseURL = 'http://123.207.32.32:9001';
const prodBaseURL = 'http://123.207.32.32:9001';

export const BASE_URL = isDev ? devBaseURL : prodBaseURL;
export const TIME_OUT = 5000