import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TodoList from "./Components/ToDo";
import ItemBox from "./Components/ItemBox";
import WeatherApp from "./Components/Wither";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <WeatherApp />
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
