import React, { useEffect } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { load } from '../../utils/Storage';
// import UserStore from '../../stores/UserStore';
// @ts-ignore
import icon_logo_main from "../../assets/icon_main_logo.png";
import { get, request } from "../../utils/request";

// @ts-ignore
export default ({ navigation }) => {

  // const navigation = useNavigation<StackNavigationProp<any>>();

  useEffect(() => {
    requestArticleDetail(1).then(r => console.log(r))
  }, []);

  const requestArticleDetail = async (id: number) => {
    try {
      const params = {
        id: id,
      };
      const { data } = await get('/api/category/queryProductCateList', params);

      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {

    }
  }
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
      <View style={styles.header}>
        <Text style={{ fontSize: 16, color: "black" }}>分类</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.left}>
          <FlatList
            data={[
              { key: "服装服饰1" },
              { key: "手机数码1" },
              { key: "家用电器1" },
              { key: "家具家装1" },
              { key: "汽车用品1" },
              { key: "电脑办公1" }
            ]}
            renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
          />
        </View>
        <View style={styles.right}>
          <TouchableOpacity
            style={styles.right_item}
            onPress={() => {
              navigation.navigate({
                name: "ProductList"
              });
            }}
          >
            <Image style={styles.right_img} source={({ uri: "https://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20221028/pad_category_01.jpg" })} />
            <Text>平板电脑</Text>
          </TouchableOpacity>
          {/*<View style={styles.right_item}>*/}
          {/*  <Image style={styles.right_img} source={({ uri: "https://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20221028/pad_category_01.jpg" })} />*/}
          {/*  <Text>平板电脑</Text>*/}
          {/*</View>*/}
          <View style={styles.right_item}>
            <Image style={styles.right_img} source={({ uri: "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20190519/5ac48d27N3f5bb821.jpg" })} />
            <Text>手机通讯</Text>
          </View>
          <View style={styles.right_item}>
            <Image style={styles.right_img} source={({ uri: "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20190519/5ac48672N11cf61fe.jpg" })} />
            <Text>手机配件</Text>
          </View>
          <View style={styles.right_item}>
            <Image style={styles.right_img} source={({ uri: "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20190519/5a167859N01d8198b.jpg" })} />
            <Text>影音娱乐</Text>
          </View>
          <View style={styles.right_item}>
            <Image style={styles.right_img} source={({ uri: "https://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20190519/5a1676e9N1ba70a81.jpg" })} />
            <Text>数码配件</Text>
          </View>
        </View>
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
  header: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    height: 44
  },
  body: {
    flexDirection: "row",
    height: "100%"
  },

  left: {
    flex: 2,
    // paddingTop: 22,
    backgroundColor: "white"
  },
  item: {
    padding: 10,
    fontSize: 14,
    height: 44,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  right: {
    marginLeft: 10,
    marginTop: 10,
    flex: 6,
    backgroundColor: "white",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 15
  },
  right_item: {
    width: 88,
    height: 97
  },
  right_img: {
    width: 70,
    height: 70
  }

});
