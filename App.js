import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
//import redux
import { Provider } from "react-redux";
import store from "./back_end/Model/redux/store";
//import components
import GridContainer from "./front_end/View/GridContainer";
import Header from "./front_end/View/Header";
//import notification
import { alertManager } from "./Helper/AlertManager";
import DropdownAlert from "react-native-dropdownalert";
//import navigation
import Navigation from "./front_end/View/navigation/navigation";
export default function App() {
	return (
		<Provider store={store}>
			<Navigation />
			<DropdownAlert
				alert={(func) =>
					// Set the alert function in AlertManager.
					// This function is provided by DropdownAlert and is used to display alerts.
					alertManager.setAlertFunction(func)
				}
			/>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
