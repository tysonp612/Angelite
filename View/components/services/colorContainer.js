import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ColorContainer = ({ color, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.container, isSelected ? styles.selectedContainer : null]}
      onPress={onPress}
    >
      <View style={[styles.colorContainer, { backgroundColor: color }]} />
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>{color}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  selectedContainer: {
    backgroundColor: "grey", // Change border color when selected
  },
  colorContainer: {
    width: 20,
    height: 20,
    borderRadius: 100,
  },
  priceContainer: {
    width: "60%",
    justifyContent: "flex-start",
  },
  priceText: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default ColorContainer;
