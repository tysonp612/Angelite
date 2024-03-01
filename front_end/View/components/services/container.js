import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
const ServiceContainer = ({ service, state, id }) => {
	if (!service) {
		return null; // or some placeholder view
	}
	const navigation = useNavigation();
	return (
		<TouchableOpacity
			onPress={() => {
				state === "editService"
					? navigation.navigate("Service Edit", { id: id })
					: console.log("CLOSE");
			}}
		>
			<View>
				<View key={service._id} style={styles.container}>
					<View style={styles.colorContainer}>
						<View
							style={[styles.colorCircle, { backgroundColor: service.color }]}
						/>
					</View>
					<View style={styles.textContainer}>
						<Text style={styles.boldText}>{service.service}</Text>
						<Text style={styles.normalText}>
							{Math.floor(service.duration / 60)}h {service.duration % 60} min
						</Text>
					</View>
					<View style={styles.priceContainer}>
						<Text style={styles.priceText}>${service.price}</Text>
					</View>
				</View>
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
	colorContainer: {
		width: "20%",
		justifyContent: "center",
		alignItems: "center",
	},
	textContainer: {
		width: "60%",
		justifyContent: "flex-start",
	},
	boldText: {
		fontWeight: "bold",
		fontSize: 18,
	},
	normalText: {
		fontWeight: "300",
		fontSize: 15,
	},
	priceContainer: {
		justifyContent: "center",
	},
	priceText: {
		fontSize: 17,
	},
	colorCircle: {
		width: 15,
		height: 15,
		borderRadius: 7.5, // Half of width and height to make it a circle
	},
});

export default ServiceContainer;
