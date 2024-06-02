// screens/Register.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { theme } from "@/theme/theme";
import { Link } from "expo-router";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRegisterMutation } from "@/redux/features/users/userApi";
import Toast from "react-native-toast-message";

const { width, height } = Dimensions.get("window");

const formSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const Register = () => {
  const [register] = useRegisterMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      name: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onSubmit = async (data: any) => {
    try {
      const res = await register(data).unwrap();
      Toast.show({
        type: "success",
        text1: res.message,
        swipeable: true,
      });
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: error.data.error,
        swipeable: true,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Toast />
      {/* <Image source={require("../assets/logo.png")} style={styles.logo} /> */}
      <Text style={styles.title}>Create Account</Text>
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
      <Controller
        control={control}
        rules={{ required: "Name is required" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors.name && { borderColor: "red" }]}
            placeholder="Name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
          />
        )}
        name="name"
        defaultValue=""
      />
      {errors.name && (
        <Text style={styles.errorText}>{errors.name.message}</Text>
      )}
      <Controller
        control={control}
        rules={{ required: "Email is required" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors.email && { borderColor: "red" }]}
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        )}
        name="email"
        defaultValue=""
      />
      {errors.email && (
        <Text style={styles.errorText}>{errors.email.message}</Text>
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
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <Link href={"/"} style={styles.footerText}>
        <Text style={styles.footerText}>Already have an account? Login</Text>
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

export default Register;
