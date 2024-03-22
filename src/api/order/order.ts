import { get, IResponse } from "@/utils/request";

/**
 * 订单列表
 */
export const queryOrderList = (): Promise<IResponse> => {
    return get("/api/order/orderList/", {});
};

/**
 * 订单详情
 */
export const queryOrderDetail = (): Promise<IResponse> => {
    return get("/api/order/orderDetail/", {});
};
