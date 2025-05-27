import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
import Cookies from "js-cookie";
type ApiResponse<T = never> = {
  data: T;
  status: number;
  statusText: string;
};

type ApiError = {
  message: string;
  status?: number;
  data?: any;
};

const createApiClient = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

  instance.interceptors.request.use((config) => {
    const accessToken = Cookies.get("access_token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  });

  instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: AxiosError) => {
      const originalRequest = error.config as AxiosRequestConfig & {
        _retry?: boolean;
      };

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          const refreshToken = Cookies.get("refresh_token");
          if (!refreshToken) throw new Error("No refresh token");

          const refreshResponse = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
            { refreshToken }
          );

          Cookies.set("access_token", refreshResponse.data.accessToken, {
            secure: true,
            expires: 1,
          });
          Cookies.set("refresh_token", refreshResponse.data.refreshToken, {
            secure: true,
            expires: 7,
          });

          originalRequest.headers = {
            ...originalRequest.headers,
            Authorization: `Bearer ${refreshResponse.data.accessToken}`,
          };
          return instance(originalRequest);
        } catch (refreshError) {
          Cookies.remove("access_token");
          Cookies.remove("refresh_token");
          window.location.href = "/login";
          return Promise.reject({
            message: "Session expired. Please login again.",
            status: 401,
          });
        }
      }

      const apiError: ApiError = {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      };
      return Promise.reject(apiError);
    }
  );

  return instance;
};

export const api = {
  get: async <T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> => {
    const client = createApiClient();
    const response = await client.get<T>(url, config);
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
  },

  post: async <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> => {
    const client = createApiClient();
    const response = await client.post<T>(url, data, config);
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
  },

  put: async <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> => {
    const client = createApiClient();
    const response = await client.put<T>(url, data, config);
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
  },

  delete: async <T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> => {
    const client = createApiClient();
    const response = await client.delete<T>(url, config);
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
  },
};
