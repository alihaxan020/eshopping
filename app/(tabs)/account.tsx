import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { SECURE_TOKEN, logoutValue } from "@/utils/scoreStorage";
import { useAppSelector } from "@/redux/RtkHooks";
import {
  useProfileQuery,
  useUpdateProfileMutation,
} from "@/redux/features/users/userApi";
import Loading from "@/components/loading";
import { SIZES, theme } from "@/theme/theme";
import { StatusBar } from "expo-status-bar";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { IMAGE_BASE_URL } from "@/redux/api";
import * as Progress from "react-native-progress";

const account = () => {
  const { user } = useAppSelector((state) => state.users);
  const { refetch, isLoading, error, data } = useProfileQuery({});
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [updateProfile, { isLoading: isUpdating }] = useUpdateProfileMutation();

  useEffect(() => {
    refetch();
  }, [refetch]);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.23,
      allowsMultipleSelection: false, // Ensure only one image is selected
    });
    console.log("====================================");
    console.log(result);
    console.log("====================================");
    if (!result.canceled) {
      const uri = result.assets[0].uri;
      const uriParts = uri.split("/");
      const fileName = uriParts[uriParts.length - 1];

      // Create a file object
      const file: any = {
        uri,
        name: fileName,
      };
      // Create FormData and append the file
      const formData = new FormData();
      formData.append("profile_image", file);
      await updateProfile(formData);
    }
  };
  const router = useRouter();
  const logout = async () => {
    await logoutValue(SECURE_TOKEN, "");
    router.replace("/");
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <StatusBar style="light" animated />
      <View
        style={{
          backgroundColor: "#fff",
        }}
      >
        <View
          style={{
            width: SIZES.width,
            height: SIZES.height * 0.1,
            backgroundColor: theme.background,
            borderBottomLeftRadius: SIZES.width * 0.2,
            borderBottomRightRadius: SIZES.width * 0.2,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              shadowColor: theme.secondary,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <TouchableOpacity
              onPress={pickImage}
              style={{
                position: "absolute",
                left: 0,
                // top: 0,
                paddingLeft: SIZES.width * 0.22,
                paddingBottom: SIZES.width * 0.05,
                bottom: 0,
                zIndex: 999,
              }}
            >
              <Ionicons name="cloud-upload" size={24} color={theme.secondary} />
            </TouchableOpacity>
            {isUpdating ? (
              <View
                style={{
                  width: SIZES.width * 0.2,
                  height: SIZES.width * 0.2,
                  marginHorizontal: 20,
                  borderRadius: SIZES.width * 0.2,
                  backgroundColor: theme.white,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Progress.CircleSnail
                  color={[theme.background, theme.secondary, "blue"]}
                />
              </View>
            ) : (
              <Image
                source={{
                  uri:
                    `${IMAGE_BASE_URL}/${user.profile_image}` ||
                    "https://avatar.iran.liara.run/public/boy?username=Ash",
                }}
                style={{
                  width: SIZES.width * 0.2,
                  height: SIZES.width * 0.2,
                  marginHorizontal: 20,
                  borderRadius: SIZES.width * 0.2,
                }}
              />
            )}
          </View>
          <View>
            <Text
              style={{
                fontSize: SIZES.subheading,
                letterSpacing: 0.4,
                fontWeight: "800",
                color: theme.white,
              }}
            >
              {user.name}
            </Text>
            <Text
              style={{
                fontSize: SIZES.bodyText,
                fontWeight: "300",
                color: theme.white,
              }}
            >
              {user.email}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          height: SIZES.height * 0.9,
          backgroundColor: "#fff",
          // borderTopLeftRadius: 20,
          // borderTopEndRadius: 20,
        }}
      >
        <View>
          <TouchableOpacity
            onPress={() => logout()}
            style={{
              backgroundColor: theme.background,
              margin: 10,
              width: "30%",
              padding: 10,
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <AntDesign name="logout" size={15} color={theme.white} />
            <Text
              style={{
                marginLeft: 10,
                color: theme.white,
              }}
            >
              LOGOUT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default account;
