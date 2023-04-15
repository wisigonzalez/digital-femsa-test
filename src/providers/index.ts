import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

interface ApiProviderResponse<T = any> extends AxiosResponse {
  data: T;
}

class ApiProvider {
  protected instance: AxiosInstance;
  static instance: AxiosInstance;

  constructor() {
    if (!ApiProvider.instance) {
      ApiProvider.instance = axios.create();
    }

    this.instance = ApiProvider.instance;
  }

  async get<T = unknown>(
    url: string,
    options: AxiosRequestConfig = {},
  ): Promise<ApiProviderResponse<T>> {
    return this.instance.get(url, options);
  }

  async post<T = unknown>(
    url: string,
    data: unknown,
  ): Promise<ApiProviderResponse<T>> {
    return this.instance.post(url, data);
  }

  async put(
    url: string,
    data?: unknown,
  ): Promise<ApiProviderResponse<unknown>> {
    return this.instance.put(url, data);
  }

  async delete(
    url: string,
    data: unknown,
  ): Promise<ApiProviderResponse<unknown>> {
    return this.instance.delete(url, {data});
  }

  async patch(
    url: string,
    data?: unknown,
  ): Promise<ApiProviderResponse<unknown>> {
    return this.instance.patch(url, data);
  }
}

const apiProvider = new ApiProvider();

export default apiProvider;
