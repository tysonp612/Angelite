import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
//import redux
import { Provider } from "react-redux";
import store from "./back_end/Model/redux/store"
//import components
import GridContainer from "./front_end/View/GridContainer";
import Header from "./front_end/View/Header";

//import navigation
import Navigation from "./front_end/View/navigation/navigation";
export default function App() {
  return (
    <Provider store={store}>
      <Navigation/>
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
