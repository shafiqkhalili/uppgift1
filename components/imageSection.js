import React from "react";
import { StyleSheet, Text, TextInput, View, Image } from "react-native";

function imageSection() {
  return (
    <View>
      <Text>An emoji describing how ...</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/smiling-face-with-smiling-eyes_1f60a.png",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default imageSection;
