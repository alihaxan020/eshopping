import {
  Ionicons,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View, Text } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          elevation: 0,
          bottom: 20,
          left: 12,
          right: 12,
          height: 72,
          backgroundColor: "white",
          borderRadius: 16,
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused, size }) => (
            <View
              style={{
                alignItems: "center",
                paddingTop: 10,
              }}
            >
              <Ionicons
                size={size}
                name={focused ? "home" : "home-outline"}
                color={focused ? "#F02A4B" : "gray"}
              />
              <Text
                style={{
                  fontSize: 12,
                  marginTop: 4,
                  color: focused ? "#F02A4B" : "gray",
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color, focused, size }) => (
            <View
              style={{
                alignItems: "center",
                paddingTop: 10,
              }}
            >
              <Ionicons
                size={size}
                name={focused ? "heart-sharp" : "heart-outline"}
                color={focused ? "#F02A4B" : "gray"}
              />
              <Text
                style={{
                  fontSize: 12,
                  marginTop: 4,
                  color: focused ? "#F02A4B" : "gray",
                }}
              >
                Favorites
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color, focused, size }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 56,
                width: 56,
                borderRadius: 27,
                backgroundColor: "#F02A4B",
                marginBottom: 56,
                elevation: 5,
                shadowColor: "#F02A4B",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
              }}
            >
              <MaterialCommunityIcons
                size={size}
                name={"brightness-percent"}
                color={"white"}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color, focused, size }) => (
            <View
              style={{
                alignItems: "center",
                paddingTop: 10,
              }}
            >
              <Ionicons
                size={size}
                name={focused ? "cart" : "cart-outline"}
                color={focused ? "#F02A4B" : "gray"}
              />
              <Text
                style={{
                  fontSize: 12,
                  marginTop: 4,
                  color: focused ? "#F02A4B" : "gray",
                }}
              >
                Cart
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused, size }) => (
            <View
              style={{
                alignItems: "center",
                paddingTop: 10,
              }}
            >
              <FontAwesome5
                size={size}
                name={focused ? "user-alt" : "user"}
                color={focused ? "#F02A4B" : "gray"}
              />
              <Text
                style={{
                  fontSize: 12,
                  marginTop: 4,
                  color: focused ? "#F02A4B" : "gray",
                }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
