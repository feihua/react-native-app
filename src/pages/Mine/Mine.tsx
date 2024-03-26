import React from "react";
import { RefreshControl, ScrollView, StyleSheet, View } from "react-native";
import { inject, observer } from "mobx-react";
import { getStorage } from "@/utils/Storage";
import { useFocusEffect } from "@react-navigation/native";
import store from "@/store";
import UserInfo from "@/pages/Mine/components/info/UserInfo";
import MineHeader from "@/pages/Mine/components/header/MineHeader";
import OrderInfo from "@/pages/Mine/components/order/OrderInfo";
import OtherInfo from "@/pages/Mine/components/other/OtherInfo";

/**
 * 描述：个人页面
 * 作者：刘飞华
 * 日期：2024/3/26 10:41
 */
const Mine = (props) => {

  const { store } = props;

  //react-navigation钩子,用来在界面获取焦点的时候,发起网络请求,获取会员的个人信息
  useFocusEffect(
    React.useCallback(() => {
      queryUserInfo().then();
      return () => {
      };
    }, [])
  );

  //获取会员个人信息
  const queryUserInfo = async () => {
    const token = await getStorage("token");
    if (token) {
      await store.user.queryUserInfo();
    }
  };

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    queryUserInfo().then(() => {
      setRefreshing(false);
    });
  }, []);

  return (
    <ScrollView style={styles.root}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {/*头部区域*/}
      <MineHeader />
      {/*内容区域*/}
      <View style={styles.content}>
        <UserInfo />
        <OrderInfo />
        <OtherInfo />
      </View>
    </ScrollView>
  );
};

export default inject("store")(observer(Mine));

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: "#f5f5f5",
    flexDirection: "column"
  },

  content: {
    width: "100%",
    flexDirection: "column",
    padding: 15
  }


});

