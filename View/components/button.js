import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  button: {
    backgroundColor: "blue",
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    borderRadius: 18,
    top: 600, // adjust as needed
    left: 300, // adjust as needed
  },
  buttonText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default Button;
