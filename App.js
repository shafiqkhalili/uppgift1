import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TextInput, View, Image } from "react-native";
import HeaderSection from "./components/headerSection";
import InputSection from "./components/inputSection";
import ImageSection from "./components/imageSection";
import ButtonSection from "./components/buttonSection";

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderSection />
      <InputSection />
      <ImageSection />
      <ButtonSection />

      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});
