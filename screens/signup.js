import React, { useEffect, useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import CustomButton from "../components/Button";
import { useFonts } from "expo-font";
import { faApple } from "@fortawesome/free-brands-svg-icons/faApple";
import { faGoogle } from "@fortawesome/free-brands-svg-icons/faGoogle";

SplashScreen.preventAutoHideAsync();

export default function Signup() {
  const [fontsLoaded] = useFonts({
    GeistVF: require("../assets/fonts/GeistVF.ttf"),
  });

  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    async function prepare() {
      await SplashScreen.hideAsync();
    }

    if (fontsLoaded) {
      prepare();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const PlaceHolder = ({
    placeholder,
    label,
    inputRef,
    onSubmitEditing,
    returnKeyType,
    secureTextEntry,
  }) => {
    return (
      <View style={styles.input}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={styles.inputField}
          placeholder={placeholder}
          ref={inputRef}
          onSubmitEditing={onSubmitEditing}
          returnKeyType={returnKeyType}
          secureTextEntry={secureTextEntry}
          autoCapitalize="none"
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Create an Account</Text>
            <Text style={styles.subtitle}>
              Enter your email and create your account
            </Text>

            <View style={styles.buttonContainer}>
              <CustomButton
                icon={faApple}
                text="Apple"
                onPress={() => console.log("Pressed Apple")}
              />
              <CustomButton
                icon={faGoogle}
                text="Google"
                onPress={() => console.log("Pressed google")}
              />
            </View>

            <View style={styles.OrContinueWithSeparator}>
              <View style={styles.Orline} />
              <Text style={styles.Ortext}>OR CONTINUE WITH</Text>
              <View style={styles.Orline} />
            </View>

            <PlaceHolder
              label="Email"
              placeholder="example@mail.com"
              inputRef={emailRef}
              onSubmitEditing={() => usernameRef.current.focus()}
              returnKeyType="next"
            />
            <PlaceHolder
              label="Username"
              placeholder="John doe"
              inputRef={usernameRef}
              onSubmitEditing={() => passwordRef.current.focus()}
              returnKeyType="next"
            />
            <PlaceHolder
              label="Password"
              placeholder="abcd@123"
              inputRef={passwordRef}
              secureTextEntry={true}
              returnKeyType="done"
            />
            <TouchableOpacity
              onPress={() => {
                console.log("pressed submit button");
              }}
            >
              <View style={styles.submitBtn}>
                <Text style={styles.submitText}>Create Account</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.login}>
              Already have an account?{" "}
              <Text
                onPress={() => {
                  console.log("Pressed login");
                }}
                style={styles.subtext}
              >
                Login
              </Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
  },
  header: {
    marginVertical: 36,
  },
  title: {
    fontSize: 26,
    fontWeight: "900",
    textAlign: "left",
    justifyContent: "center",
    marginTop: 8,
    marginBottom: 8,
    fontFamily: "GeistVF",
  },
  subtitle: {
    fontSize: 12,
    textAlign: "left",
    color: "gray",
    fontFamily: "GeistVF",
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  OrContinueWithSeparator: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  Orline: {
    flex: 1,
    height: 1,
    backgroundColor: "#858585",
  },
  Ortext: {
    paddingHorizontal: 10,
    fontSize: 12,
    color: "#858585",
    fontFamily: "GeistVF",
  },
  input: {
    marginTop: 16,
    padding: 0,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#BFBFBF",
    padding: 12,
    borderRadius: 7,
    fontSize: 16,
  },
  submitBtn: {
    marginTop: 24,
    backgroundColor: "#000",
    padding: 16,
    borderRadius: 7,
  },
  submitText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "GeistVF",
  },
  login: {
    textAlign: "center",
    fontFamily: "GeistVF",
    color: "#858585",
  },
  subtext: {
    color: "#000",
    fontFamily: "GeistVF",
    textDecorationLine: "underline",
  },
});
