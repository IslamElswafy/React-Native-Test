import React from "react";
import { Image, View, StyleSheet, ImageBackground } from "react-native";
import SignInBottom from "../Constant/SignInBottom";
import MainBottom from "../Constant/MainBottom";

const SignIn = ({ navigation }) => {
  const handleSubmit = () => {
    navigation.navigate("LoginScreen");
  };
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
          <SignInBottom
            background={"#1877f3"}
            source={require("../assets/Images/fb-768x432.jpg")}
            TextColor={"#fff"}
          >
            Sign In with Facebook
          </SignInBottom>
        </View>
        <View style={Styles.textCont}>
          <SignInBottom
            background={"#fff"}
            source={require("../assets/Images/images.png")}
            TextColor={"#cccccc"}
          >
            Sign In with Google
          </SignInBottom>
        </View>
        <View style={Styles.textCont}>
          <SignInBottom
            background={"#000"}
            source={require("../assets/Images/Apple.png")}
            TextColor={"#fff"}
          >
            Sign In with Apple
          </SignInBottom>
          <View style={Styles.bar}></View>
          <View style={Styles.btnCont}>
            <MainBottom
              background={"#fff"}
              TextColor={"#ee6723"}
              onPress={handleSubmit}
            >
              Sign up with Email
            </MainBottom>
          </View>
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
    marginTop: 180,
    marginBottom: 150,
  },
  logo: {
    width: 150,
    height: 150,
  },
  textCont: { alignItems: "center", marginBottom: 10 },
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
  bar: {
    borderColor: "#fff",
    borderBottomWidth: 2,
    width: "60%",
    alignItems: "center",
    marginTop: 35,
    opacity: 0.5,
    marginBottom: 35,
  },
  btnCont: { alignItems: "center", width: "95%" },
});
