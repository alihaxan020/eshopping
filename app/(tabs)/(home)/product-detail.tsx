import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ContainerWrapper from "@/components/ContainerWrapper";
import { AntDesign } from "@expo/vector-icons";
import { SIZES, theme } from "@/theme/theme";
import { useNavigation } from "expo-router";
import { useRoute } from "@react-navigation/native";
import Animated from "react-native-reanimated";

const productDetail = () => {
  const navigation = useNavigation();
  const route = useRoute<any>();
  const { item } = route.params;
  console.log(typeof item.id.toString());

  return (
    <ContainerWrapper>
      <Text>productDetail</Text>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          backgroundColor: theme.background,
          height: 25,
          width: 25,
          borderRadius: 25 / 2,
        }}
      >
        <Animated.Image
          sharedTransitionTag={`id-${item.id.toString()}`}
          source={{ uri: item.image }}
          style={{
            height: SIZES.height * 0.16,
            width: SIZES.height * 0.16,
            resizeMode: "center",
            margin: 15,
          }}
        />
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
    </ContainerWrapper>
  );
};

export default productDetail;
