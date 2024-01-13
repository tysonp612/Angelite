import { View, Text, StyleSheet } from "react-native";
const ServiceContainer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.colorContainer}>
        <Text>Color</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.boldText}>Full set</Text>
        <Text style={styles.normalText}>1h30 min</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>$60</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 8,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  colorContainer: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    width: "60%",
    justifyContent: "flex-start",
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  normalText: {
    fontWeight: "300",
    fontSize: 15,
  },
  priceContainer: {
    justifyContent: "center",
  },
  priceText: {
    fontSize: 17,
  },
});

export default ServiceContainer;
