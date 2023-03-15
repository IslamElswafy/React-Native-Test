import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import Welcome from "../Screens/Welcome";
import SignIn from "../Screens/SignIn";
import LoginScreen from "../Screens/LogIn";
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
