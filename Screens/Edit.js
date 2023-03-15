import React from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import MainBottom from "../Constant/MainBottom";
const Edit = ({ navigation }) => {
  const handleSubmit = () => {
    navigation.navigate("Customization");
  };
  return (
    <View style={Styles.container}>
      <View style={Styles.RoutCont}>
        <AntDesign
          name="close"
          size={24}
          color="black"
          style={{ marginRight: 80 }}
          onPress={handleSubmit}
        />
        <Text style={Styles.RoutText}>Edit personal info</Text>
      </View>
      <View style={Styles.textCont}>
        <Text style={Styles.nameText}>First name</Text>
        <Text style={Styles.LnameText}>Last name</Text>
      </View>
      <View style={Styles.inputCont}>
        <TextInput
          style={Styles.input}
          name="First name"
          placeholder={"Snackie"}
          placeholderTextColor={"#cbc9cb"}
        />
        <TextInput
          style={Styles.input}
          name=" Last name"
          placeholder={"Overflowson"}
          placeholderTextColor={"#cbc9cb"}
        />
      </View>
      <View style={Styles.heightCont}>
        <Text style={Styles.heightText}>Height</Text>
        <TextInput
          style={[Styles.input, { width: "100%" }]}
          name=" Last name"
          placeholder={"If left as blank,will be unknown"}
          placeholderTextColor={"#cbc9cb"}
        />
      </View>
      <View style={Styles.heightCont}>
        <Text style={Styles.heightText}>weight</Text>
        <TextInput
          style={[Styles.input, { width: "100%" }]}
          name=" Last name"
          placeholder={"If left as blank,will be unknown"}
          placeholderTextColor={"#cbc9cb"}
        />
      </View>
      <View style={Styles.lastCont}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          where do you live
        </Text>
        <TextInput
          style={[
            Styles.input,
            { width: "100%", height: 120, paddingBottom: 70 },
          ]}
          name=" Last name"
          placeholder={
            "if the address is left as blank,your delivery cannot arrive"
          }
          placeholderTextColor={"#cbc9cb"}
        />
      </View>
      <View style={Styles.btnCont}>
        <MainBottom
          onPress={handleSubmit}
          background={"#ee6723"}
          TextColor={"#fff"}
        >
          Confirm
        </MainBottom>
      </View>
    </View>
  );
};

export default Edit;
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
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

  inputInnerContainer: {
    width: "90%",
    height: 50,
    marginBottom: 30,
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  textError: {
    width: "90%",
    marginBottom: 20,
    color: "#ff5858",
    fontSize: 15,
    marginLeft: 5,
  },
  input: {
    width: "45%",
    height: 60,
    paddingLeft: 15,
    backgroundColor: "#f3f3f3",
    borderRadius: 10,
    borderColor: "#fff",
    borderWidth: 1,
    fontSize: 20,
  },
  RoutCont: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  RoutText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
  },
  textCont: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  LnameText: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 70,
  },
  inputCont: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  heightCont: {
    marginTop: 20,
    width: "90%",
  },
  heightText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  lastCont: {
    marginTop: 20,
    marginBottom: 150,
    width: "90%",
  },
  btnCont: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
});
