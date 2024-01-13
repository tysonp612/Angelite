import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
//import redux
import { Provider } from "react-redux";
import store from "./Model/redux/store"
//import components
import GridContainer from "./View/GridContainer";
import Header from "./View/Header";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header title="My React Native App" />
        <Text>Open up App.js to start working on your app!</Text>
        <GridContainer />
        <StatusBar style="auto" />
      </View>
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
