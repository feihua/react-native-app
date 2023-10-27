import React from "react";
import { StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from "react-native";
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
      <View style={styles.item_view}>
        <Text style={styles.item_view_label_txt}>用户姓名</Text>
        <TextInput style={styles.item_view_value_txt}>小李</TextInput>
      </View>
      <View style={styles.item_view}>
        <Text style={styles.item_view_label_txt}>手机号码</Text>
        <TextInput style={styles.item_view_value_txt}>18613030352</TextInput>
      </View>
      <View style={styles.item_view}>
        <Text style={styles.item_view_label_txt}>邮政编码</Text>
        <TextInput style={styles.item_view_value_txt}>518000</TextInput>
      </View>
      <View style={styles.item_view}>
        <Text style={styles.item_view_label_txt}>所在区域</Text>
        <TextInput style={styles.item_view_value_txt}>广东省 深圳市 福田区</TextInput>
      </View>
      <View style={styles.item_view}>
        <Text style={styles.item_view_label_txt}>详细地址</Text>
        <TextInput style={styles.item_view_value_txt}>东晓街道</TextInput>
      </View>
      <View style={[styles.item_view, styles.item_view_default]}>
        <Switch
          // value={true}
          // onValueChange={(val) => this.onClickSwitch(val)}
        >
        </Switch>
        <Text style={styles.item_view_label_default_txt}>设置为默认</Text>

      </View>
      <TouchableOpacity
        style={styles.edit_address_txt}
        onPress={() => {
          navigation.navigate({
            name: "Mine"
          });
        }}
      >
        <Text style={{ fontSize: 16, color: "white" }}>提交</Text>
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
  item_view: {
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5",
    backgroundColor: "white",
    padding: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  item_view_default: {
    marginVertical: 10,
    flexDirection: "row-reverse"
  },
  item_view_label_txt: {
    paddingLeft: 15,
    flex: 1,
    color: "#303133"
  },

  item_view_value_txt: {
    flex: 4
  },
  item_view_label_default_txt: {
    paddingLeft: 15,
    flex: 1,
    color: "#303133"
  },

  edit_address_txt: {
    margin: 15,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    backgroundColor: "#fa436a"
  }
});
