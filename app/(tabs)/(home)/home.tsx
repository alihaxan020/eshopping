import { FlatList, StyleSheet, View, Text } from "react-native";
import React from "react";
import { SIZES } from "@/theme/theme";
import ContainerWrapper from "../../../components/ContainerWrapper";
import { useGetProductsQuery } from "@/redux/features/products/productApi";
import Loading from "@/components/loading";
import ListItem from "@/components/ListItem";
import { Link } from "expo-router";

const home = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ContainerWrapper>
        <Link href={"/cart"}>
          <Text>GO Cart</Text>
        </Link>
        {/* {isLoading ? (
          <Loading />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: SIZES.height * 0.15,
            }}
            numColumns={2}
            data={data}
            renderItem={({ item }) => <ListItem item={item} />}
            keyExtractor={(item: any) => item.id.toString()}
          />
        )} */}
      </ContainerWrapper>
    </View>
  );
};

export default home;

const styles = StyleSheet.create({});
