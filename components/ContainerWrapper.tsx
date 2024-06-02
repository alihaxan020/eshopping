import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { isIos } from "@/theme/theme";
import { StatusBar } from "expo-status-bar";

const ContainerWrapper: React.FC<any> = ({ children, bgColor = "#FFF" }) => {
  return (
    <SafeAreaView
      style={{
        paddingBottom: isIos ? -8 : 16,
        backgroundColor: bgColor,
      }}
    >
      {children}
    </SafeAreaView>
  );
};

export default ContainerWrapper;
