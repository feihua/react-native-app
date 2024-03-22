import { get, IResponse } from "@/utils/request";

/**
 * 获取商品分类
 */
export const queryHistoryList = (): Promise<IResponse> => {
    return get("/app/api/history/list", {});
};
