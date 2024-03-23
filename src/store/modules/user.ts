import {action, makeAutoObservable, makeObservable, observable} from 'mobx'; // 注意引用的包是mobx

class RootStore {
     num = 1; // 数据源
    // @observable num2 = 2; // 多个数据源的情况，方法也一样，这里不再演示
    constructor() {
        makeAutoObservable(this); // 视图更新必须要调用
    }

     addNum() { // 改变数据的方法
        this.num++;
    }
}

// export type RootStoreType = InstanceType<typeof RootStore>; // 给指定界面的ts类型使用
// export default new RootStore(); // 导出实例化
// const store=new RootStore(); // 导出实例化
// export default store; // 导出实例化
export default RootStore
