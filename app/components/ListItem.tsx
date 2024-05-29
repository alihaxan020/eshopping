import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { SIZES, theme } from "@/theme/theme";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, usePathname, useSegments } from "expo-router";
import Animated from "react-native-reanimated";

const ListItem: React.FC<any> = ({ item }) => {
  const pathname = usePathname();
  // console.log("pathname", pathname);
  const segment = useSegments();
  // console.log("segements", segment);
  const navigation = useNavigation<any>();
  return (
    <View style={styles.item}>
      <View
        style={{
          height: SIZES.height * 0.37,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 14,
          elevation: 5,
          shadowColor: "gray",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
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

        <View
          style={{
            flexDirection: "column",
            flex: 1,
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 5,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>
            {item.title.length > 12
              ? item.title.slice(0, 12) + "..."
              : item.title}
          </Text>
          <Text style={{ fontWeight: "400", fontSize: 12 }}>
            {item.category}
          </Text>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              marginVertical: 5,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Text style={{ paddingHorizontal: 5 }}>{item.rating.rate}</Text>
              <Ionicons name="star-outline" size={16} color="black" />
            </View>
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            <Text
              style={{
                color: theme.secondary,
                fontSize: 16,
                fontWeight: "heavy",
              }}
            >
              $
            </Text>
            {item.price}
          </Text>
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate(`product-detail`, {
                item,
              })
            }
          >
            <View
              style={{
                justifyContent: "center",
                flexDirection: "row",
                width: "60%",
                marginVertical: 5,
                paddingVertical: 5,
                borderRadius: 5,
                backgroundColor: theme.background,
              }}
            >
              <Text style={{ fontWeight: "thin", color: "#fff", fontSize: 16 }}>
                VIEW
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      {/* <View
        style={{
          marginVertical: 4,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>
          {item.title.length > 14
            ? item.title.slice(0, 10) + "..."
            : item.title}
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>${item.price}</Text>
      </View> */}
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  item: {
    width: SIZES.width / 2 - 24,
    marginLeft: 16,
    marginBottom: 16,
  },
});
