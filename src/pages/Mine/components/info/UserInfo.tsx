// @flow
import * as React from "react";
import { inject, observer } from "mobx-react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


/**
 * 描述：会员积分,优惠券,成长值
 * 作者：刘飞华
 * 日期：2024/3/26 11:18
 */
const UserInfo = (props) => {

  const { navigation, store } = props;

  return (
    <View style={styles.first_section}>
      <View style={styles.first_section_item}>
        <Text>{store.user.data.integration}</Text>
        <Text>积分</Text>
      </View>
      <View style={styles.first_section_item}>
        <Text>{store.user.data.growth}</Text>
        <Text>成长值</Text>
      </View>
      <TouchableOpacity
        style={styles.first_section_item}
        onPress={() => {
          // queryUserInfo1()
          // navigation.navigate({
          //   name: "Coupon"
          // });
        }}
      >
        <Text>{store.user.data.couponCount}</Text>
        <Text>优惠券</Text>
      </TouchableOpacity>
    </View>
  );
};

export default inject("store")(observer(UserInfo));

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: "#f5f5f5",
    flexDirection: "column"
  },

  first_section_item: {
    alignItems: "center"
  },

  first_section: {
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15
  }
});
