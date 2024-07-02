import axios from 'axios';

export default defineNuxtPlugin(() => {
  const axiosInstance = axios.create({
    baseURL: 'https://kadanka-portfolio-backend.vercel.app/content',
  });

  return {
    provide: {
      axios: axiosInstance,
    },
  };
});
