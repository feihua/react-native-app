import { get, IResponse } from "@/utils/request";

/**
 * 获取商品分类
 */
export const queryCategoryList = (): Promise<IResponse> => {
    return get("/api/category/queryProductCateList", {});
};
