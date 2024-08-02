import { View, Text, Platform } from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";

const Layout = () => {
  // if (Platform.OS === "web") {
  //   return <div>TEST</div>;
  // } else {
  return (
    <Drawer>
      <Drawer.Screen
        name="page1"
        options={{
          headerTitle: "My new feeds",
          drawerLabel: "News",
        }}
      />
    </Drawer>
  );
  // }
};

export default Layout;
