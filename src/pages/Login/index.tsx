import React, { useEffect, useState } from "react";
import {Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import icon_triangle from "@images/icon_triangle.png";
import icon_eye_open from "@images/icon_eye_open.png";
import icon_eye_close from "@images/icon_eye_close.png";
import Logo from "@images/shopping_cart.png";
import { formatPhone, replaceBlank } from "@/utils/StringUtil";
import { userLogin } from "@/api";
import Toast from "react-native-root-toast";
import { IResponse } from "@/utils/request";
import {inject, observer} from "mobx-react";

/**
 * 描述：登录页面
 * 作者：刘飞华
 * 日期：2024/3/22 10:04
 */
const Login =  (props) => {

  const [eyeOpen, setEyeOpen] = useState<boolean>(true);

  const [phone, setPhone] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const [canLogin, setCanLogin] = useState<boolean>(false);

  const onLoginPress = async () => {

    if (!canLogin) {
      return;
    }

    const res: IResponse = await userLogin({ account: replaceBlank(phone), password: pwd });

    if (res.code !== 0) {
      Toast.show(res.message, {
        position: Toast.positions.CENTER
      });

      return;
    }

    // navigation.replace("MainTab");

  };

  useEffect(() => {
    setCanLogin(phone?.length === 13 && pwd?.length === 6);
  }, [phone, pwd]);

  const onPress = () => {
    props.store.user.addNum()
  };

  return (
    <View style={styles.root}>
      <Image style={styles.logo_image} source={Logo} />
      <Text style={styles.tip}>
        未注册的手机号登陆成功后将自动注册
      </Text>
      <View style={styles.phoneLayout}>
        <Text style={styles.pre86}>+86</Text>
        <Image style={styles.triangle} source={icon_triangle} />
        <TextInput
          style={styles.phoneInput}
          placeholderTextColor="#bbb"
          placeholder="请输入手机号码"
          autoFocus={false}
          keyboardType="number-pad"
          maxLength={13}
          value={phone}
          onChangeText={(text: string) => {
            setPhone(formatPhone(text));
          }}
        />
      </View>

      <View style={styles.pwdLayout}>
        <TextInput
          style={[styles.phoneInput, styles.pwdInput]}
          placeholderTextColor="#bbb"
          placeholder="输入密码"
          autoFocus={false}
          keyboardType="number-pad"
          maxLength={6}
          secureTextEntry={!eyeOpen}
          value={pwd}
          onChangeText={(text: string) => {
            setPwd(text);
          }}
        />
        <TouchableOpacity
          onPress={() => {
            setEyeOpen(!eyeOpen);
          }}
        >
          <Image
            style={styles.iconEye}
            source={eyeOpen ? icon_eye_open : icon_eye_close}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        activeOpacity={canLogin ? 0.7 : 1}
        style={canLogin ? styles.loginButton : styles.loginButtonDisable}
        onPress={onLoginPress}
      >
        <Text style={styles.loginTxt}>登陆</Text>
      </TouchableOpacity>
      <View>
        <Text>{props.store.user.num}</Text>
        <Button onPress={onPress} title="按钮" />
      </View>
    </View>
  );
}
export default inject('store')(observer(Login));
const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 48
  },
  logo_image: {
    width: 150,
    height: 105,
    marginTop: 150,
    resizeMode: "contain"
  },
  tip: {
    fontSize: 14,
    color: "#bbb",
    marginTop: 6
  },
  phoneLayout: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginTop: 28
  },
  phoneInput: {
    flex: 1,
    height: 60,
    backgroundColor: "transparent",
    textAlign: "left",
    textAlignVertical: "center",
    fontSize: 24,
    color: "#333",
    marginLeft: 16
  },
  pre86: {
    fontSize: 24,
    color: "#bbb"
  },
  triangle: {
    width: 12,
    height: 6,
    marginLeft: 6
  },
  pwdLayout: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginTop: 8
  },
  pwdInput: {
    marginLeft: 0,
    marginRight: 16
  },
  iconEye: {
    width: 30,
    height: 30
  },
  loginButton: {
    width: "100%",
    height: 56,
    backgroundColor: "#51aaf7",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 28,
    marginTop: 20
  },
  loginButtonDisable: {
    width: "100%",
    height: 56,
    backgroundColor: "#DDDDDD",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 28,
    marginTop: 20
  },
  loginTxt: {
    fontSize: 20,
    color: "white"
  }
});
