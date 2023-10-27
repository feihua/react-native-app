import React from "react";
import { StyleSheet } from "react-native";
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { load } from '../../utils/Storage';
// import UserStore from '../../stores/UserStore';
// @ts-ignore
import icon_logo_main from "../../assets/icon_main_logo.png";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// @ts-ignore
import Icon from "react-native-vector-icons/Ionicons";
// @ts-ignore
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Categories from "../categories/Categories";
import Home from "../home/Home";
import Cart from "../cart/Cart";
import Mine from "../mine/Mine";

const Tab = createBottomTabNavigator();
// @ts-ignore
export default ({ navigation }) => {

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
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Mine") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Categories") {
            iconName = focused ? "category" : "category";
            return <MaterialIcons name={iconName} size={size} color={color} />;
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray"
      })}
    >

      <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: "首页" }} />
      <Tab.Screen name="Categories" component={Categories} options={{ tabBarLabel: "分类" }} />
      <Tab.Screen name="Cart" component={Cart} options={{ tabBarLabel: "购物车" }} />
      <Tab.Screen name="Mine" component={Mine} options={{ tabBarLabel: "我的" }} />
    </Tab.Navigator>
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
  logo_main: {
    width: 200,
    height: 105,
    marginTop: 200,
    resizeMode: "contain"
  }
});
