import { get, IResponse } from "@/utils/request";

/**
 * 获取商品列表
 */
export const queryProductList = (): Promise<IResponse> => {
    return get("/api/product/queryProductList/", {});
};

/**
 * 商品详情
 */
export const queryProductDetail = (): Promise<IResponse> => {
    return get("/api/product/queryProduct/", {});
};
