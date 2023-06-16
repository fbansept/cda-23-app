import CguStyles from "./CguStyles";
import AppStyles from "../../AppStyles";
import { Text, View } from "react-native";
export default () => {
  const styles = { ...AppStyles(), ...CguStyles() };
  return (
    <View style={[styles.container, styles.centered]}>
      <Text style={styles.text}>Conditions Générales d'Utilisation</Text>
    </View>
  );
};
