import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
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
    navigation.setOptions({ headerShown: true, title: "优惠券列表" });
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
    "id": 27,
    "type": 0,
    "name": "全品类通用券",
    "platform": 0,
    "count": 94,
    "amount": 10.00,
    "perLimit": 10,
    "minPoint": 100.00,
    "startTime": "2022-11-07T16:00:00.000+00:00",
    "endTime": "2023-11-29T16:00:00.000+00:00",
    "useType": 0,
    "publishCount": 100,
    "useCount": 0,
    "receiveCount": 6,
    "enableTime": "2022-11-07T16:00:00.000+00:00"
  }, {
    "id": 27,
    "type": 0,
    "name": "全品类通用券",
    "platform": 0,
    "count": 94,
    "amount": 10.00,
    "perLimit": 10,
    "minPoint": 100.00,
    "startTime": "2022-11-07T16:00:00.000+00:00",
    "endTime": "2023-11-29T16:00:00.000+00:00",
    "useType": 0,
    "publishCount": 100,
    "useCount": 0,
    "receiveCount": 6,
    "enableTime": "2022-11-07T16:00:00.000+00:00"
  }, {
    "id": 28,
    "type": 0,
    "name": "手机分类专用券",
    "platform": 0,
    "count": 995,
    "amount": 100.00,
    "perLimit": 5,
    "minPoint": 1000.00,
    "startTime": "2022-11-07T16:00:00.000+00:00",
    "endTime": "2023-11-29T16:00:00.000+00:00",
    "useType": 1,
    "publishCount": 1000,
    "useCount": 0,
    "receiveCount": 5,
    "enableTime": "2022-11-07T16:00:00.000+00:00"
  }, {
    "id": 29,
    "type": 0,
    "name": "苹果手机专用券",
    "platform": 0,
    "count": 998,
    "amount": 600.00,
    "perLimit": 1,
    "minPoint": 4000.00,
    "startTime": "2022-11-07T16:00:00.000+00:00",
    "endTime": "2023-11-29T16:00:00.000+00:00",
    "useType": 2,
    "publishCount": 1000,
    "useCount": 0,
    "receiveCount": 2,
    "enableTime": "2022-11-07T16:00:00.000+00:00"
  }, {
    "id": 27,
    "type": 0,
    "name": "全品类通用券",
    "platform": 0,
    "count": 94,
    "amount": 10.00,
    "perLimit": 10,
    "minPoint": 100.00,
    "startTime": "2022-11-07T16:00:00.000+00:00",
    "endTime": "2023-11-29T16:00:00.000+00:00",
    "useType": 0,
    "publishCount": 100,
    "useCount": 0,
    "receiveCount": 6,
    "enableTime": "2022-11-07T16:00:00.000+00:00"
  }];
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <FlatList
          data={listData}
          renderItem={({ item }) => <View style={styles.item_view}>
            <View style={{ flexDirection: "row", marginBottom: 8 }}>
              <View style={styles.item_view_left}>
                <Text style={styles.item_view_left_name}>{item.name}</Text>
                {/*<Text style={styles.item_view_left_endTime}>有效期至{item.endTime}</Text>*/}
                <Text style={styles.item_view_left_endTime}>有效期至2022-11-07 16:00:00</Text>
              </View>
              <View style={styles.item_view_right}>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                  <Text style={{ fontSize: 20, color: "#fa436a" }}>￥</Text>
                  <Text style={styles.item_view_right_amount}>{item.amount}</Text>
                </View>
                <Text style={styles.item_view_right_minPoint}>满{item.minPoint}可用</Text>
              </View>
            </View>

            <View style={{ borderTopWidth: 1, borderTopColor: "#f5f5f5", width: "100%", paddingTop: 8 }}>
              <Text style={{ fontSize: 12 }}>全场通用</Text>
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
    flex: 1,
    margin: 15
  },
  item_view: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5",
    backgroundColor: "white",
    padding: 15,
    marginBottom: 5
  },
  item_view_left: {
    flex: 1
  },
  item_view_left_name: {
    fontSize: 20,
    color: "#303133"
  },
  item_view_left_endTime: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 15
  },
  item_view_right: {
    justifyContent: "center",
    alignItems: "center"
  },
  item_view_right_amount: {
    fontSize: 20,
    color: "#fa436a"
  },
  item_view_right_minPoint: {
    fontSize: 12,
    color: "#606266"
  }
});
