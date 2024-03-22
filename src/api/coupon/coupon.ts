import { get, IResponse } from "@/utils/request";

/**
 * 优惠券
 */
export const queryCouponList = (): Promise<IResponse> => {
    return get("/api/member/coupon/list/", {});
};
