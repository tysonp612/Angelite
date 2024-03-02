import { LogBox } from "react-native";
import { API_URL } from "@env";
LogBox.ignoreLogs([
	"Non-serializable values were found in the navigation state",
]);
//React
import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	TextInput,
	ScrollView,
	TouchableOpacity,
	Button,
	StyleSheet,
} from "react-native";
//Component
import DurationPicker from "../components/services/durationPicker";
import GeneralButton from "../components/generalButton";
import { alertManager } from "../../../Helper/AlertManager";
//axios
import {
	findService,
	editService,
	deleteService,
} from "./../../../back_end/Control/axios_request/services";

//Prop passed by naviation can also be used using { route, navigation }
const ServiceEditScreen = ({ route, navigation }) => {
	//variables setup
	const [serviceName, setServiceName] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");
	const [color, setColor] = useState("red");
	const [duration, setDuration] = useState({ hours: "1", minutes: "0" });
	const [isPickerVisible, setIsPickerVisible] = useState(false);

	const { id } = route.params;

	useEffect(() => {
		//load the information of the id passed
		loadServiceData(id);
	}, []);

	const loadServiceData = async (id) => {
		try {
			findService(id).then((res) => {
				setServiceName(res.data.service.service);
				setPrice(res.data.service.price.toString());
				setColor(res.data.service.color);
				const hours = Math.floor(res.data.service.duration / 60).toString(); // Converts hours to string
				const minutes = (res.data.service.duration % 60).toString();
				setDuration({ hours: hours, minutes: minutes });
				setDescription(res.data.service.description);
			});
		} catch (err) {
			console.log(err);
		}
	};
	//methods
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

	const handlePriceChange = (text) => {
		// Check if the text is numeric
		if (/^\d*\.?\d*$/.test(text)) {
			setPrice(text);
		}
	};

	const handleEdit = async () => {
		const serviceData = {
			service: serviceName,
			price: parseFloat(price),
			color: color,
			description: description,
			duration: parseInt(duration.hours) * 60 + parseInt(duration.minutes),
		};
		try {
			const response = await editService(id, serviceData);
			navigation.navigate("Services");
			await alertManager.showAlert(
				"success",
				"Success",
				"Service edited successfully"
			);
		} catch (err) {
			await alertManager.showAlert("error", "Error", err.message);
		}
	};

	const handleDelete = async () => {
		try {
			const response = await deleteService(id);
			navigation.navigate("Services");
			await alertManager.showAlert(
				"success",
				"Success",
				"Service deleted successfully"
			);
		} catch (err) {
			await alertManager.showAlert("error", "Error", err.message);
		}
	};

	const handleDurationChange = (selectedHours, selectedMinutes) => {
		setDuration({ hours: selectedHours, minutes: selectedMinutes });
	};

	return (
		<View style={styles.container}>
			<ScrollView>
				{/* ######################  NAME ################### */}
				<Text style={styles.label}>Service Name:</Text>
				<TextInput
					style={styles.input}
					value={serviceName}
					onChangeText={(text) => setServiceName(text)}
				/>

				{/* ###################### DESCRIPTION ################### */}
				<Text style={styles.label}>Description (optional): </Text>
				<TextInput
					style={styles.input}
					value={description}
					onChangeText={(text) => setDescription(text)}
				/>

				{/* ###################### {PRICE} ################### */}
				<Text style={styles.label}>Price:</Text>
				<TextInput
					style={styles.input}
					value={price}
					onChangeText={handlePriceChange}
					keyboardType="numeric"
				/>

				{/* ######################  COLOR ################### */}
				<Text style={styles.label}>Color:</Text>

				<TouchableOpacity
					style={styles.colorInput}
					onPress={() =>
						navigation.navigate("Color Picker", {
							setColor: setColor,
							color: color,
						})
					}
				>
					<View style={[styles.colorPreview, { backgroundColor: color }]} />
					<Text>{color}</Text>
				</TouchableOpacity>

				{/* ###################### DURATION ################### */}
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

				<GeneralButton title="Edit Service" onPress={() => handleEdit()} />
				<GeneralButton
					title="Delete Service"
					onPress={() => handleDelete()}
					state="delete"
				/>
			</ScrollView>
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
		marginBottom: 40,
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
	colorPreview: {
		width: 20,
		height: 20,
		borderRadius: 10,
		marginRight: 8,
	},
	colorInput: {
		flexDirection: "row",
		alignItems: "center",
		height: 40,
		borderColor: "gray",
		borderWidth: 1,
		borderRadius: 15,
		marginBottom: 16,
		padding: 8,
	},
});

export default ServiceEditScreen;