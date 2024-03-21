import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Categories from "../categories/Categories";
import Home from "../home/Home";
import Cart from "../cart/Cart";
import Mine from "../mine/Mine";

const BottomTab = createBottomTabNavigator();

export default ({}) => {

  function getTabBarIcon(route: Readonly<{ key: string; name: string; path?: string }> & Readonly<{ params?: Readonly<object | undefined> }>) {
    return ({ focused, color, size }) => {
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

      return <Icon name={iconName} size={size} color={color} />;
    };
  }

  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: getTabBarIcon(route),
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray"
      })}
    >
      <BottomTab.Screen name="Home" component={Home} options={{ tabBarLabel: "首页" }} />
      <BottomTab.Screen name="Categories" component={Categories} options={{ tabBarLabel: "分类" }} />
      <BottomTab.Screen name="Cart" component={Cart} options={{ tabBarLabel: "购物车" }} />
      <BottomTab.Screen name="Mine" component={Mine} options={{ tabBarLabel: "我的" }} />
    </BottomTab.Navigator>
  );
}
