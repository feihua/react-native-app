import axios from "axios";
import Toast from "react-native-root-toast";
import { getStorage } from "@/utils/Storage";

// 返回res.data的interface
export interface IResponse {
  code: number | string;
  data: any;
  message: string;
  total: number;
}

// axios实例
const instance = axios.create({
  baseURL: "http://110.41.179.89/app",
  timeout: 10 * 1000
});

/**
 * 拦截请求
 */
instance.interceptors.request.use(
  async config => {
    console.log("==================", "请求开始", "==================");
    console.log("req: ", config.baseURL!.trim() + config.url);
    console.log("params: ", config.data);
    const token = await getStorage("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  }
);

/**
 * 拦截响应
 */
instance.interceptors.response.use(
  response => {
    console.log("res: ", response.data);
    console.log("==================", "请求结束", "==================");
    console.log("");
    if (response.status === 200) {
      return response.data;
    } else {
      Toast.show(String(response.status), {
        position: Toast.positions.CENTER
      });
    }
  },
  error => {
    const { response } = error;
    if (response) {
      const { status } = response;
      if (status >= 500) {
        // 服务端报错
      } else if (status === 400) {
        // 接口参数异常
      } else if (status === 401) {
        // 登陆信息过期，需要重新登陆
      } else {
        // 其它错误类型，统一按照接口报错处理
      }
    } else {
      // 网络异常
    }
    return Promise.reject(error);
  }
);

/**
 * 发起请求
 * @param url 请求地址
 * @param params 参数
 * @param method 请求类型
 */
export const request = (url: string, params: any, method: string): Promise<IResponse> => {
  if (method === "get") {
    return get(url, params);
  } else {
    return post(url, params);
  }
};

/**
 * 发起get请求
 * @param url 请求地址
 * @param params 参数
 */
export const get = (url: string, params: any): Promise<IResponse> => {
  return instance.get(url, {
    params: params
  });
};

/**
 * 发起post请求
 * @param url 请求地址
 * @param params 参数
 */
export const post = (url: string, params: any): Promise<IResponse> => {
  return instance.post(url, params);
};
