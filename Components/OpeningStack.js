import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import Welcome from "../Screens/Welcome";
import SignIn from "../Screens/SignIn";
import LoginScreen from "../Screens/LogIn";
import Customization from "../Screens/Customization";
import Edit from "../Screens/Edit";
import Profile from "./Customization/Profile";
const stack = createStackNavigator();

const OpeningStack = () => {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName={"Welcome"}
        screenOptions={{
          headerShown: false,
        }}
      >
        <stack.Screen name="Welcome" component={Welcome} />
        <stack.Screen name="Profile" component={Profile} />
        <stack.Screen name="Edit" component={Edit} />
        <stack.Screen name="Customization" component={Customization} />
        <stack.Screen name="SignIn" component={SignIn} />
        <stack.Screen name="LoginScreen" component={LoginScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default OpeningStack;
const styles = StyleSheet.create({
  indicatorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
