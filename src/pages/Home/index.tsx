import React from "react";
import { Image, StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity } from "react-native";
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { load } from '../../utils/Storage';
// import UserStore from '../../stores/UserStore';
// @ts-ignore
import icon_logo_main from "../../assets/icon_main_logo.png";
// @ts-ignore
import scan from "../../assets/scan.png";
// @ts-ignore
import message from "../../assets/message.png";
// @ts-ignore
import new_product_banner from "../../assets/new_product_banner.png";
// @ts-ignore
import icon_home_brand from "../../assets/icon_home_brand.png";
// @ts-ignore
import right_arrow from "../../assets/right_arrow.png";
// @ts-ignore
import icon_flash_promotion from "../../assets/icon_flash_promotion.png";
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
      <View style={styles.header}>
        <View style={styles.header_img_view}>
          <Image style={styles.header_img} source={scan} />
        </View>
        <View style={styles.search_view}>
          <TextInput
            style={[styles.search_input]}
            placeholderTextColor="white"
            placeholder="请输入商品 如：手机"
            // autoFocus={false}
            textAlign={"center"}
          />
        </View>
        <View style={styles.header_img_view}>
          <Image style={styles.header_img} source={message} />
        </View>

      </View>
      <View style={styles.banner}>
        <Image style={styles.banner_img} source={new_product_banner} />
      </View>
      <View style={styles.subject}>
        <View style={styles.subject_item}>
          <Image style={styles.subject_item_img} source={require("../../assets/c3.png")} />
          <Text>专题</Text>
        </View>
        <View style={styles.subject_item}>
          <Image style={styles.subject_item_img} source={require("../../assets/c5.png")} />
          <Text>话题</Text>
        </View>
        <View style={styles.subject_item}>
          <Image style={styles.subject_item_img} source={require("../../assets/c6.png")} />
          <Text>优选</Text>
        </View>
        <View style={styles.subject_item}>
          <Image style={styles.subject_item_img} source={require("../../assets/c7.png")} />
          <Text>特惠</Text>
        </View>
      </View>
      <View style={styles.brand}>
        <TouchableOpacity
          style={styles.brand_item}
          onPress={() => {
            navigation.navigate({
              name: "BrandList"
            });
          }}
        >
          <Image style={styles.brand_item_img} source={icon_home_brand} />
          <View style={styles.brand_item_view}>
            <Text style={styles.brand_item_view_tx1}>品牌制造商直供</Text>
            <Text style={styles.brand_item_view_tx2}>工厂直达消费者,剔除商品溢价</Text>
          </View>
          <Image style={styles.brand_item_right_arrow} source={right_arrow} />
        </TouchableOpacity>
        <View style={styles.brand_item_body}>
          <View style={styles.brand_item_body_view}>
            <Image style={styles.brand_item_body_view_img} source={{ uri: "https://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20200607/5565f5a2N0b8169ae.jpg" }} />
            <Text style={styles.font_size16}>小米</Text>
            <Text style={styles.font_size12}>商品数量：100</Text>
          </View>
          <View style={styles.brand_item_body_view}>
            <Image style={styles.brand_item_body_view_img} source={{ uri: "https://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20200607/5abf6f26N31658aa2.jpg" }} />
            <Text style={styles.font_size16}>华为</Text>
            <Text style={styles.font_size12}>商品数量：1000</Text>
          </View>
        </View>
      </View>
      <View style={styles.brand}>
        <View style={styles.brand_item}>
          <Image style={styles.brand_item_img} source={icon_flash_promotion} />
          <View style={styles.brand_item_view}>
            <Text style={styles.brand_item_view_tx1}>秒杀专区</Text>
            <Text style={styles.brand_item_view_tx2}>下一场 12:00:00 开始</Text>
          </View>
          <Image style={styles.brand_item_right_arrow} source={right_arrow} />
        </View>
        <View style={styles.brand_item_body}>
          <View style={styles.brand_item_body_view}>
            <Image style={styles.brand_item_body_view_img} source={{ uri: "https://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20200607/5565f5a2N0b8169ae.jpg" }} />
            <Text style={styles.font_size16}>小米</Text>
            <Text style={styles.font_size12}>商品数量：100</Text>
          </View>
          <View style={styles.brand_item_body_view}>
            <Image style={styles.brand_item_body_view_img} source={{ uri: "https://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20200607/5abf6f26N31658aa2.jpg" }} />
            <Text style={styles.font_size16}>华为</Text>
            <Text style={styles.font_size12}>商品数量：1000</Text>
          </View>
        </View>
      </View>
      <View style={styles.brand}>
        <View style={styles.brand_item}>
          <Image style={styles.brand_item_img} source={icon_flash_promotion} />
          <View style={styles.brand_item_view}>
            <Text style={styles.brand_item_view_tx1}>新鲜好物</Text>
            <Text style={styles.brand_item_view_tx2}>为你寻觅世间好物</Text>
          </View>
          <Image style={styles.brand_item_right_arrow} source={right_arrow} />
        </View>
        <View style={styles.brand_item_body}>
          <View style={styles.brand_item_body_view}>
            <Image style={styles.brand_item_body_view_img} source={{ uri: "https://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20200607/5565f5a2N0b8169ae.jpg" }} />
            <Text style={styles.font_size16}>小米</Text>
            <Text style={styles.font_size12}>商品数量：100</Text>
          </View>
          <View style={styles.brand_item_body_view}>
            <Image style={styles.brand_item_body_view_img} source={{ uri: "https://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20200607/5abf6f26N31658aa2.jpg" }} />
            <Text style={styles.font_size16}>华为</Text>
            <Text style={styles.font_size12}>商品数量：1000</Text>
          </View>
        </View>
      </View>
      <View style={styles.brand}>
        <View style={styles.brand_item}>
          <Image style={styles.brand_item_img} source={icon_flash_promotion} />
          <View style={styles.brand_item_view}>
            <Text style={styles.brand_item_view_tx1}>人气推荐</Text>
            <Text style={styles.brand_item_view_tx2}>大家都赞不绝口的</Text>
          </View>
          <Image style={styles.brand_item_right_arrow} source={right_arrow} />
        </View>
        <View style={styles.brand_item_body}>
          <View style={styles.brand_item_body_view}>
            <Image style={styles.brand_item_body_view_img} source={{ uri: "https://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20200607/5565f5a2N0b8169ae.jpg" }} />
            <Text style={styles.font_size16}>小米</Text>
            <Text style={styles.font_size12}>商品数量：100</Text>
          </View>
          <View style={styles.brand_item_body_view}>
            <Image style={styles.brand_item_body_view_img} source={{ uri: "https://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20200607/5abf6f26N31658aa2.jpg" }} />
            <Text style={styles.font_size16}>华为</Text>
            <Text style={styles.font_size12}>商品数量：1000</Text>
          </View>
        </View>
      </View>
      <View style={styles.brand}>
        <View style={styles.brand_item}>
          <Image style={styles.brand_item_img} source={icon_flash_promotion} />
          <View style={styles.brand_item_view}>
            <Text style={styles.brand_item_view_tx1}>猜你喜欢</Text>
            <Text style={styles.brand_item_view_tx2}>你喜欢的都在这里了</Text>
          </View>
          <Image style={styles.brand_item_right_arrow} source={right_arrow} />
        </View>
        <View style={styles.brand_item_body}>
          <View style={styles.brand_item_body_view}>
            <Image style={styles.brand_item_body_view_img} source={{ uri: "https://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20200607/5565f5a2N0b8169ae.jpg" }} />
            <Text style={styles.font_size16}>小米</Text>
            <Text style={styles.font_size12}>商品数量：100</Text>
          </View>
          <View style={styles.brand_item_body_view}>
            <Image style={styles.brand_item_body_view_img} source={{ uri: "https://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20200607/5abf6f26N31658aa2.jpg" }} />
            <Text style={styles.font_size16}>华为</Text>
            <Text style={styles.font_size12}>商品数量：1000</Text>
          </View>
        </View>
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
  },
  header: {
    height: 44,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "rgb(203, 87, 60)"
  },
  header_img_view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  search_view: {
    flex: 4
  },
  header_img: {
    height: 30,
    width: 30
  },
  search_input: {
    flex: 4

  },
  banner: {
    marginTop: 5,
    height: 200,
    width: "100%"
  },
  banner_img: {
    height: 200,
    width: "100%"
  },
  subject: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    padding: 20
  },
  subject_item: {
    alignItems: "center"
  },
  subject_item_img: {
    height: 44,
    width: 44,
    marginBottom: 8
  },
  brand: {
    marginTop: 10,
    backgroundColor: "white"
  },
  brand_item: {
    padding: 10,
    alignItems: "center",
    flexDirection: "row"
  },
  brand_item_img: {
    height: 40,
    width: 40
  },
  brand_item_view: {
    marginLeft: 10
  },
  brand_item_view_tx1: {
    fontSize: 17
  },
  brand_item_view_tx2: {
    fontSize: 12,
    color: "#909399"
  },
  brand_item_right_arrow: {
    height: 19,
    width: 17,
    position: "absolute",
    right: 20
  },

  brand_item_body: {
    padding: 10,
    // alignItems: "center",
    flexDirection: "row"
  },
  brand_item_body_view: {
    flex: 1
  },
  brand_item_body_view_img:{
    width:160,
    height:75,
    resizeMode: "contain"
  },
  font_size16:{
    fontSize:16
  },
  font_size12:{
    fontSize:12
  }

});
