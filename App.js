import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";
import AppStyles from "./AppStyles";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";
import "react-native-gesture-handler";
import Connexion from "./screens/Connexion/Connexion";

import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";

import ListeDemande from "./screens/ListeDemande/ListeDemande";
import Cgu from "./screens/Cgu/Cgu";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FormulaireDemande from "./screens/FormulaireDemande/FormulaireDemande";
import { Header, Icon, SearchBar } from "react-native-elements";

export default function App() {
  const App = () => {
    const styles = AppStyles();

    const [connecte, setConnecte] = useState(true);

    const onLogin = () => {
      setConnecte(true);
    };

    const onLogout = () => {
      setConnecte(false);
    };

    const LoginNavigation = ({ onLogin }) => {
      return <Connexion onLogin={onLogin}></Connexion>;
    };

    const Drawer = createDrawerNavigator();

    const CustomDrawerContent = (props) => {
      const { navigation } = props;

      return (
        <DrawerContentScrollView {...props}>
          <DrawerItem
            label="Liste des demandes"
            onPress={() => navigation.navigate("ListeDemande")}
          />
          <DrawerItem label="CGU" onPress={() => navigation.navigate("CGU")} />
          <DrawerItem label="Deconnexion" onPress={() => onLogout()} />
        </DrawerContentScrollView>
      );
    };

    const Stack = createStackNavigator();
    const StackDemande = () => {
      return (
        <Stack.Navigator>
          <Stack.Screen
            name="ListeDemande"
            component={ListeDemande}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FormulaireDemande"
            component={FormulaireDemande}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      );
    };

    const [texteRecherche, setTexteRecherche] = useState("");

    const EnteteRecherche = ({ navigation }) => {

      const [texte, setTexte] = useState(texteRecherche);

      return (
        <Header
          leftComponent={
            <Icon name="menu" onPress={() => navigation.openDrawer()} />
          }
          centerComponent={() => (
            <SearchBar
              placeholder="Recherche ..."
              cancelButtonTitle=""
              value={texte}
              onChangeText={(texte) => setTexte(texte)}
              onSubmitEditing={(event) =>
                setTexteRecherche(event.nativeEvent.text)
              }
              containerStyle={{
                backgroundColor: "transparent",
                borderTopWidth: 0,
                borderBottomWidth: 0,
                flex: 1,
                width: "100%",
                justifyContent: "center",
                padding: 0,
                margin: 0,
              }}
              inputContainerStyle={{
                backgroundColor: "transparent",
                padding: 0,
              }}
              inputStyle={{ color: "#000" }}
              placeholderTextColor="#555"
              searchIcon={{ color: "#555" }}
              clearIcon={{ color: "#555" }}
            />
          )}
        ></Header>
      );
    };

    const AppNavigation = () => {
      return (
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen
            options={{
              header: (props) => <EnteteRecherche {...props} />,
            }}
            name="Liste des demandes"
            component={StackDemande}
          ></Drawer.Screen>
          <Drawer.Screen name="CGU" component={Cgu}></Drawer.Screen>
        </Drawer.Navigator>
      );
    };

    return connecte ? <AppNavigation /> : <LoginNavigation onLogin={onLogin} />;
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <App></App>
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
