/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// @ts-ignore
import Icon from "react-native-vector-icons/Ionicons";
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

// @ts-ignore
function HomeScreen({ navigation, route }) {

  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount((c) => c + 1)} title="Update count" />
      )
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details", {
          itemId: 86,
          otherParam: "anything you want here"
        })}
      />
      <Button
        title="Create post"
        onPress={() => navigation.navigate("CreatePost")}
      />
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>

      <Text>Count: {count}</Text>
      <Button
        title="go to admin"
        onPress={() => navigation.navigate("Admin")}
      />
    </View>
  );
}

// @ts-ignore
function DetailsScreen({ route, navigation }) {
  const { itemId, otherParam } = route.params;
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount((c) => c + 1)} title="Update count" />
      )
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate("Details")}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Text>Count: {count}</Text>
    </View>
  );
}

// @ts-ignore
function CreatePostScreen({ navigation, route }) {
  const [postText, setPostText] = React.useState("");

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: "white" }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: "Home",
            params: { post: postText },
            merge: true
          });
        }}
      />
    </>
  );
}

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{ uri: "https://reactnative.dev/docs/assets/p_cat2.png" }}
    />
  );
}

const Tab = createBottomTabNavigator();

function AdminScreen() {
  return (
    <Tab.Navigator
      // screenOptions={{ headerShown: false }}

      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Profile") {
            iconName = focused
              ? "home"
              : "home-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Carts") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Categories") {
            iconName = focused ? "train" : "train-outline";
          }


          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray"
      })}
    >

      <Tab.Screen name="Profile" component={Profile} options={{ tabBarLabel: "首页" }} />
      <Tab.Screen name="Categories" component={Categories} options={{ tabBarLabel: "分类" }} />
      <Tab.Screen name="Carts" component={Carts} options={{ tabBarLabel: "购物车" }} />
      <Tab.Screen name="Settings" component={Settings} options={{ tabBarLabel: "我的" }} />
    </Tab.Navigator>
  );
}

function Profile() {
  return (<Text>Profile</Text>
  );
}

function Settings() {
  return (<Text>Settings</Text>
  );
}

function Categories() {
  return (<Text>Categories</Text>
  );
}

function Carts() {
  return (<Text>Carts</Text>
  );
}

const Stack = createNativeStackNavigator();

function App(): JSX.Element {

  const [text, setText] = useState("");

  // @ts-ignore
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome"
        // screenOptions={{
        //   headerStyle: {
        //     backgroundColor: "#f4511e"
        //   },
        //   headerTintColor: "#fff",
        //   headerTitleStyle: {
        //     fontWeight: "bold"
        //   }
        // }}
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

        <Stack.Screen name="Home" component={HomeScreen}
          // options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
          // options={{
          //   headerTitle: (props) => <LogoTitle {...props} />,
          //   headerRight: () => (
          //     <Button
          //       onPress={() => alert("This is a button!")}
          //       title="Info"
          //       color="#fff"
          //     />
          //   )
          // }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="CreatePost" component={CreatePostScreen}
          // options={{
          // title: 'My home',
          // headerStyle: {
          //   backgroundColor: '#f4511e',
          // },
          // headerTintColor: '#fff',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
          //}}
        />
        <Stack.Screen name="Admin" component={AdminScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  // return (
  //   <NavigationContainer>
  //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //       <Text>
  //         Try editing me! 🎉123213
  //       </Text>
  //       <Image
  //         source={{
  //           uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
  //         }}
  //         style={{ width: 200, height: 200 }}
  //       />
  //       <Text>Hello, I am your cat!</Text>
  //       {/*<TextInput*/}
  //       {/*  style={{height: 40}}*/}
  //       {/*  placeholder="请求输入你的名称!"*/}
  //       {/*  onChangeText={text => setText(text)}*/}
  //       {/*  defaultValue={text}*/}
  //       {/*/>*/}
  //     </View>
  //   </NavigationContainer>
  //
  // );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600"
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400"
  },
  highlight: {
    fontWeight: "700"
  }
});

export default App;
