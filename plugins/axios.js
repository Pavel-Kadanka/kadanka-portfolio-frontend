import axios from 'axios';

export default defineNuxtPlugin(() => {
  const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api', // replace with your actual API URL
  });

  return {
    provide: {
      axios: axiosInstance,
    },
  };
});
