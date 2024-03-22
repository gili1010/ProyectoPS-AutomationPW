import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';


export class ApiService {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async get(endpoint: string, options?: AxiosRequestConfig): Promise<AxiosResponse> {
        const url = `${this.baseUrl}/${endpoint}`;
        return axios.get(url, options);
    }

    async post(endpoint: string, data: any): Promise<AxiosResponse> {
        const url = `${this.baseUrl}/${endpoint}`;
        return axios.post(url, data);
    }

}
