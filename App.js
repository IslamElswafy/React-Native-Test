import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import OpeningStack from "./Components/OpeningStack";
export default function App() {
  return (
    <View style={styles.container}>
      <PaperProvider>
        <StatusBar Style="auto" />
        <OpeningStack />
      </PaperProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    marginTop: 30,
  },
});
