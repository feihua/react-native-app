import { get, IResponse } from "@/utils/request";

/**
 * 获取首页信息
 */
export const queryHomeInfo = (): Promise<IResponse> => {
    return get("/api/home/index", {});
};
