import { get, IResponse, post } from "@/utils/request";

/**
 * 注册参数
 */
export interface IRegister {
    username: string;
    mobile: string;
    password: string;
    confirmPassword: string;
}

export interface LoginResModel {
    code: number;
    message: string;
    data: LoginResData;
}

export interface LoginResData {
    token: string;
    tokenHead: string;
}

/**
 * 用户注册
 */
export const userRegister = (params: IRegister) => {
    return post("/api/member/register", params);
};


export interface ILogin {
    account: string;
    password: string;
}

/**
 * 登录
 */
export const userLogin = (params: ILogin): Promise<IResponse> => {
    return post("/api/member/login", params);
};

/**
 * 获取用户信息
 */
export const queryMemberInfo = (): Promise<IResponse> => {
    return get("/api/member/info", {});
};
