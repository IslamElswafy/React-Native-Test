import { Text, View, Pressable, StyleSheet } from "react-native";

function mainBottom({ children, onPress, background, TextColor }) {
  return (
    <View style={[Styles.container, { backgroundColor: background }]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => (pressed ? [Styles.Press] : Styles.inner)}
      >
        <Text style={[Styles.btnText, { color: TextColor }]}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default mainBottom;

const Styles = StyleSheet.create({
  Press: { opacity: 0.75 },
  inner: {
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
  },
  btnText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  container: {
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#ee6723",
    shadowColor: "#000",

    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
  },
});
