// @flow
import * as React from "react";
import { inject, observer } from "mobx-react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Address from "@images/addresss.png";
import right_arrow from "@images/right_arrow.png";
import History from "@images/history.png";
import GuanZhu from "@images/guanzhu.png";
import Shoucang from "@images/shoucang.png";
import Pingjia from "@images/pingjia.png";
import Setting from "@images/setting.png";

/**
 * 描述：其它信息
 * 作者：刘飞华
 * 日期：2024/3/26 11:19
 */
const OterInfo = (props) => {

  const { navigation, store } = props;

  return (
    <View style={styles.third_section}>
      <TouchableOpacity
        style={styles.third_section_item}
        onPress={() => {
          navigation.navigate({
            name: "Address"
          });
        }}
      >
        <Image style={styles.third_section_item_left_img} source={Address} />
        <Text style={styles.third_section_item_txt}>地址管理</Text>
        <Image style={styles.third_section_item_right_arrow} source={right_arrow} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.third_section_item}
        onPress={() => {
          navigation.navigate({
            name: "History"
          });
        }}
      >
        <Image style={styles.third_section_item_left_img} source={History} />
        <Text style={styles.third_section_item_txt}>我的足迹</Text>
        <Image style={styles.third_section_item_right_arrow} source={right_arrow} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.third_section_item}
        onPress={() => {
          navigation.navigate({
            name: "Focus"
          });
        }}
      >
        <Image style={styles.third_section_item_left_img} source={GuanZhu} />
        <Text style={styles.third_section_item_txt}>我的关注</Text>
        <Image style={styles.third_section_item_right_arrow} source={right_arrow} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.third_section_item}
        onPress={() => {
          navigation.navigate({
            name: "Collect"
          });
        }}
      >
        <Image style={styles.third_section_item_left_img} source={Shoucang} />
        <Text style={styles.third_section_item_txt}>我的收藏</Text>
        <Image style={styles.third_section_item_right_arrow} source={right_arrow} />
      </TouchableOpacity>
      <View style={styles.third_section_item}>
        <Image style={styles.third_section_item_left_img} source={Pingjia} />
        <Text style={styles.third_section_item_txt}>我的评价</Text>
        <Image style={styles.third_section_item_right_arrow} source={right_arrow} />
      </View>
      <TouchableOpacity
        style={styles.third_section_item}
        onPress={() => {
          navigation.navigate({
            name: "Setting"
          });
        }}
      >
        <Image style={styles.third_section_item_left_img} source={Setting} />
        <Text style={styles.third_section_item_txt}>设置</Text>
        <Image style={styles.third_section_item_right_arrow} source={right_arrow} />
      </TouchableOpacity>
    </View>
  );
};

export default inject("store")(observer(OterInfo));

const styles = StyleSheet.create({
  third_section: {
    width: "100%",
    marginTop: 10,
    backgroundColor: "white",
    padding: 10
  },
  third_section_item: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  third_section_item_txt: {
    marginLeft: 8
  },
  third_section_item_right_arrow: {
    height: 15,
    width: 15,
    position: "absolute",
    right: 20
  },
  third_section_item_left_img: {
    height: 20,
    width: 20
  }
});
