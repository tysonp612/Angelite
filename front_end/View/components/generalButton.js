import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const GeneralButton = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});

export default GeneralButton;
