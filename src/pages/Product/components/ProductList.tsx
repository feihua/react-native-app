import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { load } from '../../utils/Storage';
// import UserStore from '../../stores/UserStore';
// @ts-ignore
import icon_logo_main from "../../assets/icon_main_logo.png";

// @ts-ignore
export const ProductList = ({ navigation }) => {

  React.useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerShown: true, title: "商品列表"
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
    "id": 27,
    "brandId": 6,
    "productCategoryId": 19,
    "feightTemplateId": 0,
    "productAttributeCategoryId": 3,
    "name": "小米8 全面屏游戏智能手机 6GB+64GB 黑色 全网通4G 双卡双待",
    "pic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180615/xiaomi.jpg",
    "productSn": "7437788",
    "deleteStatus": 0,
    "publishStatus": 1,
    "newStatus": 1,
    "recommandStatus": 1,
    "verifyStatus": 0,
    "sort": 0,
    "sale": 99,
    "price": 2699.00,
    "giftGrowth": 2699,
    "giftPoint": 2699,
    "usePointLimit": 0,
    "subTitle": "骁龙845处理器，红外人脸解锁，AI变焦双摄，AI语音助手小米6X低至1299，点击抢购",
    "originalPrice": 2699.00,
    "stock": 100,
    "lowStock": 0,
    "unit": "",
    "weight": 0.00,
    "previewStatus": 0,
    "serviceIds": "1",
    "keywords": "",
    "note": "",
    "albumPics": "",
    "detailTitle": "",
    "promotionPerLimit": 0,
    "promotionType": 3,
    "brandName": "小米",
    "productCategoryName": "手机通讯"
  }, {
    "id": 28,
    "brandId": 6,
    "productCategoryId": 19,
    "feightTemplateId": 0,
    "productAttributeCategoryId": 3,
    "name": "小米 红米5A 全网通版 3GB+32GB 香槟金 移动联通电信4G手机 双卡双待",
    "pic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180615/5a9d248cN071f4959.jpg",
    "productSn": "7437789",
    "deleteStatus": 0,
    "publishStatus": 1,
    "newStatus": 1,
    "recommandStatus": 1,
    "verifyStatus": 0,
    "sort": 0,
    "sale": 98,
    "price": 649.00,
    "giftGrowth": 649,
    "giftPoint": 649,
    "usePointLimit": 0,
    "subTitle": "8天超长待机，137g轻巧机身，高通骁龙处理器小米6X低至1299，点击抢购",
    "originalPrice": 649.00,
    "stock": 100,
    "lowStock": 0,
    "unit": "",
    "weight": 0.00,
    "previewStatus": 0,
    "serviceIds": "",
    "keywords": "",
    "note": "",
    "albumPics": "",
    "detailTitle": "",
    "promotionPerLimit": 0,
    "promotionType": 4,
    "brandName": "小米",
    "productCategoryName": "手机通讯"
  }, {
    "id": 29,
    "brandId": 51,
    "productCategoryId": 19,
    "feightTemplateId": 0,
    "productAttributeCategoryId": 3,
    "name": "Apple iPhone 8 Plus 64GB 红色特别版 移动联通电信4G手机",
    "pic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180615/5acc5248N6a5f81cd.jpg",
    "productSn": "7437799",
    "deleteStatus": 0,
    "publishStatus": 1,
    "newStatus": 1,
    "recommandStatus": 1,
    "verifyStatus": 0,
    "sort": 0,
    "sale": 97,
    "price": 5499.00,
    "promotionPrice": 4799.00,
    "giftGrowth": 5499,
    "giftPoint": 5499,
    "usePointLimit": 0,
    "subTitle": "【限时限量抢购】Apple产品年中狂欢节，好物尽享，美在智慧！速来 >> 勾选[保障服务][原厂保2年]，获得AppleCare+全方位服务计划，原厂延保售后无忧。",
    "originalPrice": 5499.00,
    "stock": 100,
    "lowStock": 0,
    "unit": "",
    "weight": 0.00,
    "previewStatus": 0,
    "serviceIds": "1,2,3",
    "keywords": "",
    "note": "",
    "albumPics": "",
    "detailTitle": "",
    "promotionStartTime": "2020-05-04T07:12:54.000+00:00",
    "promotionEndTime": "2020-05-29T16:00:00.000+00:00",
    "promotionPerLimit": 0,
    "promotionType": 1,
    "brandName": "苹果",
    "productCategoryName": "手机通讯"
  }, {
    "id": 37,
    "brandId": 51,
    "productCategoryId": 19,
    "feightTemplateId": 0,
    "productAttributeCategoryId": 3,
    "name": "Apple iPhone 14 (A2884) 128GB 支持移动联通电信5G 双卡双待手机",
    "pic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20221028/iphone14_001.jpg",
    "productSn": "100038005189",
    "deleteStatus": 0,
    "publishStatus": 1,
    "newStatus": 0,
    "recommandStatus": 0,
    "verifyStatus": 0,
    "sort": 200,
    "sale": 0,
    "price": 5999.00,
    "giftGrowth": 0,
    "giftPoint": 0,
    "usePointLimit": 0,
    "subTitle": "【11.11大爱超大爱】指定iPhone14产品限时限量领券立减601元！！！部分iPhone产品现货抢购确认收货即送原厂手机壳10元优惠券！！！猛戳 ",
    "originalPrice": 5999.00,
    "stock": 1000,
    "lowStock": 0,
    "unit": "",
    "weight": 208.00,
    "previewStatus": 0,
    "serviceIds": "1,2,3",
    "keywords": "",
    "note": "",
    "albumPics": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20221028/iphone14_002.jpg,http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20221028/iphone14_003.jpg,http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20221028/iphone14_004.jpg",
    "detailTitle": "",
    "promotionPerLimit": 0,
    "promotionType": 0,
    "brandName": "苹果",
    "productCategoryName": "手机通讯"
  }, {
    "id": 40,
    "brandId": 6,
    "productCategoryId": 19,
    "feightTemplateId": 0,
    "productAttributeCategoryId": 3,
    "name": "小米12 Pro 天玑版 天玑9000+处理器 5000万疾速影像 2K超视感屏 120Hz高刷 67W快充",
    "pic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20221104/xiaomi_12_pro_01.jpg",
    "productSn": "100027789721",
    "deleteStatus": 0,
    "publishStatus": 1,
    "newStatus": 0,
    "recommandStatus": 1,
    "verifyStatus": 0,
    "sort": 0,
    "sale": 0,
    "price": 2999.00,
    "giftGrowth": 0,
    "giftPoint": 0,
    "usePointLimit": 0,
    "subTitle": "天玑9000+处理器、5160mAh大电量、2KAmoled超视感屏【点击购买小米11Ultra，戳】 ",
    "originalPrice": 2999.00,
    "stock": 500,
    "lowStock": 0,
    "unit": "",
    "weight": 0.00,
    "previewStatus": 0,
    "serviceIds": "",
    "keywords": "",
    "note": "",
    "albumPics": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20221104/xiaomi_12_pro_02.jpg",
    "detailTitle": "",
    "promotionPerLimit": 0,
    "promotionType": 4,
    "brandName": "小米",
    "productCategoryName": "手机通讯"
  }];
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <FlatList
          data={listData}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <View style={styles.item_view} key={item.id}>
            <Image style={styles.item_view_img} source={{ uri: item.pic }} />
            <Text numberOfLines={1} style={styles.item_view_title_txt}>{item.name}</Text>
            <Text numberOfLines={2} style={styles.item_view_desc_txt}>{item.subTitle}</Text>
            <View style={styles.item_view_detail}>
              <Text style={styles.item_view_price_txt}>￥{item.price}</Text>
              <Text style={styles.item_view_date_txt}>已售：{item.sale}</Text>
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
    flexDirection: "column",
  },
  container: {
    flex: 1,

  },
  item_view: {
    backgroundColor: "white",
    flex: 1,
    padding:15
  },

  item_view_img: {
    width: 165,
    height: 171,
    resizeMode: "contain"
    // marginLeft: 15
  },
  item_content: {
    // flex: 1,
    // marginLeft: 15
  },
  item_view_title_txt: {
    fontSize: 16,
    color: "#303133"
  },
  item_view_desc_txt: {
    fontSize: 14,
    color: "#909399",
    marginVertical: 5
  },
  item_view_detail: {
    flexDirection: "row",
    alignItems: "center"
  },
  item_view_price_txt: {
    fontSize: 16,
    color: "#fa436a"
  },
  item_view_date_txt: {
    fontSize: 12,
    color: "#909399",
    position: "absolute",
    right: 0
  }
});
