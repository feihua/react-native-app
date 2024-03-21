import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { load } from '../../utils/Storage';
// import UserStore from '../../stores/UserStore';


// @ts-ignore
export default ({ navigation }) => {

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
      <View style={styles.title_view}>
        <Text style={styles.title}>购物车</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={[
            { key: "华为mete Pro" },
            { key: "Redmi K50 天玑8100 2K柔性直屏 OIS光学防抖 67W快充 5500mAh大电量" },
            { key: "Apple Iphone15 pro" }

          ]}
          renderItem={({ item }) => <View style={styles.item_view}>
            <Image style={styles.item_img} source={{ uri: "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20221104/xiaomi_12_pro_01.jpg" }} />
            <View style={styles.item_right}>
              <Text style={styles.item1}>{item.key}</Text>
              <Text style={styles.item2}>颜色:黑色;容量:128G;</Text>
              <Text style={styles.item3}>¥2099</Text>
              <Text style={styles.item4}>1</Text>
            </View>
            <Image style={styles.close} source={require("@images/close.png")} />
          </View>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    flexDirection: "column"
    // alignItems: 'center',
  },
  logo_main: {
    width: 200,
    height: 105,
    marginTop: 200,
    resizeMode: "contain"
  },
  title_view: {
    alignItems: "center",
    height: 44,
    justifyContent: "center"
  },
  title: {
    fontSize: 16,
    color: "black"
    // alignItems: "center",
    //   alignContent: "center"
  },
  container: {
    flex: 1,
    paddingTop: 22
  },
  item1: {
    padding: 10,
    fontSize: 15,
    height: 40
  },
  item2: {

    paddingLeft: 10,
    fontSize: 13
  },
  item3: {
    marginTop: 5,
    paddingLeft: 10,
    fontSize: 15
  },
  item4: {
    marginTop: 5,
    paddingLeft: 10,
    fontSize: 15
  },

  item_view: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5"
  },
  item_img: {
    width: 115,
    height: 115
  },
  item_right: {
    flexDirection: "column"
  },
  close: {
    width: 15,
    height: 15,
    position: "absolute",
    right: 30,
    top: 20
  }
});
