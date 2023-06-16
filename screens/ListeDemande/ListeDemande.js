import ListeDemandeStyles from "./ListeDemandeStyles";
import AppStyles from "../../AppStyles";
import { Button, Text, View } from "react-native";

export default ({ navigation }) => {
  const styles = { ...AppStyles(), ...ListeDemandeStyles() };

  const onAjoutDemande = () => {
    navigation.navigate("FormulaireDemande");
  };

  return (
    <View style={[styles.container, styles.centered]}>
      <Text style={styles.text}>Liste demandes</Text>
      <Button title="Ajouter une demande" onPress={onAjoutDemande}></Button>
    </View>
  );
};
