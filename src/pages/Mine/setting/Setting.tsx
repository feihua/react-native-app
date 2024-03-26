import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { inject, observer } from "mobx-react";
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { load } from '../../utils/Storage';
// import UserStore from '../../stores/UserStore';
// @ts-ignore


const Setting = (props) => {

  const { navigation, store } = props;
  React.useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({ headerShown: true, title: "设置" });
  }, [navigation]);
  // const navigation = useNavigation<StackNavigationProp<any>>();

  // useEffect(() => {
  //     setTimeout(() => {
  //         // getUserInfo();
  //         navigation.replace("Home")
  //     }, 2000);
  // }, []);

  // const getUserInfo = async () => {
  //     const cacheUserInfo = await load('userInfo');
  //     if (!cacheUserInfo) {
  //         startLogin();
  //     } else {
  //         const parse = JSON.parse(cacheUserInfo);
  //         if (parse) {
  //             UserStore.setUserInfo(parse);
  //             startHome();
  //         } else {
  //             startLogin();
  //         }
  //     }
  // }
  //
  // const startLogin = () => {
  //     navigation.replace('Login');
  // }
  //
  // const startHome = () => {
  //     navigation.replace('MainTab');
  // }

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <FlatList
          data={[
            { key: "个人资料" },
            { key: "收货地址" },
            { key: "实名认证" },
            { key: "消息推送" },
            { key: "清除缓存" },
            { key: "关于app-web" },
            { key: "检查更新" }

          ]}
          renderItem={({ item }) => <View style={styles.item_view}>
            <Text style={styles.item_detail}>{item.key}</Text>
            <Image style={styles.go_detail_img} source={require("@images/right_arrow.png")} />
          </View>}
        />
        <TouchableOpacity
          style={styles.login_out_txt}
          onPress={async () => {
            await store.user.logout();
            navigation.navigate({
              name: "Mine"
            });
          }}
        >
          <Text style={{ color: "#fa436a", fontSize: 15 }}>退出登录</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default inject("store")(observer(Setting));
const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: "#f5f5f5",
    flexDirection: "column"
  },
  container: {
    // flex: 1,
    paddingTop: 10
  },
  item_view: {
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "white",
    // height:44,
    flexDirection: "row",
    padding: 15
  },
  detail: {
    backgroundColor: "white",
    margin: 15,
    padding: 15
  },
  go_detail: {
    // width: 15,
    // height:15
  },
  item_detail: {
    color: "#303133"
  },
  go_detail_img: {
    height: 15,
    width: 15,
    position: "absolute",
    right: 20
  },
  login_out_txt: {
    marginTop: 20,
    backgroundColor: "white",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 50
  }
});
