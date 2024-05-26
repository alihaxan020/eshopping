import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { DrawerActions } from "@react-navigation/native";

const home = () => {
  const navigation = useNavigation();
  const onToggle = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <View>
      <Text>home</Text>
      <Button title="Open Drawer" onPress={onToggle} />
    </View>
  );
};

export default home;
