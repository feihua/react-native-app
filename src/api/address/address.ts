import { get, IResponse } from "@/utils/request";

/**
 * 获取收货地址
 */
export const queryAddressList = (): Promise<IResponse> => {
    return get("/api/member/address/list", {});
};
