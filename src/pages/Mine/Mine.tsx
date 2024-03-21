import React from "react";
import { Image, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { load } from '../../utils/Storage';
// import UserStore from '../../stores/UserStore';
import UserBg from "@images/user-bg.jpg";

import right_arrow from "@images/right_arrow.png";
import Address from "@images/addresss.png";

import History from "@images/history.png";

import GuanZhu from "@images/guanzhu.png";

import Shoucang from "@images/shoucang.png";

import Pingjia from "@images/pingjia.png";

import Setting from "@images/setting.png";

import AllOrder from "@images/all_order.png";

import Daifukuan from "@images/daifukuan.png";

import Yifukuan from "@images/yifukuan.png";

import Tuihuo from "@images/tuihuo.png";

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

  const wait = (timeout: number | undefined) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  };
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <ScrollView style={styles.root}
      // contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.mine_header}>
        <Image style={styles.user_bg} source={UserBg} />
        <View style={styles.mine_header_left}>
          <Image style={styles.mine_header_img} source={{ uri: "https://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/icon/github_icon_02.png" }} />
          <Text style={{ color: "#303133", fontSize: 30 }}>koobe</Text>
        </View>
        <View style={styles.mine_header_right}>
          <TouchableOpacity
            style={styles.second_section_item}
            onPress={() => {
              navigation.navigate({
                name: "Message"
              });
            }}
          >
            <Image style={styles.mine_header_message_img} source={require("@images/message.png")} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.second_section_item}
            onPress={() => {
              navigation.navigate({
                name: "Setting"
              });
            }}
          >
            <Image style={styles.mine_header_setting_img} source={require("@images/setting_white.png")} />
          </TouchableOpacity>


        </View>
      </View>

      <View style={styles.all_section}>
        <View style={styles.first_section}>
          <View style={styles.first_section_item}>
            <Text>5000</Text>
            <Text>积分</Text>
          </View>
          <View style={styles.first_section_item}>
            <Text>1000</Text>
            <Text>成长值</Text>
          </View>
          <TouchableOpacity
            style={styles.first_section_item}
            onPress={() => {
              navigation.navigate({
                name: "Coupon"
              });
            }}
          >
            <Text>5</Text>
            <Text>优惠券</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.second_section}>
          <TouchableOpacity
            style={styles.second_section_item}
            onPress={() => {
              navigation.navigate({
                name: "Order"
              });
            }}
          >
            {/*<View style={styles.second_section_item}>*/}
            <Image style={styles.second_section_item_left_img} source={AllOrder} />
            <Text>全部订单</Text>
            {/*</View>*/}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.second_section_item}
            onPress={() => {
              navigation.navigate({
                name: "Order"
              });
            }}
          >
            <Image style={styles.second_section_item_left_img} source={Daifukuan} />
            <Text>待付款</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.second_section_item}
            onPress={() => {
              navigation.navigate({
                name: "Order"
              });
            }}
          >
            <Image style={styles.second_section_item_left_img} source={Yifukuan} />
            <Text>待收货</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.second_section_item}
            onPress={() => {
              navigation.navigate({
                name: "Order"
              });
            }}
          >
            <Image style={styles.second_section_item_left_img} source={Tuihuo} />
            <Text>退款/售后</Text>
          </TouchableOpacity>
          {/*<View style={styles.second_section_item}>*/}
          {/*  <Image style={styles.second_section_item_left_img} source={daifukuan} />*/}
          {/*  <Text>待付款</Text>*/}
          {/*</View>*/}
          {/*<View style={styles.second_section_item}>*/}
          {/*  <Image style={styles.second_section_item_left_img} source={yifukuan} />*/}
          {/*  <Text>待收货</Text>*/}
          {/*</View>*/}
          {/*<View style={styles.second_section_item}>*/}
          {/*  <Image style={styles.second_section_item_left_img} source={tuihuo} />*/}
          {/*  <Text>退款/售后</Text>*/}
          {/*</View>*/}
        </View>

        <View style={styles.third_section}>
          <TouchableOpacity
            style={styles.third_section_item}
            onPress={() => {
              navigation.navigate({
                name: "Address"
              });
            }}
          >
            <Image style={styles.third_section_item_left_img} source={Address} />
            <Text style={styles.third_section_item_txt}>地址管理</Text>
            <Image style={styles.third_section_item_right_arrow} source={right_arrow} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.third_section_item}
            onPress={() => {
              navigation.navigate({
                name: "History"
              });
            }}
          >
            <Image style={styles.third_section_item_left_img} source={History} />
            <Text style={styles.third_section_item_txt}>我的足迹</Text>
            <Image style={styles.third_section_item_right_arrow} source={right_arrow} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.third_section_item}
            onPress={() => {
              navigation.navigate({
                name: "Focus"
              });
            }}
          >
            <Image style={styles.third_section_item_left_img} source={GuanZhu} />
            <Text style={styles.third_section_item_txt}>我的关注</Text>
            <Image style={styles.third_section_item_right_arrow} source={right_arrow} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.third_section_item}
            onPress={() => {
              navigation.navigate({
                name: "Collect"
              });
            }}
          >
            <Image style={styles.third_section_item_left_img} source={Shoucang} />
            <Text style={styles.third_section_item_txt}>我的收藏</Text>
            <Image style={styles.third_section_item_right_arrow} source={right_arrow} />
          </TouchableOpacity>
          <View style={styles.third_section_item}>
            <Image style={styles.third_section_item_left_img} source={Pingjia} />
            <Text style={styles.third_section_item_txt}>我的评价</Text>
            <Image style={styles.third_section_item_right_arrow} source={right_arrow} />
          </View>
          <TouchableOpacity
            style={styles.third_section_item}
            onPress={() => {
              navigation.navigate({
                name: "Setting"
              });
            }}
          >
            <Image style={styles.third_section_item_left_img} source={Setting} />
            <Text style={styles.third_section_item_txt}>设置</Text>
            <Image style={styles.third_section_item_right_arrow} source={right_arrow} />
          </TouchableOpacity>
        </View>
        {/*<Button*/}
        {/*  title="登录"*/}
        {/*  onPress={() => {*/}
        {/*    // Pass and merge params back to Home screen*/}
        {/*    navigation.navigate({*/}
        {/*      name: "Login"*/}
        {/*      // params: { post: postText },*/}
        {/*      // merge: true*/}
        {/*    });*/}
        {/*  }}*/}
        {/*/>*/}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: "#f5f5f5",
    flexDirection: "column"
    // alignItems: "center"
  },
  mine_header: {
    width: "100%",
    height: 200,
    flexDirection: "row"
  },
  mine_header_left: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
    flex: 4
  },
  mine_header_img: {
    width: 61,
    height: 61,
    marginRight: 15,
    borderRadius: 28
  },
  mine_header_right: {
    padding: 15,
    flexDirection: "row",
    flex: 1
  },
  mine_header_message_img: {
    width: 30,
    height: 30
  },
  mine_header_setting_img: {
    marginLeft: 15,
    width: 30,
    height: 30
  },
  user_bg: {
    width: "100%",
    height: 200,
    position: "absolute"
    // marginTop: 200,
    // resizeMode: 'contain',
  },
  all_section: {
    width: "100%",
    flexDirection: "column",
    padding: 15
  },
  first_section: {
    width: "100%",
    backgroundColor: "white",
    // height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15
  },
  second_section: {
    width: "100%",
    backgroundColor: "white",
    // height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    padding: 10
  },

  third_section: {
    width: "100%",
    marginTop: 10,
    backgroundColor: "white",
    padding: 10
  },
  first_section_item: {
    alignItems: "center"
  },
  second_section_item: {
    alignItems: "center"
  },
  third_section_item: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  third_section_item_txt: {
    marginLeft: 8
  },
  third_section_item_right_arrow: {
    height: 15,
    width: 15,
    position: "absolute",
    right: 20
  },
  third_section_item_left_img: {
    height: 20,
    width: 20
  },
  second_section_item_left_img: {
    height: 24,
    width: 24,
    marginBottom: 5
  }

});

