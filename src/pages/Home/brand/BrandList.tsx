import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
    "id": 6,
    "name": "小米",
    "firstLetter": "M",
    "sort": 500,
    "factoryStatus": 1,
    "showStatus": 1,
    "productCount": 100,
    "productCommentCount": 100,
    "logo": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20200607/5565f5a2N0b8169ae.jpg",
    "bigPic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20221108/xiaomi_banner_01.png"
  }, {
    "id": 3,
    "name": "华为",
    "firstLetter": "H",
    "sort": 100,
    "factoryStatus": 1,
    "showStatus": 1,
    "productCount": 100,
    "productCommentCount": 100,
    "logo": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20200607/5abf6f26N31658aa2.jpg",
    "bigPic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20221108/huawei_banner_01.png"
  }, {
    "id": 51,
    "name": "苹果",
    "firstLetter": "A",
    "sort": 200,
    "factoryStatus": 1,
    "showStatus": 1,
    "productCount": 55,
    "productCommentCount": 200,
    "logo": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20200607/49b30bb0377030d1.jpg",
    "bigPic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20221108/apple_banner_01.png"
  }, {
    "id": 50,
    "name": "海澜之家",
    "firstLetter": "H",
    "sort": 200,
    "factoryStatus": 1,
    "showStatus": 1,
    "productCount": 66,
    "productCommentCount": 300,
    "logo": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20200607/5a5c69b9N5d6c5696.jpg",
    "bigPic": "http://img10.360buyimg.com/cms/jfs/t1/133148/4/1605/470028/5edaf5ccEd7a687a9/e0a007631361ff75.jpg"
  }, {
    "id": 21,
    "name": "OPPO",
    "firstLetter": "O",
    "sort": 0,
    "factoryStatus": 1,
    "showStatus": 1,
    "productCount": 88,
    "productCommentCount": 500,
    "logo": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/timg(6).jpg",
    "bigPic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20221108/oppo_banner_01.png"
  }, {
    "id": 2,
    "name": "三星",
    "firstLetter": "S",
    "sort": 100,
    "factoryStatus": 1,
    "showStatus": 1,
    "productCount": 100,
    "productCommentCount": 100,
    "logo": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20200607/57201b47N7bf15715.jpg",
    "bigPic": "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20221108/sanxing_banner_01.png"
  }];

  return (
    <View style={styles.root}>
      <Image style={styles.recommend_brand_banner} source={require("../../../assets/recommend_brand_banner.png")} />
      <View style={styles.title_view}>
        <Text style={{ color: "#303133" }}>相关品牌</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={listData}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) =>

            <TouchableOpacity
              style={styles.item_view} key={item.id}
              onPress={() => {
                navigation.navigate({
                  name: "BrandDetail"
                });
              }}
            >
              <Image style={styles.recommend_brand_banner_img} source={{ uri: item.logo }} />
              <Text style={styles.recommend_brand_banner_name}>{item.name}</Text>
              <Text style={styles.recommend_brand_banner_num}>商品数据量：{item.productCount}</Text>
            </TouchableOpacity>

          }
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
    height: 240
    // resizeMode: 'contain',
  },
  title_view: {
    width: "100%",
    backgroundColor: "white",
    marginTop: 15,
    paddingVertical: 10,
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
  recommend_brand_banner_img: {
    width: "100%",
    height: 78,
    resizeMode: "contain"
  },
  recommend_brand_banner_name: {
    color: "#303133",
    fontSize: 16,
    height: 41
  },
  recommend_brand_banner_num: {
    color: "#909399",
    fontSize: 12,
    height: 20
  }

});
