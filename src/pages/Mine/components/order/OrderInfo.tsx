// @flow
import * as React from "react";
import { inject, observer } from "mobx-react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AllOrder from "@images/all_order.png";
import Daifukuan from "@images/daifukuan.png";
import Yifukuan from "@images/yifukuan.png";
import Tuihuo from "@images/tuihuo.png";


/**
 * 描述：订单状态tab
 * 作者：刘飞华
 * 日期：2024/3/26 11:27
 */
const OrderInfo = (props) => {

  const { navigation, store } = props;

  return (
    <View style={styles.second_section}>
      <TouchableOpacity
        style={styles.second_section_item}
        onPress={() => {
          navigation.navigate({
            name: "Order"
          });
        }}
      >
        {/*<View style={styles.second_section_item}>*/}
        <Image style={styles.second_section_item_left_img} source={AllOrder} />
        <Text>全部订单</Text>
        {/*</View>*/}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.second_section_item}
        onPress={() => {
          navigation.navigate({
            name: "Order"
          });
        }}
      >
        <Image style={styles.second_section_item_left_img} source={Daifukuan} />
        <Text>待付款</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.second_section_item}
        onPress={() => {
          navigation.navigate({
            name: "Order"
          });
        }}
      >
        <Image style={styles.second_section_item_left_img} source={Yifukuan} />
        <Text>待收货</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.second_section_item}
        onPress={() => {
          navigation.navigate({
            name: "Order"
          });
        }}
      >
        <Image style={styles.second_section_item_left_img} source={Tuihuo} />
        <Text>退款/售后</Text>
      </TouchableOpacity>
      {/*<View style={styles.second_section_item}>*/}
      {/*  <Image style={styles.second_section_item_left_img} source={daifukuan} />*/}
      {/*  <Text>待付款</Text>*/}
      {/*</View>*/}
      {/*<View style={styles.second_section_item}>*/}
      {/*  <Image style={styles.second_section_item_left_img} source={yifukuan} />*/}
      {/*  <Text>待收货</Text>*/}
      {/*</View>*/}
      {/*<View style={styles.second_section_item}>*/}
      {/*  <Image style={styles.second_section_item_left_img} source={tuihuo} />*/}
      {/*  <Text>退款/售后</Text>*/}
      {/*</View>*/}
    </View>
  );
};

export default inject("store")(observer(OrderInfo));

const styles = StyleSheet.create({
  second_section: {
    width: "100%",
    backgroundColor: "white",
    // height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    padding: 10
  },


  second_section_item: {
    alignItems: "center"
  },
  second_section_item_left_img: {
    height: 24,
    width: 24,
    marginBottom: 5
  }

});
