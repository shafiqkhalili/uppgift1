import React from "react";
import { StyleSheet, Text, TextInput, View, Image } from "react-native";

function headerSection() {
  return (
    <View style={{ backgroundColor: "#841584" }}>
      <Text>Hello World</Text>
      <Text>First React App</Text>
      <Text>
        This is a paragraph explaining what is this app about. AS you see there
        are already many components includeding text, image and button
      </Text>
    </View>
  );
}

export default headerSection;
