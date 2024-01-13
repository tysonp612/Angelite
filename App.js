import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
//import redux
import { Provider } from "react-redux";
import store from "./Model/redux/store"
//import components
import GridContainer from "./View/GridContainer";
import Header from "./View/Header";

//import navigation
import Navigation from "./View/navigation/navigation";
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
