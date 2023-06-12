import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";
import AppStyles from "./AppStyles";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";

export default function App() {
  const App = () => {
    const styles = AppStyles();

    const [ connecte, setConnecte ] = useState(false);

    const onLogin = () => {
      console.log("test");
      setConnecte(true);
    };

    const LoginNavigation = ({ onLogin }) => {
      return (
        <View style={[styles.container, styles.safeArea]}>
          <Button title="Se connecter" onPress={onLogin} />
        </View>
      );
    };

    const AppNavigation = () => {
      return (
        <View style={[styles.container, styles.safeArea]}>
          <Text style={styles.text}>Vous etes connecté</Text>
        </View>
      );
    };

    return connecte ? <AppNavigation /> : <LoginNavigation onLogin={onLogin} />;
  };

  return (
    <SafeAreaProvider>
      <App></App>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
