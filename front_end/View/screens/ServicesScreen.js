import React, { useCallback, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import ServiceContainer from "./../components/services/container";
import Button from "../components/addButton";
import { getAllServices } from "./../../../back_end/Control/axios_request/services";
import { useFocusEffect } from "@react-navigation/native";
import { alertManager } from "../../../Helper/AlertManager";

const ServicesScreen = ({ navigation }) => {
	const [services, setServices] = useState([]);

	useFocusEffect(
		useCallback(() => {
			fetchData();
		}, [])
	);
	//methods
	const fetchData = async () => {
		try {
			await getAllServices().then((response) => {
				setServices(response.data.services);
			});
		} catch (err) {
			await alertManager.showAlert("error", "Error", err.message);
		}
	};
	return (
		<View style={{ flex: 1 }}>
			<ScrollView
				style={{
					backgroundColor: "#ffff",
					width: "100%",
					height: "100%",
				}}
			>
				<View
					style={{
						padding: 15,
					}}
				>
					{services &&
						services.map((service) => (
							<ServiceContainer key={service._id} service={service} />
						))}
				</View>
			</ScrollView>
			<Button state="createService" />
		</View>
	);
};

export default ServicesScreen;
