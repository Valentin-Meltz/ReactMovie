import env from "env";
import axios from "axios";

const api = axios.create({
  baseURL: env.OMDB_API_URL,
  params: {
    apikey: env.OMDB_API_KEY,
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Erreur API:", error);
    return Promise.reject(error);
  }
);

export { api };