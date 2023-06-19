import { StyleSheet } from "react-native";
import theme from "./theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default () => {
  const colors = theme();
  const insets = useSafeAreaInsets();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundColor,
    },
    centered: {
      alignItems: "center",
      justifyContent: "center",
    },
    safeArea: {
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingRight: insets.right,
      paddingLeft: insets.left,
    },
    text: {
      color: colors.textColor,
    },
    fab: {
      position: "absolute",
      bottom: 16,
      right: 16,
      width: 56,
      height: 56,
      borderRadius: 28,
      backgroundColor: "#007BFF",
      alignItems: "center",
      justifyContent: "center",
      elevation: 4,
    },
    roundImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 16,
    },
  });

  return styles;
};
