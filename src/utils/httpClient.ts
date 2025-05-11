import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

interface CocktailHttpClient extends AxiosInstance {
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
}

const config: AxiosRequestConfig = {
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1",
};

function createHttpClient() {
  const axiosInstance = axios.create(config);

  axiosInstance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => response.data,
    (error) => {
      if (error.response) {
        return Promise.reject(error);
      }
    }
  );

  return axiosInstance;
}

export const httpClient: CocktailHttpClient = createHttpClient();
