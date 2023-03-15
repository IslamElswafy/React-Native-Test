import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import MainBottom from "../../Constant/MainBottom";
import GoalBottom from "../../Constant/GoalBottom";
const Goal = ({ onPress, onPress2 }) => {
  const [activeGoal, setActiveGoal] = useState(0);

  const handleGoalPress = (index) => {
    setActiveGoal(index);
  };

  return (
    <View style={Styles.container}>
      <View style={{ width: "100%" }}>
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "#554d56" }}>
          What is your Goal?
        </Text>
      </View>

      <View style={Styles.textCont}>
        <View style={{ alignItems: "center", width: "100%", marginTop: 30 }}>
          <GoalBottom
            onPress={() => handleGoalPress(0)}
            background={"#f7f7f7"}
            TextColor={"#999399"}
            source={
              activeGoal === 0
                ? require("../../assets/Images/icons8-checkmark-yes-32.png")
                : require("../../assets/Images/icons8-checkmark.png")
            }
            backgroundLogo={activeGoal === 0 ? "#c8cf2d" : "#f7f7f7"}
          >
            No goal! Just snacking
          </GoalBottom>
        </View>
        <View style={{ alignItems: "center", width: "100%", marginTop: 10 }}>
          <GoalBottom
            onPress={() => handleGoalPress(1)}
            background={"#f7f7f7"}
            TextColor={"#999399"}
            source={
              activeGoal === 1
                ? require("../../assets/Images/icons8-checkmark-yes-32.png")
                : require("../../assets/Images/icons8-checkmark.png")
            }
            backgroundLogo={activeGoal === 1 ? "#c8cf2d" : "#f7f7f7"}
          >
            snacking for party time!
          </GoalBottom>
        </View>
        <View style={{ alignItems: "center", width: "100%", marginTop: 10 }}>
          <GoalBottom
            onPress={() => handleGoalPress(2)}
            background={"#f7f7f7"}
            TextColor={"#999399"}
            source={
              activeGoal === 2
                ? require("../../assets/Images/icons8-checkmark-yes-32.png")
                : require("../../assets/Images/icons8-checkmark.png")
            }
            backgroundLogo={activeGoal === 2 ? "#c8cf2d" : "#f7f7f7"}
          >
            snacking in a healthy way
          </GoalBottom>
        </View>
        <View style={{ width: "100%", marginTop: 300, marginBottom: 10 }}>
          <MainBottom
            background={"#ee6723"}
            TextColor={"#fff"}
            onPress={onPress}
          >
            Continue
          </MainBottom>
        </View>
        <View style={{ width: "100%" }}>
          <MainBottom
            background={"#f7f7f7"}
            TextColor={"#ee6723"}
            onPress={onPress2}
          >
            Back
          </MainBottom>
        </View>
      </View>
    </View>
  );
};

export default Goal;
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
