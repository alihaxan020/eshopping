// screens/index.tsx
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  ActivityIndicator,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { theme } from "@/theme/theme";
import { Link, Redirect, useRouter } from "expo-router";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useLoginMutation } from "@/redux/features/users/userApi";
import Toast from "react-native-toast-message";
import { SECURE_TOKEN, getValueFor, setValueFor } from "@/utils/scoreStorage";
import Loading from "@/components/loading";
import useAuthentication from "@/hooks/useAuthentication";

const { width, height } = Dimensions.get("window");

const formSchema = z.object({
  username: z.string().min(3, "username must be at least 3 characters"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
const index = () => {
  const [login] = useLoginMutation();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      username: "haxan",
      password: "hassanali",
    },
    resolver: zodResolver(formSchema),
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const isAuthenticated = useAuthentication();
  const router = useRouter();
  const onSubmit = async (data: any) => {
    console.log(data);
    // Handle login logic here
    try {
      const res = await login(data).unwrap();
      await setValueFor(SECURE_TOKEN, res.token);
      Toast.show({
        type: "success",
        text1: res.message,
        swipeable: true,
      });
      router.replace("/(tabs)/(home)/home");
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: error.data.error,
        swipeable: true,
      });
    }
  };
  if (isAuthenticated === null) {
    return <Loading />; // or a loading spinner while checking authentication
  }

  if (isAuthenticated) {
    return <Redirect href="/(tabs)/account" />;
  }
  return (
    <View style={styles.container}>
      <Toast />
      {/* <Image source={require("../assets/logo.png")} style={styles.logo} /> */}
      <Text style={styles.title}>Welcome Back!</Text>
      <Controller
        control={control}
        rules={{ required: "Username is required" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors.username && { borderColor: "red" }]}
            placeholder="Username"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
          />
        )}
        name="username"
        defaultValue=""
      />
      {errors.username && (
        <Text style={styles.errorText}>{errors.username.message}</Text>
      )}
      <View style={styles.passwordContainer}>
        <Controller
          control={control}
          rules={{ required: "Password is required" }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[
                styles.inputPassword,
                errors.password && { borderColor: "red" },
              ]}
              placeholder="Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={!isPasswordVisible}
              autoCapitalize="none"
            />
          )}
          name="password"
          defaultValue=""
        />
        <TouchableOpacity
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          style={styles.eyeIcon}
        >
          <Text>{isPasswordVisible ? "🙈" : "👁️"}</Text>
        </TouchableOpacity>
      </View>
      {errors.password && (
        <Text style={styles.errorText}>{errors.password.message}</Text>
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(onSubmit)}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <ActivityIndicator color={"#fff"} />
        ) : (
          <Text style={styles.buttonText}>Login</Text>
        )}
      </TouchableOpacity>
      <Link href={"/register"} style={styles.footerText}>
        <Text style={styles.footerText}>Don't have an account? Sign Up</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  logo: {
    width: width * 0.5,
    height: height * 0.25,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 25,
    paddingLeft: 20,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 25,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  inputPassword: {
    flex: 1,
    height: "100%",
    paddingLeft: 20,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  eyeIcon: {
    paddingRight: 20,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: theme.background,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  footerText: {
    paddingTop: 20,
    color: "#666",
  },
  errorText: {
    color: "red",
    alignSelf: "flex-start",
    marginBottom: 10,
  },
});

export default index;
