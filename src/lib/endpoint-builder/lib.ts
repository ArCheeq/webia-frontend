import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export type TEndpointData<TResponse = any> = {
    method: AxiosRequestConfig['method'];
    route: string;
    params?: Record<string, any>;
    body?: Record<string, any>;
    headers?: Record<string, any>;
    responseType?: TResponse;
    ignoreInterceptors?: boolean;
};

export type EndpointConfig = {
    [key: string]: EndpointBuilder | ((...args: any[]) => EndpointBuilder) | EndpointConfig;
};

// Класс для создания эндпоинтов и работы с ними поверх axios
export class EndpointBuilder<T = any> {
    private method: AxiosRequestConfig['method'];
    public route: string;
    private params?: Record<string, any>;
    private body?: Record<string, any>;
    private headers?: Record<string, any>;
    private ignoreInterceptors?: boolean;

    public static apiBaseUrl = '';

    public static setBaseUrl(url: string) {
        this.apiBaseUrl = url;

        this.instance = axios.create({
            baseURL: this.apiBaseUrl,
        });
    }

    private static plainInstance: AxiosInstance = axios.create();
    private static instance: AxiosInstance;

    constructor(method: AxiosRequestConfig['method'], route: string, ignoreInterceptors?: boolean) {
        this.method = method;
        this.route = route;
        this.ignoreInterceptors = ignoreInterceptors;
    }

    public static setInterceptors(interceptors: (instance: AxiosInstance) => void) {
        if (!this.instance) {
            throw new Error('Axios instance is not initialized. Please set base URL using setBaseUrl().');
        }
        interceptors(this.instance);
    }

    // Устанавливаем параметры запроса
    public withParams(params: Record<string, any>) {
        this.params = params;
        return this;
    }

    public withBody(body: Record<string, any>) {
        this.body = body;
        return this;
    }

    public withHeaders(headers: Record<string, any>) {
        this.headers = headers;
        return this;
    }

    // Создаём запрос к серверу
    public async request<TResponse = T>() {
        const instance = this.ignoreInterceptors ? EndpointBuilder.plainInstance : EndpointBuilder.instance;

        if (!instance) {
            throw new Error('Axios instance is not initialized. Please set base URL using setBaseUrl().');
        }

        const config: AxiosRequestConfig = {
            method: this.method,
            url: this.route,
            params: this.params,
            data: this.body,
            headers: this.headers,
        };

        try {
            const response = await instance.request<TResponse>(config);
            return response.data;
        } catch (error) {
            console.error('Error while requesting:', error);
            throw error;
        }
    }

    public static create<TResponse = any>(method: AxiosRequestConfig['method'], route: string, ignoreInterceptors?: boolean) {
        return new EndpointBuilder<TResponse>(method, route, ignoreInterceptors);
    }

    public static fromConfig<TResponse = any>(config: TEndpointData<TResponse>) {
        const builder = new EndpointBuilder<TResponse>(config.method, config.route, config.ignoreInterceptors);
        if (config.params) {
            builder.withParams(config.params);
        }
        if (config.body) {
            builder.withBody(config.body);
        }
        if (config.headers) {
            builder.withHeaders(config.headers);
        }
        return builder;
    }
}
