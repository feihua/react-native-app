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

  React.useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({ headerShown: true, title: "收货地址" });
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
            { key: "广东省 深圳市 福田区 东晓街道" },
            { key: "广东省 广州市 天河区 岗顶街道" }

          ]}
          renderItem={({ item }) => <View style={styles.item_view}>
            <View style={styles.item_view_left}>
              <Text style={styles.item_view_left_address}>{item.key}</Text>
              <Text style={styles.item_view_left_info}>小李 18613030352</Text>
            </View>
            <View style={styles.item_view_right}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate({
                    name: "EditAddress"
                  });
                }}
              >
                <Image style={styles.item_view_right_img} source={require("../../../assets/edit.png")} />
              </TouchableOpacity>
              <Image style={styles.item_view_right_img} source={require("../../../assets/delete.png")} />
            </View>
          </View>}
        />
      </View>
      <TouchableOpacity
        style={styles.add_address_txt}
        onPress={() => {
          navigation.navigate({
            name: "EditAddress"
          });
        }}
      >
        <Text style={{ fontSize: 16, color: "white" }}>新增地址</Text>
      </TouchableOpacity>
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
    flexDirection: "row"
  },
  item_view_left: {
    flex: 1
  },
  item_view_left_address: {
    fontSize: 15,
    color: "#303133"
  },
  item_view_left_info: {
    color: "#909399",
    fontSize: 14,
    marginTop: 10
  },
  item_view_right: {
    flexDirection: "row",
    alignItems: "center"
  },
  item_view_right_img: {
    width: 20,
    height: 22,
    margin: 10
  },
  add_address_txt: {
    margin: 15,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    backgroundColor: "#fa436a"
  }
});
