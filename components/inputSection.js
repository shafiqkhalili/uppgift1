import React from "react";
import { StyleSheet, Text, TextInput, View, Image } from "react-native";

function inputSection() {
  return (
    <View>
      <Text style={styles.bold}>
        What would you like to get out of this course?
      </Text>
      <TextInput editable maxLength={40} style={styles.input} value="text" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "gray",
  },
  bold: {
    fontWeight: "bold",
  },
});
export default inputSection;
