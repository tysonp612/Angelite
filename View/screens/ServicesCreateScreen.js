import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
  Button,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const ServiceCreateScreen = () => {
  const [serviceName, setServiceName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("red");
  const [duration, setDuration] = useState({ hours: "1", minutes: "30" });
  const [isColorPickerVisible, setIsColorPickerVisible] = useState(false);
  const [isDurationPickerVisible, setIsDurationPickerVisible] = useState(false);

  const toggleColorPicker = () =>
    setIsColorPickerVisible(!isColorPickerVisible);
  const toggleDurationPicker = () =>
    setIsDurationPickerVisible(!isDurationPickerVisible);

  const handleColorChange = (selectedColor) => {
    setColor(selectedColor);
    toggleColorPicker();
  };

  const handleDurationChange = (selectedHours, selectedMinutes) => {
    setDuration({ hours: selectedHours, minutes: selectedMinutes });
    toggleDurationPicker();
  };

  const renderColorPicker = () => (
    <Picker
      selectedValue={color}
      onValueChange={(itemValue) => handleColorChange(itemValue)}
    >
      <Picker.Item label="Red" value="red" />
      <Picker.Item label="Blue" value="blue" />
      <Picker.Item label="Green" value="green" />
    </Picker>
  );

  const renderDurationPicker = () => (
    <Modal>
      <Picker
        selectedValue={duration.hours}
        onValueChange={(itemValue) =>
          handleDurationChange(itemValue, duration.minutes)
        }
      >
        <Picker.Item label="1 hour" value="1" />
        <Picker.Item label="2 hours" value="2" />
        {/* Add more duration options as needed */}
      </Picker>

      <Picker
        selectedValue={duration.minutes}
        onValueChange={(itemValue) =>
          handleDurationChange(duration.hours, itemValue)
        }
      >
        <Picker.Item label="15 minutes" value="15" />
        <Picker.Item label="30 minutes" value="30" />
        <Picker.Item label="45 minutes" value="45" />
        {/* Add more duration options as needed */}
      </Picker>
    </Modal>
  );

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
      <TouchableOpacity
        style={styles.input}
        onPress={() => toggleColorPicker()}
      >
        <Text>{color}</Text>
      </TouchableOpacity>
      {renderColorPicker()}

      <Text style={styles.label}>Duration:</Text>
      <TouchableOpacity
        style={styles.input}
        onPress={() => toggleDurationPicker()}
      >
        <Text>{`${duration.hours} hours ${duration.minutes} minutes`}</Text>
      </TouchableOpacity>
      {/* {renderDurationPicker()} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  modalContainer: {
    // transparent: "true",
    // animationType: "slide",
    // visible: `${isColorPickerVisible}`,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default ServiceCreateScreen;
