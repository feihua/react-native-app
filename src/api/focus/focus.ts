import { get, IResponse } from "@/utils/request";

/**
 * 我的关注
 */
export const queryFocusList = (): Promise<IResponse> => {
    return get("/api/member/attention/list", {});
};
