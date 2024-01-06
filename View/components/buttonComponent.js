import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Button = ({ state }) => {
  const navigation = useNavigation();
  const navigateTo = () => {
    if (state === "createService") {
      navigation.navigate("ServicesCreate");
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigateTo(state)}>
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
