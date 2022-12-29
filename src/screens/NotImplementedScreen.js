// src/screens/NotImplementedScreen.js

import { View, Text, StyleSheet } from "react-native";

const NotImplementedScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Coming Soon!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    color: "gray",
  },
  image: {
    width: "80%",
    aspectRatio: 2 / 1,
  },
});

export default NotImplementedScreen;
