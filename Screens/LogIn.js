import React from "react";
import {
  Text,
  Image,
  View,
  TextInput,
  KeyboardAvoidingView,
  Dimensions,
  Pressable,
  StyleSheet,
  ScrollView,
} from "react-native";
import * as yup from "yup";
import { Formik } from "formik";
import MainBottom from "../Constant/MainBottom";

const schema = yup.object().shape({
  Email: yup
    .string()
    .matches(/^[a-zA-Z0-9_\-.]*$/, "Can use special characters (. , _) only")
    .matches(/^[a-z]+$/g, "must lowercase character")
    .min(3, () => "Email must be at least 3 characters")
    .max(20, () => "Email maximum 20 characters")
    .required("Email required field"),
  password: yup
    .string()
    .min(6, () => "Password must be at least 6 characters")
    .required("password required field"),
});

const LoginScreen = ({ navigation }) => {
  const [show, setShow] = React.useState(false);
  const [visible, setVisible] = React.useState(true);

  const handleSubmit = () => {
    navigation.navigate("Customization");
  };
  return (
    <ScrollView style={Styles.screen} showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView style={Styles.screen} behavior="position">
        <View style={Styles.container}>
          <Image
            source={require("../assets/Images/erupting-volcano.png")}
            style={Styles.Logo}
          />
          <Text style={Styles.welcome}>Welcome Back</Text>
          <Formik
            validationSchema={schema}
            initialValues={{ Email: "", password: "" }}
          >
            {({
              handleChange,
              handleSubmit,
              values,
              errors,
              touched,
              setFieldTouched,
              isValid,
            }) => (
              <View style={Styles.inputContainer}>
                <View
                  style={[
                    Styles.inputInnerContainer,
                    {
                      marginBottom: !(touched.Email && errors.Email) ? 30 : 5,
                    },
                  ]}
                >
                  <TextInput
                    style={[
                      Styles.input,
                      {
                        borderColor:
                          touched.Email && errors.Email ? "#ff5858" : "#fff",
                      },
                    ]}
                    name="Email"
                    placeholder={"Steve_Donuto@gamil.com"}
                    //autoCapitalize="none"
                    placeholderTextColor={"#606060"}
                    onChangeText={handleChange("Email")}
                    onBlur={() => setFieldTouched("Email")}
                    value={values.Email}
                  />

                  <Image
                    source={require("../assets/Images/icons8-email-64.png")}
                    style={Styles.inputIcon}
                  />
                </View>
                {touched.Email && errors.Email && (
                  <Text style={Styles.textError}>{errors.Email}</Text>
                )}
                <View
                  style={[
                    Styles.inputInnerContainer,
                    {
                      marginBottom: !(touched.password && errors.password)
                        ? 30
                        : 5,
                    },
                  ]}
                >
                  <TextInput
                    style={[
                      Styles.input,
                      {
                        borderColor:
                          touched.password && errors.password
                            ? "#ff5858"
                            : "#fff",
                      },
                    ]}
                    secureTextEntry={visible}
                    placeholder={"PassWord"}
                    placeholderTextColor={"#606060"}
                    onChangeText={handleChange("password")}
                    onBlur={() => setFieldTouched("password")}
                    value={values.password}
                  />
                  <Pressable
                    onPress={() => {
                      setVisible(!visible);
                      setShow(!show);
                    }}
                    style={Styles.inputIcon}
                  >
                    <Image
                      source={require("../assets/Images/icons8-password-48.png")}
                      style={Styles.inputIcon}
                    />
                  </Pressable>
                </View>
                {touched.password && errors.password && (
                  <Text style={Styles.textError}>{errors.password}</Text>
                )}
              </View>
            )}
          </Formik>
          <View style={Styles.bar}></View>
          <View style={Styles.btnContainer}>
            <MainBottom
              onPress={handleSubmit}
              background={"#ee6723"}
              TextColor={"#fff"}
            >
              Create account
            </MainBottom>
          </View>
          <View style={Styles.PrivacyCont}>
            <Text style={Styles.PrivacyText}>
              By clicking "Create account" ,I agree to SnackOverflow's
              <Text style={Styles.PrivacyText2}>TOS</Text> and
              <Text style={Styles.PrivacyText2}> Privacy policy</Text>
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default LoginScreen;
const window = Dimensions.get("window");
const width = window.width;
const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
  },
  skipText: {
    fontSize: 16,
    color: "#434343",
  },
  Logo: {
    width: 90,
    height: 90,
    resizeMode: "cover",
    marginTop: 60,
    marginBottom: 40,
  },
  welcome: {
    marginBottom: 30,
    fontSize: 40,
    fontWeight: "bold",
    color: "#554d56",
  },
  inputContainer: {
    width: width,
    alignItems: "center",
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
    width: "100%",
    height: 60,
    padding: 10,
    paddingLeft: 60,
    backgroundColor: "#f3f3f3",
    borderRadius: 10,
    borderColor: "#fff",
    borderWidth: 1,
    fontWeight: "600",
    fontSize: 16,
  },
  inputIcon: {
    width: 20,
    height: 20,
    resizeMode: "stretch",
    marginRight: -44,
  },
  inputSeePass: {
    marginRight: "-90%",
  },
  forgetContainer: {
    width: "90%",
    alignItems: "flex-end",
  },
  op: {
    opacity: 0.5,
  },
  skipContainer: {
    alignItems: "flex-end",
    width: "100%",
    marginLeft: -50,
  },
  forgetText: {
    fontSize: 15,
    fontWeight: "100",
    color: "#a3a3a3",
  },
  btnContainer: { alignItems: "center", width: "95%" },
  bar: {
    borderColor: "#000",
    borderBottomWidth: 2,
    width: "60%",
    alignItems: "center",
    marginTop: 10,
    opacity: 0.4,
    marginBottom: 35,
  },
  PrivacyCont: { width: "95%", marginTop: 30 },
  PrivacyText: { color: "#bdb9bd" },
  PrivacyText2: { color: "#7fbbfa" },
});
