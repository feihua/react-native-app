import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Logo from "@images/shopping_cart.png";

/**
 * 描述：欢迎页
 * 作者：刘飞华
 * 日期：2024/3/22 9:26
 */
export default ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace("MainTab");
    }, 2000);
  }, []);


  return (
    <View style={styles.root}>
      <Image style={styles.logo_image} source={Logo} />
      <Text style={styles.logo_text}>玖零商城</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center"
  },
  logo_image: {
    width: 200,
    height: 105,
    marginTop: 200,
    resizeMode: "contain"
  },
  logo_text: {
    color: "#fa436a",
    fontSize: 30
  }

});
