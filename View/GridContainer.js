import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";

const GridContainer = () => {
  // Generate data for the FlatList (in this case, just indices)
  const data = Array.from({ length: 36 }, (_, index) => index);

  // Function to render each grid item
  const renderItem = ({ item }) => (
    <View style={styles.gridItem}>
      <Text>{item + 1}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={6}
        renderItem={renderItem}
        keyExtractor={(item) => item.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  gridItem: {
    flex: 1,
    aspectRatio: 1, // Maintain square aspect ratio
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    margin: 1,
    backgroundColor: "black",
  },
});

export default GridContainer;
