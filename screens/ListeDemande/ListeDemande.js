import ListeDemandeStyles from "./ListeDemandeStyles";
import AppStyles from "../../AppStyles";
import { Button, FlatList, Text, TouchableOpacity, View } from "react-native";
import { Icon, Image } from "react-native-elements";

export default ({ navigation }) => {
  const styles = { ...AppStyles(), ...ListeDemandeStyles() };

  const demandes = [
    {
      id: 1,
      titre: "titre 1",
      description: "blablabla 1",
      nomImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/280px-A_small_cup_of_coffee.JPG",
    },
    {
      id: 2,
      titre: "titre 2",
      description: "blablabla 2",
      nomImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/280px-A_small_cup_of_coffee.JPG",
    },
    {
      id: 3,
      titre: "titre 3",
      description: "blablabla 3",
      nomImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/280px-A_small_cup_of_coffee.JPG",
    },
  ];

  const onAjoutDemande = () => {
    navigation.navigate("FormulaireDemande");
  };

  return (
    <View style={[styles.container, styles.centered, { padding: 5 }]}>
      <FlatList
        style={{ width: "100%" }}
        data={demandes}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              backgroundColor: "#f2f2f2",
              padding: 16,
              marginBottom: 16,
              borderRadius: 5,
              flexDirection: "row", // Aligner l'image et le texte horizontalement
              alignItems: "center", // Centrer verticalement l'image et le texte
            }}
          >
            <Image
              source={{ uri: item.nomImage }}
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                marginRight: 16,
              }}
            />
            <Text>{item.titre}</Text>
          </TouchableOpacity>
        )}
      ></FlatList>
      <TouchableOpacity
        style={{
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
        }}
        onPress={onAjoutDemande}
      >
        <Icon name="add" size={24} color="#fff"></Icon>
      </TouchableOpacity>
    </View>
  );
};
