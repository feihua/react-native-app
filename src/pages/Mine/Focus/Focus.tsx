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
      headerShown: true, title: "我的关注",
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

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <FlatList
          data={[
            { key: "小米", url: "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20200607/5565f5a2N0b8169ae.jpg" },
            { key: "海澜之家", url: "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20200607/5a5c69b9N5d6c5696.jpg" }

          ]}
          renderItem={({ item }) => <View style={styles.item_view}>
            <Image style={styles.item_view_img} source={{ uri: item.url }} />
            <Text style={styles.item_view_title_txt}>{item.key}</Text>
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
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5",
    backgroundColor: "white",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5
  },

  item_view_img: {
    width: 103,
    height: 85,
    resizeMode: "contain"
  },
  item_view_title_txt: {
    fontSize: 16,
    color: "#303133",
    paddingLeft: 20
  }
});
