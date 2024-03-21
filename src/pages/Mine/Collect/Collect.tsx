import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { load } from '../../utils/Storage';
// import UserStore from '../../stores/UserStore';
// @ts-ignore


// @ts-ignore
export default ({ navigation }) => {

  React.useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerShown: true, title: "我的收藏",
      headerRight: () => (
        // <Button onPress={() => setCount((c) => c + 1)} title="Update count" />
        <Text style={{ fontSize: 16, color: "rgb(48, 49, 51)", width: 46 }}>清空</Text>
      )
    });
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

  const listData = [{
    "id": "653b74b35c01107ee33bf179",
    "memberId": 11,
    "memberNickname": "member",
    "memberIcon": "https://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/icon/github_icon_02.png",
    "productId": 41,
    "productName": "Redmi K50 天玑8100 2K柔性直屏 OIS光学防抖 67W快充 5500mAh大电量",
    "productPic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20221104/redmi_k50_01.jpg",
    "productSubTitle": "【品质好物】天玑8100，2K直屏，5500mAh大电量【Note12Pro火热抢购中】 ",
    "productPrice": "2099.00",
    "createTime": "2023-10-27T08:28:35.147+00:00"
  }, {
    "id": "653b74b05c01107ee33bf178",
    "memberId": 11,
    "memberNickname": "member",
    "memberIcon": "https://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/icon/github_icon_02.png",
    "productId": 41,
    "productName": "Redmi K50 天玑8100 2K柔性直屏 OIS光学防抖 67W快充 5500mAh大电量",
    "productPic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20221104/redmi_k50_01.jpg",
    "productSubTitle": "【品质好物】天玑8100，2K直屏，5500mAh大电量【Note12Pro火热抢购中】 ",
    "productPrice": "2099.00",
    "createTime": "2023-10-27T08:28:32.668+00:00"
  }, {
    "id": "653b735e5c01107ee33bf177",
    "memberId": 11,
    "memberNickname": "member",
    "memberIcon": "https://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/icon/github_icon_02.png",
    "productId": 44,
    "productName": "三星（SAMSUNG）500GB SSD固态硬盘 M.2接口(NVMe协议)",
    "productPic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20221108/sanxing_ssd_02.jpg",
    "productSubTitle": "【满血无缓存！进店抽百元E卡，部分型号白条三期免息】兼具速度与可靠性！读速高达3500MB/s，全功率模式！点击 ",
    "productPrice": "369.00",
    "createTime": "2023-10-27T08:22:54.030+00:00"
  }, {
    "id": "653b73455c01107ee33bf176",
    "memberId": 11,
    "memberNickname": "member",
    "memberIcon": "https://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/icon/github_icon_02.png",
    "productId": 42,
    "productName": "HUAWEI Mate 50 直屏旗舰 超光变XMAGE影像 北斗卫星消息",
    "productPic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20221104/huawei_mate50_01.jpg",
    "productSubTitle": "【华为Mate50新品上市】内置66W华为充电套装，超光变XMAGE影像,北斗卫星消息，鸿蒙操作系统3.0！立即抢购！华为新品可持续计划，猛戳》 ",
    "productPrice": "4999.00",
    "createTime": "2023-10-27T08:22:29.182+00:00"
  }, {
    "id": "653b73365c01107ee33bf175",
    "memberId": 11,
    "memberNickname": "member",
    "memberIcon": "https://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/icon/github_icon_02.png",
    "productId": 43,
    "productName": "万和（Vanward)燃气热水器天然气家用四重防冻直流变频节能全新升级增压水伺服恒温高抗风",
    "productPic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20221104/wanhe_13L_01.png",
    "productSubTitle": "【家电11.11享低价，抢到手价不高于1199】【发布种草秀享好礼！同价11.11买贵补差】爆款超一级能效零冷水】 ",
    "productPrice": "1799.00",
    "createTime": "2023-10-27T08:22:14.078+00:00"
  }, {
    "id": "653b6ae05c01107ee33bf174",
    "memberId": 11,
    "memberNickname": "member",
    "memberIcon": "https://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/icon/github_icon_02.png",
    "productId": 34,
    "productName": "小米（MI）小米电视4A 65英寸",
    "productPic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180615/5b028530N51eee7d4.jpg",
    "productSubTitle": " L65M5-AZ/L65M5-AD 2GB+8GB HDR 4K超高清 人工智能网络液晶平板电视",
    "productPrice": "3999.00",
    "createTime": "2023-10-27T07:46:40.236+00:00"
  }];
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <FlatList
          data={listData}
          renderItem={({ item }) => <View style={styles.item_view}>
            <Image style={styles.item_view_img} source={{ uri: item.productPic }} />
            <View style={styles.item_content}>
              <Text numberOfLines={1} ellipsizeMode={"tail"} style={styles.item_view_title_txt}>{item.productName}</Text>
              <Text numberOfLines={2} style={styles.item_view_desc_txt}>{item.productSubTitle}</Text>
              <Text style={styles.item_view_price_txt}>{item.productPrice}</Text>
            </View>
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
    backgroundColor: "#f5f5f5",
    flexDirection: "column"
  },
  container: {
    // flex: 1
    // paddingTop: 22
  },
  item_view: {
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 1,
    height: 145
  },

  item_view_img: {
    width: 103,
    height: 125,
    resizeMode: "contain",
    marginLeft: 15
  },
  item_content: {
    flex: 1,
    marginLeft: 15
  },
  item_view_title_txt: {
    fontSize: 16,
    color: "#303133"
  },
  item_view_desc_txt: {
    fontSize: 12,
    color: "#909399",
    marginVertical: 5
  },
  item_view_price_txt: {
    fontSize: 16,
    color: "#fa436a"
  }

});
