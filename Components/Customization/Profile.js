import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import MainBottom from "../../Constant/MainBottom";

const Profile = ({ handleSubmit }) => {
  //   const handleSubmit = () => {
  //     navigation.navigate("Edit");
  //   };
  return (
    <View style={Styles.container}>
      <View style={{ width: "100%" }}>
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "#8d888e" }}>
          What is your name?
        </Text>
      </View>
      <View style={Styles.logoCont}>
        <Image
          source={require("../../assets/Images/e23212png.png")}
          style={Styles.logo}
        />
      </View>
      <View style={Styles.textCont}>
        <View style={{ alignItems: "center", width: "95%" }}>
          <Text style={Styles.Text1}>user02398423</Text>
          <Text style={Styles.Text2}>x height x weight</Text>
          <Text style={Styles.Text2}>unknown</Text>
        </View>
      </View>
      <View style={Styles.textCont}>
        <View style={{ alignItems: "center", width: "95%" }}>
          <MainBottom
            background={"#f7f7f7"}
            TextColor={"#ee6723"}
            onPress={handleSubmit}
          >
            <Image
              source={require("../../assets/Images/icons8-edit-24.png")}
              style={Styles.TextLogo}
            />
            Edit
          </MainBottom>
        </View>
      </View>
    </View>
  );
};

export default Profile;
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
  },
  logoCont: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
  },
  textCont: { alignItems: "center", marginBottom: 30 },
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
  TextLogo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  Text1: {
    fontSize: 20,
  },
  Text2: {
    fontSize: 18,
    color: "#c1bec1",
  },
});
