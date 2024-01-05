import { View, Text, ScrollView } from "react-native";
import ServiceContainer from "./../components/services/container";
import Button from "./../components/button";
const ServicesScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={{
            padding: 15,
            backgroundColor: "#ffff",
            width: "100%",
            height: "100%",
          }}
        >
          <ServiceContainer />
          <ServiceContainer />
          <ServiceContainer />
          <ServiceContainer />
          <ServiceContainer />
          <ServiceContainer />
          <ServiceContainer />
          <ServiceContainer />
          <ServiceContainer />
          <ServiceContainer />
          <ServiceContainer />
        </View>
      </ScrollView>
      <Button />
    </View>
  );
};

export default ServicesScreen;
