import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { isIos } from "@/theme/theme";

const ContainerWrapper: React.FC<any> = ({ children }) => {
  return (
    <SafeAreaView
      style={{
        marginBottom: isIos ? -8 : 16,
      }}
    >
      {children}
    </SafeAreaView>
  );
};

export default ContainerWrapper;
