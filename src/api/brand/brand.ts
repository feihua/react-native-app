import { get, IResponse } from "@/utils/request";

/**
 * 获取品牌列表
 */
export const queryBrandList = (): Promise<IResponse> => {
    return get("/api/brand/list", {});
};

/**
 * 品牌详情
 */
export const queryBrandDetail = (): Promise<IResponse> => {
    return get("/api/brand/detail/", {});
};
