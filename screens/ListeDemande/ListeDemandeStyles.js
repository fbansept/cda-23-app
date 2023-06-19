import { StyleSheet } from "react-native";
import theme from "../../theme";
export default function createStyles() {
  const colors = theme();
  const styles = StyleSheet.create({
    listElement: {
              backgroundColor: colors.grey,
              padding: 16,
              marginBottom: 16,
              borderRadius: 5,
              flexDirection: "row",
              alignItems: "center",
            }
  });
  return styles;
}
