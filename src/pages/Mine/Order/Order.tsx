import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
    navigation.setOptions({ headerShown: true, title: "我的订单" });
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
    "id": 76,
    "memberId": 11,
    "couponId": 28,
    "orderSn": "202305110100000008",
    "createTime": "2023-05-11T07:37:16.000+00:00",
    "memberUsername": "member",
    "totalAmount": 8998.00,
    "payAmount": 8698.00,
    "freightAmount": 0.00,
    "promotionAmount": 200.00,
    "integrationAmount": 0.00,
    "couponAmount": 100.00,
    "discountAmount": 0.00,
    "payType": 2,
    "sourceType": 1,
    "status": 3,
    "orderType": 0,
    "deliveryCompany": "顺丰快递",
    "deliverySn": "1231313",
    "autoConfirmDay": 15,
    "integration": 0,
    "growth": 0,
    "promotionInfo": "无优惠;满减优惠：满2000.00元，减200.00元",
    "receiverName": "小李",
    "receiverPhone": "18961511111",
    "receiverPostCode": "518000",
    "receiverProvince": "广东省",
    "receiverCity": "深圳市",
    "receiverRegion": "福田区",
    "receiverDetailAddress": "东晓街道",
    "confirmStatus": 1,
    "deleteStatus": 0,
    "paymentTime": "2023-05-11T07:37:18.000+00:00",
    "deliveryTime": "2023-05-11T07:37:33.000+00:00",
    "receiveTime": "2023-05-11T07:37:48.000+00:00",
    "orderItemList": [{
      "id": 113,
      "orderId": 76,
      "orderSn": "202305110100000008",
      "productId": 39,
      "productPic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20221028/xiaomi_computer_001.jpg",
      "productName": "小米 Xiaomi Book Pro 14 2022 锐龙版 2.8K超清大师屏 高端轻薄笔记本电脑",
      "productBrand": "小米",
      "productSn": "100023207945",
      "productPrice": 5999.00,
      "productQuantity": 1,
      "productSkuId": 217,
      "productSkuCode": "202210280039001",
      "productCategoryId": 54,
      "promotionName": "无优惠",
      "promotionAmount": 0.00,
      "couponAmount": 0.00,
      "integrationAmount": 0.00,
      "realAmount": 5999.00,
      "giftIntegration": 0,
      "giftGrowth": 0,
      "productAttr": "[{\"key\":\"颜色\",\"value\":\"新小米Pro 14英寸 2.8K屏\"},{\"key\":\"版本\",\"value\":\"R7 16G 512\"}]"
    }, {
      "id": 114,
      "orderId": 76,
      "orderSn": "202305110100000008",
      "productId": 40,
      "productPic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20221104/xiaomi_12_pro_01.jpg",
      "productName": "小米12 Pro 天玑版 天玑9000+处理器 5000万疾速影像 2K超视感屏 120Hz高刷 67W快充",
      "productBrand": "小米",
      "productSn": "100027789721",
      "productPrice": 2999.00,
      "productQuantity": 1,
      "productSkuId": 221,
      "productSkuCode": "202211040040001",
      "productCategoryId": 19,
      "promotionName": "满减优惠：满2000.00元，减200.00元",
      "promotionAmount": 200.00,
      "couponAmount": 100.00,
      "integrationAmount": 0.00,
      "realAmount": 2699.00,
      "giftIntegration": 0,
      "giftGrowth": 0,
      "productAttr": "[{\"key\":\"颜色\",\"value\":\"黑色\"},{\"key\":\"容量\",\"value\":\"128G\"}]"
    }]
  }, {
    "id": 75,
    "memberId": 11,
    "orderSn": "202305110100000007",
    "createTime": "2023-05-11T07:35:24.000+00:00",
    "memberUsername": "member",
    "totalAmount": 2099.00,
    "payAmount": 2099.00,
    "freightAmount": 0.00,
    "promotionAmount": 0.00,
    "integrationAmount": 0.00,
    "couponAmount": 0.00,
    "discountAmount": 0.00,
    "payType": 2,
    "sourceType": 1,
    "status": 3,
    "orderType": 0,
    "deliveryCompany": "顺丰快递",
    "deliverySn": "123131311",
    "autoConfirmDay": 15,
    "integration": 0,
    "growth": 0,
    "promotionInfo": "无优惠",
    "receiverName": "小李",
    "receiverPhone": "18961511111",
    "receiverPostCode": "518000",
    "receiverProvince": "广东省",
    "receiverCity": "深圳市",
    "receiverRegion": "福田区",
    "receiverDetailAddress": "东晓街道",
    "confirmStatus": 1,
    "deleteStatus": 0,
    "paymentTime": "2023-05-11T07:35:26.000+00:00",
    "deliveryTime": "2023-05-11T07:36:11.000+00:00",
    "receiveTime": "2023-05-11T07:36:34.000+00:00",
    "orderItemList": [{
      "id": 112,
      "orderId": 75,
      "orderSn": "202305110100000007",
      "productId": 41,
      "productPic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20221104/redmi_k50_01.jpg",
      "productName": "Redmi K50 天玑8100 2K柔性直屏 OIS光学防抖 67W快充 5500mAh大电量",
      "productBrand": "小米",
      "productSn": "100035246702",
      "productPrice": 2099.00,
      "productQuantity": 1,
      "productSkuId": 225,
      "productSkuCode": "202211040041001",
      "productCategoryId": 19,
      "promotionName": "无优惠",
      "promotionAmount": 0.00,
      "couponAmount": 0.00,
      "integrationAmount": 0.00,
      "realAmount": 2099.00,
      "giftIntegration": 0,
      "giftGrowth": 0,
      "productAttr": "[{\"key\":\"颜色\",\"value\":\"墨羽\"},{\"key\":\"容量\",\"value\":\"128G\"}]"
    }]
  }, {
    "id": 74,
    "memberId": 11,
    "orderSn": "202305110100000006",
    "createTime": "2023-05-11T07:35:05.000+00:00",
    "memberUsername": "member",
    "totalAmount": 2999.00,
    "payAmount": 2799.00,
    "freightAmount": 0.00,
    "promotionAmount": 200.00,
    "integrationAmount": 0.00,
    "couponAmount": 0.00,
    "discountAmount": 0.00,
    "payType": 2,
    "sourceType": 1,
    "status": 2,
    "orderType": 0,
    "deliveryCompany": "顺丰快递",
    "deliverySn": "123131",
    "autoConfirmDay": 15,
    "integration": 0,
    "growth": 0,
    "promotionInfo": "满减优惠：满2000.00元，减200.00元",
    "receiverName": "小李",
    "receiverPhone": "18961511111",
    "receiverPostCode": "518000",
    "receiverProvince": "广东省",
    "receiverCity": "深圳市",
    "receiverRegion": "福田区",
    "receiverDetailAddress": "东晓街道",
    "confirmStatus": 0,
    "deleteStatus": 0,
    "paymentTime": "2023-05-11T07:35:08.000+00:00",
    "deliveryTime": "2023-05-11T07:36:00.000+00:00",
    "orderItemList": [{
      "id": 111,
      "orderId": 74,
      "orderSn": "202305110100000006",
      "productId": 40,
      "productPic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20221104/xiaomi_12_pro_01.jpg",
      "productName": "小米12 Pro 天玑版 天玑9000+处理器 5000万疾速影像 2K超视感屏 120Hz高刷 67W快充",
      "productBrand": "小米",
      "productSn": "100027789721",
      "productPrice": 2999.00,
      "productQuantity": 1,
      "productSkuId": 221,
      "productSkuCode": "202211040040001",
      "productCategoryId": 19,
      "promotionName": "满减优惠：满2000.00元，减200.00元",
      "promotionAmount": 200.00,
      "couponAmount": 0.00,
      "integrationAmount": 0.00,
      "realAmount": 2799.00,
      "giftIntegration": 0,
      "giftGrowth": 0,
      "productAttr": "[{\"key\":\"颜色\",\"value\":\"黑色\"},{\"key\":\"容量\",\"value\":\"128G\"}]"
    }]
  }, {
    "id": 73,
    "memberId": 11,
    "orderSn": "202305110100000005",
    "createTime": "2023-05-11T07:34:39.000+00:00",
    "memberUsername": "member",
    "totalAmount": 5999.00,
    "payAmount": 5999.00,
    "freightAmount": 0.00,
    "promotionAmount": 0.00,
    "integrationAmount": 0.00,
    "couponAmount": 0.00,
    "discountAmount": 0.00,
    "payType": 0,
    "sourceType": 1,
    "status": 0,
    "orderType": 0,
    "autoConfirmDay": 15,
    "integration": 0,
    "growth": 0,
    "promotionInfo": "无优惠",
    "receiverName": "小李",
    "receiverPhone": "18961511111",
    "receiverPostCode": "518000",
    "receiverProvince": "广东省",
    "receiverCity": "深圳市",
    "receiverRegion": "福田区",
    "receiverDetailAddress": "东晓街道",
    "confirmStatus": 0,
    "deleteStatus": 0,
    "orderItemList": [{
      "id": 110,
      "orderId": 73,
      "orderSn": "202305110100000005",
      "productId": 37,
      "productPic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20221028/iphone14_001.jpg",
      "productName": "Apple iPhone 14 (A2884) 128GB 支持移动联通电信5G 双卡双待手机",
      "productBrand": "苹果",
      "productSn": "100038005189",
      "productPrice": 5999.00,
      "productQuantity": 1,
      "productSkuId": 201,
      "productSkuCode": "202210280037001",
      "productCategoryId": 19,
      "promotionName": "无优惠",
      "promotionAmount": 0.00,
      "couponAmount": 0.00,
      "integrationAmount": 0.00,
      "realAmount": 5999.00,
      "giftIntegration": 0,
      "giftGrowth": 0,
      "productAttr": "[{\"key\":\"颜色\",\"value\":\"午夜色\"},{\"key\":\"容量\",\"value\":\"128G\"}]"
    }]
  }, {
    "id": 72,
    "memberId": 11,
    "orderSn": "202305110100000004",
    "createTime": "2023-05-11T07:33:13.000+00:00",
    "memberUsername": "member",
    "totalAmount": 5368.00,
    "payAmount": 5368.00,
    "freightAmount": 0.00,
    "promotionAmount": 0.00,
    "integrationAmount": 0.00,
    "couponAmount": 0.00,
    "discountAmount": 0.00,
    "payType": 2,
    "sourceType": 1,
    "status": 2,
    "orderType": 0,
    "deliveryCompany": "圆通快递",
    "deliverySn": "1231434",
    "autoConfirmDay": 15,
    "integration": 0,
    "growth": 0,
    "promotionInfo": "无优惠;无优惠",
    "receiverName": "小李",
    "receiverPhone": "18961511111",
    "receiverPostCode": "518000",
    "receiverProvince": "广东省",
    "receiverCity": "深圳市",
    "receiverRegion": "福田区",
    "receiverDetailAddress": "东晓街道",
    "confirmStatus": 0,
    "deleteStatus": 0,
    "paymentTime": "2023-05-11T07:33:21.000+00:00",
    "deliveryTime": "2023-05-11T07:33:43.000+00:00",
    "orderItemList": [{
      "id": 108,
      "orderId": 72,
      "orderSn": "202305110100000004",
      "productId": 42,
      "productPic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20221104/huawei_mate50_01.jpg",
      "productName": "HUAWEI Mate 50 直屏旗舰 超光变XMAGE影像 北斗卫星消息",
      "productBrand": "华为",
      "productSn": "100035295081",
      "productPrice": 4999.00,
      "productQuantity": 1,
      "productSkuId": 229,
      "productSkuCode": "202211040042001",
      "productCategoryId": 19,
      "promotionName": "无优惠",
      "promotionAmount": 0.00,
      "couponAmount": 0.00,
      "integrationAmount": 0.00,
      "realAmount": 4999.00,
      "giftIntegration": 0,
      "giftGrowth": 0,
      "productAttr": "[{\"key\":\"颜色\",\"value\":\"曜金黑\"},{\"key\":\"容量\",\"value\":\"128G\"}]"
    }, {
      "id": 109,
      "orderId": 72,
      "orderSn": "202305110100000004",
      "productId": 44,
      "productPic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20221108/sanxing_ssd_02.jpg",
      "productName": "三星（SAMSUNG）500GB SSD固态硬盘 M.2接口(NVMe协议)",
      "productBrand": "三星",
      "productSn": "100018768480",
      "productPrice": 369.00,
      "productQuantity": 1,
      "productSkuId": 235,
      "productSkuCode": "202211080044001",
      "productCategoryId": 55,
      "promotionName": "无优惠",
      "promotionAmount": 0.00,
      "couponAmount": 0.00,
      "integrationAmount": 0.00,
      "realAmount": 369.00,
      "giftIntegration": 0,
      "giftGrowth": 0,
      "productAttr": "[{\"key\":\"颜色\",\"value\":\"新品980｜NVMe PCIe3.0*4\"},{\"key\":\"版本\",\"value\":\"512GB\"}]"
    }]
  }];
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <FlatList
          data={listData}
          renderItem={({ item }) => <View style={styles.item_view}>
            <View style={styles.item_view_first_item}>
              <Text style={styles.item_view_first_item_time}>2023-05-11 07:33:21</Text>
              <View style={styles.item_view_first_item_right}>
                <Text style={styles.item_view_first_item_status}>交易完成</Text>
                <Image style={styles.item_view_first_item_delete_icon} source={require("@images/delete.png")} />
              </View>
            </View>
            <View style={styles.item_view_second_item}>
              <Image style={styles.item_view_second_item_img} source={{ uri: "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20221104/huawei_mate50_01.jpg" }} />
              <View style={styles.item_view_second_item_right}>
                <Text numberOfLines={1} ellipsizeMode={"tail"} style={styles.item_view_title_txt}>小米12 Pro 天玑版 天玑9000+处理器 5000万疾速影像 2K超视感屏 120Hz高刷 67W快充</Text>
                <Text numberOfLines={2} style={styles.item_view_desc_txt}>颜色:新小米Pro 14英寸 2.8K屏;版本:R7 16G 512; x 1颜色:新小米Pro 14英寸 2.8K屏;</Text>
                <Text style={styles.item_view_price_txt}>￥5999</Text>
              </View>
            </View>
            <View style={styles.item_view_third_item}>
              <Text style={{ fontSize: 13, color: "#303133" }}>￥5999</Text>
              <Text style={{ fontSize: 13, color: "#909399" }}>件商品 实付</Text>
              <Text style={{ fontSize: 13, color: "#303133" }}>1</Text>
              <Text style={{ fontSize: 13, color: "#909399" }}>共</Text>
            </View>
            <View style={styles.item_view_four_item}>
              <TouchableOpacity
                style={styles.immediate_payment}
                // onPress={}
              >
                <Text style={styles.immediate_payment_Txt}>立即付款</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.immediate_payment}
                // onPress={}
              >
                <Text style={styles.other_Txt}>取消订单</Text>
              </TouchableOpacity>
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
    flex: 1
    // paddingTop: 22
  },
  item_view: {
    backgroundColor: "white",
    padding: 15,
    marginTop: 5
  },
  item_view_first_item: {
    flexDirection: "row",
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5",
    paddingBottom: 5,
    height: 41
  },
  item_view_first_item_time: {
    fontSize: 14,
    color: "#303133",
    flex: 1
  },
  item_view_first_item_right: {
    flexDirection: "row"
  },
  item_view_first_item_status: {
    fontSize: 14,
    color: "#fa436a",
    marginRight: 15
  },
  item_view_first_item_delete_icon: {
    width: 20,
    height: 22
  },
  item_view_second_item: {
    flexDirection: "row",
    marginTop: 5,
    height: 82
  },
  item_view_second_item_img: {
    width: 62,
    height: 62,
    resizeMode: "contain"
  },
  item_view_second_item_right: {
    flex: 1,
    // width:'100%
    marginLeft: 5

  },
  item_view_title_txt: {
    fontSize: 15,
    color: "#303133",
    height: 20
  },
  item_view_desc_txt: {
    fontSize: 13,
    color: "#909399",
    marginVertical: 5
  },
  item_view_price_txt: {
    fontSize: 15,
    color: "#303133",
    height: 20
  },
  item_view_third_item: {
    flexDirection: "row-reverse",
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5",
    paddingBottom: 5,
    height: 41
  },
  item_view_four_item: {
    flexDirection: "row-reverse",
    marginTop: 8,
    alignItems: "center",
    height: 41
  },
  immediate_payment: {
    borderRadius: 25,
    backgroundColor: "#fff9f9",
    // color: '#fa436a',
    // width: 80,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: "#f5f5f5"
  },
  immediate_payment_Txt: {
    color: "#fa436a",
    padding: 8
  },
  other_Txt: {
    color: "#303133",
    padding: 8
  }
});
