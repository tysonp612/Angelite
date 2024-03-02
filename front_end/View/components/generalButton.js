import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const GeneralButton = ({ title, onPress, style, textStyle, state }) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={state === "delete" ? [styles.buttonDelete] : [styles.button]}
		>
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
	buttonDelete: {
		backgroundColor: "red",
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
