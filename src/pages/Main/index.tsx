import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { tabData } from "./TabData";

const BottomTab = createBottomTabNavigator();

/**
 * 描述：tab页
 * 作者：刘飞华
 * 日期：2024/3/21 16:05
 */
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
      {tabData.map((item) =>
        <BottomTab.Screen key={item.name} name={item.name} component={item.component} options={{ tabBarLabel: item.label }} />)
      }
    </BottomTab.Navigator>
  );
};
