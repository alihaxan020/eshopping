import { theme } from "@/theme/theme";
import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View, Text } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
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
        name="(home)"
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
                color={focused ? theme.background : "gray"}
              />
              <Text
                style={{
                  fontSize: 12,
                  marginTop: 4,
                  color: focused ? theme.background : "gray",
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
                color={focused ? theme.background : "gray"}
              />
              <Text
                style={{
                  fontSize: 12,
                  marginTop: 4,
                  color: focused ? theme.background : "gray",
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
                backgroundColor: theme.background,
                marginBottom: 56,
                elevation: 5,
                shadowColor: theme.background,
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
                color={focused ? theme.background : "gray"}
              />
              <Text
                style={{
                  fontSize: 12,
                  marginTop: 4,
                  color: focused ? theme.background : "gray",
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
                color={focused ? theme.background : "gray"}
              />
              <Text
                style={{
                  fontSize: 12,
                  marginTop: 4,
                  color: focused ? theme.background : "gray",
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
