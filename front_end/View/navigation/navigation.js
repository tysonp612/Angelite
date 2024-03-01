import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import ServicesScreen from "./../screens/ServicesScreen";
import HomeScreen from "./../screens/HomeScreen";
import ServiceCreateScreen from "./../screens/ServicesCreateScreen";
import ColorPickerScreen from "./../screens/ColorPickerScreen";
import ServiceEditScreen from "./../screens/ServiceEditScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Services">
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Services" component={ServicesScreen} />
				<Stack.Screen name="Services Create" component={ServiceCreateScreen} />
				<Stack.Screen name="Color Picker" component={ColorPickerScreen} />
				<Stack.Screen name="Service Edit" component={ServiceEditScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};
export default Navigation;
