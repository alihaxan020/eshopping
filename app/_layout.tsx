import React, { useEffect, useState } from "react";
import { store } from "@/redux/store";
import { Stack } from "expo-router/stack";
import { Provider } from "react-redux";
import Toast from "react-native-toast-message";
export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "index",
};

const Layout = () => {
  return (
    <Provider store={store}>
      <Toast />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="index"
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="register" />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </Provider>
  );
};

export default Layout;
