import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Signup from "./screens/signup";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Signup />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
