import React from "react";
import {
  Text,
  Image,
  View,
  Pressable,
  StyleSheet,
  ImageBackground,
} from "react-native";
import SignInBottom from "../Constant/SignInBottom";

const SignIn = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <ImageBackground
        source={require("../assets/Images/orange-juice-g330aeef87_1920.jpg")}
        style={Styles.imageBackground}
      >
        <View style={Styles.logoCont}>
          <Image
            source={require("../assets/Images/erupting-volcano2.png")}
            style={Styles.logo}
          />
        </View>
        <View style={Styles.textCont}>
          <SignInBottom>Get started</SignInBottom>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignIn;
const Styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    backgroundColor: "#000",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoCont: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200,
    marginBottom: 150,
  },
  logo: {
    width: 150,
    height: 150,
  },
  textCont: { alignItems: "center" },
  welcomeText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFF",
  },

  welcomeIcon: {
    width: 30,
    height: 40,
    resizeMode: "stretch",
  },
});
