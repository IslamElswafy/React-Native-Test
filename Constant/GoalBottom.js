import { Text, View, Pressable, StyleSheet, Image } from "react-native";

function GoalBottom({
  children,
  onPress,
  TextColor,
  background,
  source,
  backgroundLogo,
}) {
  return (
    <View style={[Styles.container, { backgroundColor: background }]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed ? [Styles.Press, Styles.inner] : Styles.inner
        }
      >
        <View style={[Styles.logoCont, { backgroundColor: backgroundLogo }]}>
          <Image source={source} style={Styles.logo} />
        </View>
        <Text style={[Styles.btnText, { color: TextColor }]}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default GoalBottom;

const Styles = StyleSheet.create({
  Press: { opacity: 0.75 },
  inner: {
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
    height: 60,
    flexDirection: "row",
  },
  btnText: {
    fontSize: 18,
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
  logoCont: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c8cf2d",
    marginRight: 20,
    width: 20,
    height: 20,
    borderRadius: 50,
  },
  logo: {
    width: 18,
    height: 18,
    borderRadius: 50,
  },
});
