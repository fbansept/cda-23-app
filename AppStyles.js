import { StyleSheet } from "react-native";
import theme from "./theme";
import {
  useSafeAreaInsets,
} from "react-native-safe-area-context";

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
  });

  return styles;

};
