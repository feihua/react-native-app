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
    navigation.setOptions({ headerShown: true, title: "通知" });
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

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <FlatList
          data={[
            { key: "新品上市，全场满199减50" },
            { key: "新品上市，全场满199减100" },
            { key: "新品上市，全场满199减150" }

          ]}
          renderItem={({ item }) => <View style={styles.item_view}>
            <Text style={styles.item_time}>2019-07-26 12:30</Text>
            <View style={styles.detail}>
              <Text style={styles.item_title}>{item.key}</Text>
              <Image style={styles.item_img} source={{ uri: "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20221104/xiaomi_12_pro_01.jpg" }} />
              <Text style={styles.item_desc}>新品上市全场2折起，新品上市全场2折起，新品上市全场2折起，新品上市全场2折起，新品上市全场2折起</Text>
              <View style={styles.go_detail}>
                <Text style={styles.item_detail}>查看详情</Text>
                <Image style={styles.go_detail_img} source={require("@images/right_arrow.png")} />
              </View>
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
    alignItems: "center"
  },
  container: {
    flex: 1,
    paddingTop: 22
  },
  item_view: {
    alignItems: "center"
  },
  item_time: {
    fontSize:13,
    margin:5
  },
  detail: {
    backgroundColor: 'white',
    margin:15,
    padding:15
  },
  item_title: {
    fontSize:16,
    color:'#303133'
  },
  item_img: {
    width:115,
    height:130
  },
  item_desc: {
    fontSize:14,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginBottom:10,
    paddingBottom:10
  },
  item_detail: {

  },
  go_detail: {
    // width: 15,
    // height:15
  },
  go_detail_img: {
    height: 15,
    width: 15,
    position: "absolute",
    right: 0
  }
});
