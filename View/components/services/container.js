import { View, Text } from "react-native";
const ServiceContainer = () => {
  return (
    <View
      style={{
        padding: 8,
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <View
        style={{
          width: "20%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Color</Text>
      </View>
      <View style={{ width: "60%", justifyContent: "flex-start" }}>
        <Text style={{ fontWeight: "bold", fontSize: "18" }}>Full set</Text>
        <Text style={{ fontWeight: "300", fontSize: "15" }}>1h30 min</Text>
      </View>
      <View style={{ justifyContent: "center" }}>
        <Text style={{ fontSize: "17" }}>$60</Text>
      </View>
    </View>
  );
};

export default ServiceContainer;
