import axios from 'axios';

const serverUrl = {
  development: 'http://localhost:3000',

  production: 'https://p01--mentores-backend-api-dev--bj8pjy8s82zl.code.run',
};

export const api = axios.create({
  baseURL: serverUrl.production,
  withCredentials: true,
});
