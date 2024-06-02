import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link, Redirect, useNavigation, useRouter } from "expo-router";
import ContainerWrapper from "../../components/ContainerWrapper";
import { SECURE_TOKEN, logoutValue } from "@/utils/scoreStorage";

const account = () => {
  const navigation = useNavigation<any>();
  const router = useRouter();
  const logout = async () => {
    await logoutValue(SECURE_TOKEN, "");
    router.replace("/");
  };
  return (
    <ContainerWrapper>
      <Text>account</Text>
      <TouchableOpacity onPress={() => logout()}>
        <Text>MOVE TO HOME</Text>
      </TouchableOpacity>
    </ContainerWrapper>
  );
};

export default account;
