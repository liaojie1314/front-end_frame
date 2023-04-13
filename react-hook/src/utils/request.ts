import axios, { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
import { getCookie, removeCookie } from './cookies';
import { Button, Modal } from 'antd';

//借口返回的对象
export interface Result<T> {
    data: T,
    message: string,
    resCode: number
}

const service: AxiosInstance = axios.create({
    baseURL: '/api',
    timeout: 1000,
});

// 添加请求拦截器
service.interceptors.request.use((config: AxiosRequestConfig) => {
    if (config && config?.headers && getCookie('token')) {
        config.headers.token = getCookie('token')
    }
    return config;
}, (error: AxiosError) => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use((response: AxiosResponse) => {
    //业务状态码resCode
    const data = response.data
    if (data.resCode === 0) {
        return data;
    } else {

        return Promise.reject(data)
    }
}, (error: AxiosError) => {
    //token 失效
    const status = error.response?.status
    switch (status) {
        case 400:
            break;
        case 401:
            Modal.confirm({
                title: "提示",
                content: "token失效,请重新登录",
                onOk: () => {
                    removeCookie('token');
                    window.location.replace('#/login');
                }
            })
            break;
        default:
            break;
    }
    return Promise.reject(error);
});


export const http = {
    request<T = any>(config: AxiosRequestConfig): Promise<Result<T>> {
        return service.request(config)
    },
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<Result<T>> {
        return service.get(url, config)
    },
    delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<Result<T>> {
        return service.delete(url, config)
    },
    head<T = any>(url: string, config?: AxiosRequestConfig): Promise<Result<T>> {
        return service.head(url, config)
    },
    options<T = any>(url: string, config?: AxiosRequestConfig): Promise<Result<T>> {
        return service.options(url, config)
    },
    post<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<Result<T>> {
        return service.post(url, data, config)
    },
    put<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<Result<T>> {
        return service.put(url, data, config)
    },
    patch<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<Result<T>> {
        return service.patch(url, data, config)
    },
    postForm<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<Result<T>> {
        return service.postForm(url, data, config)
    },
    putForm<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<Result<T>> {
        return service.putForm(url, data, config)
    },
    patchForm<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<Result<T>> {
        return service.patchForm(url, data, config)
    }
}