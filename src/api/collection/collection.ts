import { get, IResponse } from "@/utils/request";

/**
 * 我的收藏
 */
export const queryCollectionList = (): Promise<IResponse> => {
    return get("/api/collection/list", {});
};
