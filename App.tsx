import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./src/pages/welcome/Welcome";
import MainTab from "./src/pages/main/MainTab";
import Login from "./src/pages/login/Login";
import SearchProducts from "./src/pages/searchProducts/SearchProducts";
import ProductDetail from "./src/pages/product/ProductDetail";
import Message from "./src/pages/mine/message/Message";
import Setting from "./src/pages/mine/setting/Setting";
import Address from "./src/pages/mine/Address/Address";
import EditAddress from "./src/pages/mine/Address/EditAddress";
import Focus from "./src/pages/mine/Focus/Focus";
import History from "./src/pages/mine/History/History";
import Collect from "./src/pages/mine/Collect/Collect";
import Order from "./src/pages/mine/Order/Order";
import Coupon from "./src/pages/mine/Coupon/Coupon";
import BrandList from "./src/pages/home/brand/BrandList";
import BrandDetail from "./src/pages/home/brand/BrandDetail";
import ProductList from "./src/pages/product/ProductList";


const Stack = createNativeStackNavigator();

/**
 * 描述：启动页
 * 作者：刘飞华
 * 日期：2024/3/21 16:03
 */
function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SearchProducts" component={SearchProducts} />
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="Message" component={Message} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Address" component={Address} />
        <Stack.Screen name="EditAddress" component={EditAddress} />
        <Stack.Screen name="Focus" component={Focus} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Collect" component={Collect} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="Coupon" component={Coupon} />
        <Stack.Screen name="BrandList" component={BrandList} />
        <Stack.Screen name="BrandDetail" component={BrandDetail} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
