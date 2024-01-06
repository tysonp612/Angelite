import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
  Button,
  StyleSheet,
} from "react-native";

import DurationPicker from "./../components/services/durationPicker";
const ServiceCreateScreen = () => {
  const [serviceName, setServiceName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("red");
  const [duration, setDuration] = useState({ hours: "1", minutes: "30" });
  const [isPickerVisible, setIsPickerVisible] = useState(false);

  const openPicker = () => {
    if (isPickerVisible === false) {
      setIsPickerVisible(true);
    }
  };
  const closePicker = () => {
    if (isPickerVisible === true) {
      setIsPickerVisible(false);
    }
  };

  const handleColorChange = (selectedColor) => {
    setColor(selectedColor);
    togglePicker();
  };

  const handleDurationChange = (selectedHours, selectedMinutes) => {
    setDuration({ hours: selectedHours, minutes: selectedMinutes });
  };

  // const renderColorPicker = () => (
  //   <Picker
  //     selectedValue={color}
  //     onValueChange={(itemValue) => handleColorChange(itemValue)}
  //   >
  //     <Picker.Item label="Red" value="red" />
  //     <Picker.Item label="Blue" value="blue" />
  //     <Picker.Item label="Green" value="green" />
  //   </Picker>
  // );

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Service Name:</Text>
      <TextInput
        style={styles.input}
        value={serviceName}
        onChangeText={(text) => setServiceName(text)}
      />

      <Text style={styles.label}>Price:</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={(text) => setPrice(text)}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={(text) => setDescription(text)}
      />

      <Text style={styles.label}>Color:</Text>

      {/* colour component */}
      {/* <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.input} onPress={() => togglePicker()}>
          <Text>{color}</Text>
        </TouchableOpacity>
        {isPickerVisible ? renderColorPicker() : ""}
      </View> */}

      <Text style={styles.label}>Duration:</Text>
      <TouchableOpacity
        style={styles.durationInput}
        onPress={() => openPicker()}
      >
        <View style={styles.durationInfoContainer}>
          <Text
            style={styles.durationInfo}
          >{`${duration.hours} hours ${duration.minutes} minutes`}</Text>
          {isPickerVisible ? (
            <Button title="X" onPress={() => closePicker()} />
          ) : (
            ""
          )}
        </View>
        {/* show the expaned picker component for hour and miniute based on isPickerVisible  */}
        {isPickerVisible ? (
          <DurationPicker
            hours={duration.hours}
            minutes={duration.minutes}
            onDurationChange={handleDurationChange}
          />
        ) : (
          ""
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#ffff",
    height: "100%",
    width: "100%",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 16,
    padding: 8,
  },
  durationInput: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 15,
    padding: 8,
    minHeight: 40,
  },
  durationInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  durationInfo: {
    padding: 10,
    fontSize: 17,
  },
  modalContainer: {
    flex: 1,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 15,
  },
});

export default ServiceCreateScreen;
