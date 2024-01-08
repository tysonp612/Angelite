import { View } from "react-native";
import { alertManager } from "./Model/AlertManager";
import Navigation from "./View/navigation/navigation";
import DropdownAlert from "react-native-dropdownalert";
export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Navigation />
      <DropdownAlert
        alert={(func) =>
          // Set the alert function in AlertManager.
          // This function is provided by DropdownAlert and is used to display alerts.
          alertManager.setAlertFunction(func)
        }
      />
    </View>
  );
}
