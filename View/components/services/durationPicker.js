import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import PropTypes from "prop-types";

const DurationPicker = ({ hours, minutes, onDurationChange }) => {
  return (
    <View style={styles.pickerWrapper}>
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerText}>Hour:</Text>
        <Picker
          style={styles.picker}
          selectedValue={hours}
          onValueChange={(itemValue) => onDurationChange(itemValue, minutes)}
        >
          <Picker.Item label="1 hour" value="1" />
          <Picker.Item label="2 hours" value="2" />
          <Picker.Item label="3 hours" value="3" />
          {/* Add more duration options as needed */}
        </Picker>
      </View>

      <View style={styles.pickerContainer}>
        <Text style={styles.pickerText}>minutes:</Text>
        <Picker
          style={styles.picker}
          selectedValue={minutes}
          onValueChange={(itemValue) => onDurationChange(hours, itemValue)}
        >
          <Picker.Item label="0 minutes" value="0" />
          <Picker.Item label="15 minutes" value="15" />
          <Picker.Item label="30 minutes" value="30" />
          <Picker.Item label="45 minutes" value="45" />
          {/* Add more duration options as needed */}
        </Picker>
      </View>
    </View>
  );
};

DurationPicker.propTypes = {
  hours: PropTypes.string.isRequired,
  minutes: PropTypes.string.isRequired,
  onDurationChange: PropTypes.func.isRequired,
};

export default DurationPicker;

const styles = StyleSheet.create({
  pickerContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
  },
  picker: {
    width: "100%",
  },
  pickerWrapper: {
    flexDirection: "row",
    paddingTop: 10,
  },
  pickerText: {
    fontSize: 17,
    textAlign: "center",
  },

  pickerCloseButton: {
    textAlign: "right",
  },
});
