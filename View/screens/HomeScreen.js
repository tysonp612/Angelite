import { View, Text, Button } from "react-native";
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style="text-red-500 text-4xl">Home Screen</Text>
      <Button
        title="Go to Other Screen"
        onPress={() => navigation.navigate("Services")}
      />
    </View>
  );
};

export default HomeScreen;
