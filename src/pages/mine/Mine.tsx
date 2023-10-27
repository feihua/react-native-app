import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { load } from '../../utils/Storage';
// import UserStore from '../../stores/UserStore';
// @ts-ignore
import icon_logo_main from "../../assets/icon_main_logo.png";
// @ts-ignore
import user_bg from "../../assets/user-bg.jpg";
// @ts-ignore
import right_arrow from "../../assets/right_arrow.png";
// @ts-ignore
import address from "../../assets/addresss.png";
// @ts-ignore
import history from "../../assets/history.png";
// @ts-ignore
import guanzhu from "../../assets/guanzhu.png";
// @ts-ignore
import shoucang from "../../assets/shoucang.png";
// @ts-ignore
import pingjia from "../../assets/pingjia.png";
// @ts-ignore
import setting from "../../assets/setting.png";
// @ts-ignore
import all_order from "../../assets/all_order.png";
// @ts-ignore
import daifukuan from "../../assets/daifukuan.png";
// @ts-ignore
import yifukuan from "../../assets/yifukuan.png";
// @ts-ignore
import tuihuo from "../../assets/tuihuo.png";
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
    <ScrollView style={styles.root}>
      <View style={styles.mine_header}>
        <Image style={styles.user_bg} source={user_bg} />
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
            <Image style={styles.mine_header_message_img} source={require("../../assets/message.png")} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.second_section_item}
            onPress={() => {
              navigation.navigate({
                name: "Setting"
              });
            }}
          >
            <Image style={styles.mine_header_setting_img} source={require("../../assets/setting_white.png")} />
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
          <View style={styles.first_section_item}>
            <Text>5</Text>
            <Text>优惠券</Text>
          </View>
        </View>
        <View style={styles.second_section}>
          <TouchableOpacity
            style={styles.second_section_item}
            onPress={() => {
              navigation.navigate({
                name: "Login"
              });
            }}
          >
            {/*<View style={styles.second_section_item}>*/}
            <Image style={styles.second_section_item_left_img} source={all_order} />
            <Text>全部订单</Text>
            {/*</View>*/}
          </TouchableOpacity>
          <View style={styles.second_section_item}>
            <Image style={styles.second_section_item_left_img} source={daifukuan} />
            <Text>待付款</Text>
          </View>
          <View style={styles.second_section_item}>
            <Image style={styles.second_section_item_left_img} source={yifukuan} />
            <Text>待收货</Text>
          </View>
          <View style={styles.second_section_item}>
            <Image style={styles.second_section_item_left_img} source={tuihuo} />
            <Text>退款/售后</Text>
          </View>
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
            <Image style={styles.third_section_item_left_img} source={address} />
            <Text style={styles.third_section_item_txt}>地址管理</Text>
            <Image style={styles.third_section_item_right_arrow} source={right_arrow} />
          </TouchableOpacity>
          <View style={styles.third_section_item}>
            <Image style={styles.third_section_item_left_img} source={history} />
            <Text style={styles.third_section_item_txt}>我的足迹</Text>
            <Image style={styles.third_section_item_right_arrow} source={right_arrow} />
          </View>
          <TouchableOpacity
            style={styles.third_section_item}
            onPress={() => {
              navigation.navigate({
                name: "Focus"
              });
            }}
          >
            <Image style={styles.third_section_item_left_img} source={guanzhu} />
            <Text style={styles.third_section_item_txt}>我的关注</Text>
            <Image style={styles.third_section_item_right_arrow} source={right_arrow} />
          </TouchableOpacity>

          <View style={styles.third_section_item}>
            <Image style={styles.third_section_item_left_img} source={shoucang} />
            <Text style={styles.third_section_item_txt}>我的收藏</Text>
            <Image style={styles.third_section_item_right_arrow} source={right_arrow} />
          </View>
          <View style={styles.third_section_item}>
            <Image style={styles.third_section_item_left_img} source={pingjia} />
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
            <Image style={styles.third_section_item_left_img} source={setting} />
            <Text style={styles.third_section_item_txt}>设置</Text>
            <Image style={styles.third_section_item_right_arrow} source={right_arrow} />
          </TouchableOpacity>
        </View>
        {/*<Button*/}
        {/*  title="登录"*/}
        {/*  onPress={() => {*/}
        {/*    // Pass and merge params back to home screen*/}
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
