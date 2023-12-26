import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import GridContainer from "./View/GridContainer";
import Header from "./View/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="My React Native App" />
      <Text>Open up App.js to start working on your app!</Text>
      <GridContainer />
      <StatusBar style="auto" />
    </View>
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
