import { Text, View, Pressable, StyleSheet } from "react-native";

function SignInBottom({ children, onPress, disabled, containerStyle }) {
  return (
    <View style={[Styles.container, containerStyle]}>
      <Pressable
        onPress={onPress}
        disabled={disabled}
        style={({ pressed }) => (pressed ? [Styles.Press] : Styles.inner)}
      >
        <Text style={Styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default SignInBottom;

const Styles = StyleSheet.create({
  Press: { opacity: 0.75 },
  inner: {
    borderRadius: 10,
    width: "90%",
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

    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
  },
});
