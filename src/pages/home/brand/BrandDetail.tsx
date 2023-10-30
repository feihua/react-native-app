import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { load } from '../../utils/Storage';
// import UserStore from '../../stores/UserStore';
// @ts-ignore
import icon_logo_main from "../../assets/icon_main_logo.png";

// @ts-ignore
export default ({ navigation }) => {

  // const navigation = useNavigation<StackNavigationProp<any>>();

  React.useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({ headerShown: true, title: "推荐品牌列表" });
  }, [navigation]);
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
    "id": 26,
    "brandId": 3,
    "productCategoryId": 19,
    "feightTemplateId": 0,
    "productAttributeCategoryId": 3,
    "name": "华为 HUAWEI P20 ",
    "pic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/5ac1bf58Ndefaac16.jpg",
    "productSn": "6946605",
    "deleteStatus": 0,
    "publishStatus": 1,
    "newStatus": 1,
    "recommandStatus": 1,
    "verifyStatus": 0,
    "sort": 100,
    "sale": 100,
    "price": 3788.00,
    "promotionPrice": 3659.00,
    "giftGrowth": 3788,
    "giftPoint": 3788,
    "usePointLimit": 0,
    "subTitle": "AI智慧全面屏 6GB +64GB 亮黑色 全网通版 移动联通电信4G手机 双卡双待手机 双卡双待",
    "originalPrice": 4288.00,
    "stock": 1000,
    "lowStock": 0,
    "unit": "件",
    "weight": 0.00,
    "previewStatus": 1,
    "serviceIds": "2,3,1",
    "keywords": "",
    "note": "",
    "albumPics": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/5ab46a3cN616bdc41.jpg,http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/5ac1bf5fN2522b9dc.jpg",
    "detailTitle": "",
    "promotionStartTime": "2023-01-10T07:49:38.000+00:00",
    "promotionEndTime": "2023-01-30T16:00:00.000+00:00",
    "promotionPerLimit": 0,
    "promotionType": 1,
    "brandName": "华为",
    "productCategoryName": "手机通讯"
  }, {
    "id": 42,
    "brandId": 3,
    "productCategoryId": 19,
    "feightTemplateId": 0,
    "productAttributeCategoryId": 3,
    "name": "HUAWEI Mate 50 直屏旗舰 超光变XMAGE影像 北斗卫星消息",
    "pic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20221104/huawei_mate50_01.jpg",
    "productSn": "100035295081",
    "deleteStatus": 0,
    "publishStatus": 1,
    "newStatus": 0,
    "recommandStatus": 0,
    "verifyStatus": 0,
    "sort": 0,
    "sale": 0,
    "price": 4999.00,
    "giftGrowth": 0,
    "giftPoint": 0,
    "usePointLimit": 0,
    "subTitle": "【华为Mate50新品上市】内置66W华为充电套装，超光变XMAGE影像,北斗卫星消息，鸿蒙操作系统3.0！立即抢购！华为新品可持续计划，猛戳》 ",
    "originalPrice": 4999.00,
    "stock": 1000,
    "lowStock": 0,
    "unit": "",
    "weight": 0.00,
    "previewStatus": 0,
    "serviceIds": "",
    "keywords": "",
    "note": "",
    "albumPics": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20221104/huawei_mate50_02.jpg",
    "detailTitle": "",
    "promotionPerLimit": 0,
    "promotionType": 0,
    "brandName": "华为",
    "productCategoryName": "手机通讯"
  }];

  return (
    <View style={styles.root}>
      <Image style={styles.recommend_brand_banner} source={{ uri: "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20221108/huawei_banner_01.png" }} />
      <View style={styles.title_view}>
        <Image style={styles.brand_logo} source={{ uri: "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20200607/5abf6f26N31658aa2.jpg" }} />
        <View>
          <Text style={{ color: "#303133" }}>华为</Text>
          <Text style={{ color: "#909399" }}>品牌首字母：H</Text>
        </View>
        <Image style={styles.love1_img} source={require("../../../assets/love1.png")} />
      </View>
      <View style={styles.brand_story_title}>
        <Text style={{ color: "#303133" }}>品牌故事</Text>
      </View>
      <View style={styles.brand_story_body}>
        <Text style={{
          color: "#909399",
          fontSize: 12
        }}>荣耀品牌成立于2013年,是华为旗下手机双品牌之一。荣耀以“创新、品质、服务”为核心战略,为全球年轻人提供潮酷的全场景智能化体验,打造年轻人向往的先锋文化和潮流生活方式</Text>
      </View>
      <View style={styles.product_view_title}>
        <Text style={{ color: "#303133" }}>相关商品</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={listData}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <View style={styles.item_view} key={item.id}>
            <Image style={styles.product_pic_img} source={{ uri: item.pic }} />
            <Text numberOfLines={1} style={styles.product_name}>{item.name}</Text>
            <Text numberOfLines={2} style={styles.product_desc}>{item.subTitle}</Text>
            <View style={{flexDirection:'row', marginTop:3}}>
              <Text style={styles.product_price}>{item.price}</Text>
              <Text style={styles.product_sale}>已售{item.sale}</Text>
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
  recommend_brand_banner: {
    width: "100%",
    height: 200,
    resizeMode: "contain"
  },
  title_view: {
    width: "100%",
    backgroundColor: "white",
    marginTop: 15,
    flexDirection: "row",
    height: 75,
    alignItems: "center",
    padding: 15,
    justifyContent: "space-around"
  },
  brand_logo: {
    width: 109,
    height: 36
  },
  love1_img: {
    width: 41,
    height: 43,
    resizeMode: "contain"
  },
  brand_story_title: {
    width: "100%",
    height: 41,
    backgroundColor: "white",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  brand_story_body: {
    backgroundColor: "white",
    paddingTop: 24,
    paddingBottom: 16
  },
  product_view_title: {
    marginTop: 10,
    height: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 1
    // paddingTop: 22
  },
  item_view: {
    backgroundColor: "white",
    padding: 15,
    flex: 1
    // marginTop: 5
  },
  product_pic_img: {
    width: "100%",
    height: 171,
    resizeMode: "contain"
  },
  product_name: {
    color: "#303133",
    fontSize: 16,
  },
  product_desc: {
    color: "#909399",
    fontSize: 12,
  },
  product_price:{
    flex:1,
    fontSize:16,
    color: "#fa436a",
  },
  product_sale:{

  }

});
