import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Loading from "../../components/loading";
import ListItem from "../../components/ListItem";
import { SIZES } from "@/theme/theme";
import ContainerWrapper from "../../components/ContainerWrapper";
import { useGetProductsQuery } from "@/redux/features/products/productApi";

const index = () => {
  const { data, error, isLoading } = useGetProductsQuery({});

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ContainerWrapper>
        {isLoading ? (
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
        )}
      </ContainerWrapper>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
