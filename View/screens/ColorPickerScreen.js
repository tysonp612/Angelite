// ColorPickerScreen.js
import React, { useState } from "react";
import { View, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

//import redux
import { useDispatch, useSelector } from "react-redux";
import { setColor } from "./../../Model/redux/store"; // Import the setColor action

//import components
import ColorContainer from "./../components/services/colorContainer";
import { useNavigation } from "@react-navigation/native";


const ColorPickerScreen = ({ route }) => {
  const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
  // Access the color default value from the Redux store
  const initialColor = useSelector((state) => state.color.value);
  const [selectedColor, setSelectedColor] = useState(initialColor);
  const dispatch = useDispatch();


  const navigation = useNavigation();

  const handleColorSelection = (color) => {
    //As new color is picked, dispatch the setColor action to update redux state
    setSelectedColor(color);
    dispatch(setColor(color)); 
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
