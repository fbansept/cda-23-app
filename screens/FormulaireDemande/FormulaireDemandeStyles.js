import { StyleSheet } from "react-native";
import theme from "../../theme";
export default function createStyles() {
  const colors = theme();
  const styles = StyleSheet.create({
    datePicker: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
      padding: 10,
    },
    label: {
      fontSize: 16,
      color: "#86939e",
      fontWeight: "bold",
      marginBottom: 5,
      marginLeft: 10,
    },
  });
  return styles;
}
