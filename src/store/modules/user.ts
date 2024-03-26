import { makeAutoObservable, runInAction } from "mobx";
import { queryMemberInfo } from "@/api";
import { clearStorage } from "@/utils/Storage"; // 注意引用的包是mobx

/**
 * 描述：用户信息状态管理
 * 作者：刘飞华
 * 日期：2024/3/25 14:18
 */
class UserInfoStore {
  data = {};

  constructor() {
    makeAutoObservable(this); // 视图更新必须要调用
  }

  //会员退出登录
  async logout() {
    await clearStorage();
    runInAction(() => {
      this.data = {};
    });

  }

  //获取会员信息
  async queryUserInfo() {
    const res = await queryMemberInfo();
    runInAction(() => {
      this.data = res.data;
    });
  }
}

const userInfoStore = new UserInfoStore();
export default userInfoStore;
