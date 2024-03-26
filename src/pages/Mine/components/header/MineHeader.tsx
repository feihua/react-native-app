// @flow
import * as React from "react";
import { inject, observer } from "mobx-react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import UserBg from "@images/user-bg.jpg";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

/**
 * 描述：个人信息头部区域
 * 作者：刘飞华
 * 日期：2024/3/26 11:20
 */
const MineHeader = (props) => {

  const { store } = props;

  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <View style={styles.mine_header}>
      <Image style={styles.user_bg} source={UserBg} />
      <TouchableOpacity style={styles.mine_header_left}
        onPress={() => {
          navigation.navigate("Login");
        }}>
        <Image style={styles.mine_header_img} source={{ uri: "https://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/icon/github_icon_02.png" }} />
        <Text style={{ color: "#303133", fontSize: 30 }}>{store.user.data.nickname}</Text>
      </TouchableOpacity>
      <View style={styles.mine_header_right}>
        <TouchableOpacity
          style={styles.second_section_item}
          onPress={() => {
            navigation.navigate("Message");
          }}
        >
          <Image style={styles.mine_header_message_img} source={require("@images/message.png")} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.second_section_item}
          onPress={() => {
            navigation.navigate("Setting");
          }}
        >
          <Image style={styles.mine_header_setting_img} source={require("@images/setting_white.png")} />
        </TouchableOpacity>


      </View>
    </View>
  );
};

export default inject("store")(observer(MineHeader));

const styles = StyleSheet.create({
  mine_header: {
    width: "100%",
    height: 200,
    flexDirection: "row"
  },
  mine_header_left: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
    flex: 4
  },
  mine_header_img: {
    width: 61,
    height: 61,
    marginRight: 15,
    borderRadius: 28
  },
  mine_header_right: {
    padding: 15,
    flexDirection: "row",
    flex: 1
  },
  mine_header_message_img: {
    width: 30,
    height: 30
  },
  mine_header_setting_img: {
    marginLeft: 15,
    width: 30,
    height: 30
  },
  user_bg: {
    width: "100%",
    height: 200,
    position: "absolute"
    // marginTop: 200,
    // resizeMode: 'contain',
  },

  second_section_item: {
    alignItems: "center"
  }
});
