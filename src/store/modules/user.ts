import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage"; // 注意引用的包是mobx

/**
 * 描述：用户信息状态管理
 * 作者：刘飞华
 * 日期：2024/3/25 14:18
 */
class UserInfoStore {
  num = 1; // 数据源
  // @observable num2 = 2; // 多个数据源的情况，方法也一样，这里不再演示
  data = {};

  constructor() {
    makeAutoObservable(this); // 视图更新必须要调用
  }

  addNum() { // 改变数据的方法
    this.num++;
  }

  async saveData(key, value) {
    this.data[key] = value;
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      // handle error
    }
  }

  async loadData(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        this.data[key] = JSON.parse(value);
      }
    } catch (e) {
      // handle error
    }
  }
}

export default UserInfoStore;
