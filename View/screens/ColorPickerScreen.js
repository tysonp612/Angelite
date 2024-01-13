// ColorPickerScreen.js
import React, { useState } from "react";
import { View, TouchableOpacity, ScrollView, StyleSheet } from "react-native";


//import components
import ColorContainer from "./../components/services/colorContainer";
import { useNavigation } from "@react-navigation/native";


const ColorPickerScreen = ({ route }) => {
  const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
  const { color: initinalColor, setColor } = route.params;
  const [selectedColor, setSelectedColor] = useState(initinalColor);
  const navigation = useNavigation();
  const handleColorSelection = (color) => {
    setSelectedColor(color);
    setColor(color);
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {colors.map((item, index) => (
          <ColorContainer
            key={index}
            color={item}
            isSelected={item === selectedColor}
            onPress={() => handleColorSelection(item)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
});

export default ColorPickerScreen;
