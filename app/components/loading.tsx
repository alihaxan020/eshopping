import { View, Text, Dimensions } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
import { theme } from "@/theme/theme";
const { width, height } = Dimensions.get("window");

const Loading = () => {
  return (
    <View
      style={{
        width,
        height,
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Progress.CircleSnail thickness={8} size={120} color={theme.background} />
    </View>
  );
};

export default Loading;
