import { View, Text, StyleSheet, Button, TextInput, Modal, ActivityIndicator, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import { loginSchema } from "../../validation/inputValidation";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { API_URL } from "../../services/api";

const Login = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();
  const handleSubmit = async (values) => {
    const data = {
      emailOrUsername: values.email,
      password: values.password,
    };
    try {
      setLoading(true);
      const response = await axios.post(`${API_URL}/api/v1/login`, data);
      if (response.status === 200) {
        setLoading(false);
        console.log(response.data);
        setSuccess(response.data.message);
        setShowModal(true);
      }
      if(response.status === 202){
        setLoading(false)
        console.log(response.data);
        setError(response.data.message);
        
      }
    } catch (error) {
      console.log(error);
      setLoading(false);

      if (error.response) {
        if (error.response.status === 400) {
          setLoading(false);
          console.log(error.response.data);
          setError(error.response.data.message);
          setShowModal(true);
        }
        // console.log(error.response.data);
        // setError(error.response.data.message);
      } else {
        console.warn(error);
        setError(
          "Ooops, Failed to contact our servers. Please try again later"
        );
      }
    }
  };
  return (
    <View style={login.container}>
       <Modal animationType="fade" transparent={true} visible={loading}>
          <View style={login.modal}>
            <View style={login.modalContainer}>
              <ActivityIndicator size={"large"} color={"green"} />
              <Text>Loading.....</Text>
            </View>
          </View>
        </Modal>
        <Modal animationType="slide" transparent={true} visible={showModal}>
          <View style={login.modal}>
            <View style={login.modalContainer}>
              <Text style={login.successText}>{success}</Text>

              <TouchableOpacity>
                <Button
                  onPress={() => {
                    setShowModal(false);
                    navigation.navigate("LoginScreen");
                  }}
                  style={login.closeButton}
                  title="Close"
                />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      <View style={login.top}>
        <Text style={login.welcome}>Welcome Back</Text>
        <Text style={login.link}>
          Login below or <Text  onPress={() => navigation.navigate("Register")} style={login.underline}>create an account</Text>
        </Text>
      </View>
      <Text style={login.errorMessage}>{error}</Text>

      <View>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={loginSchema}
        >
          {(props) => (
            <>
              <View style={login.form}>
                <View style={login.inputCont}>
                  <Text style={login.label}>Email</Text>
                  <TextInput
                    style={login.input}
                    onChangeText={props.handleChange("email")}
                    onBlur={props.handleBlur("email")}
                    value={props.values.email}
                  />
                  <Text style={login.inputError}>
                    {props.touched.email && props.errors.email}
                  </Text>
                </View>
                <View style={login.inputCont}>
                  <Text style={login.label}>Password</Text>
                  <TextInput
                    style={login.input}
                    onChangeText={props.handleChange("password")}
                    onBlur={props.handleBlur("password")}
                    value={props.values.password}
                    secureTextEntry={true}
                  />

                  <Text style={login.inputError}>
                    {props.touched.password && props.errors.password}
                  </Text>
                </View>
              </View>

              <View style={login.bottom}>
                <Button
                  style={login.button}
                  onPress={props.handleSubmit}
                  title="Sign in"
                />
                <Text style={login.forgot}>Forgot Password</Text>
              </View>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default Login;

const login = StyleSheet.create({
  container: {
    flex: 1,
    top: 71,
    padding: 24,
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  successText: {
    fontSize: 24,
    color: "green",
    fontWeight: "bold",
  },
  closeButton: {
    fontSize: 18,
    color: "green",
    marginTop: 10,
  },
  welcome: {
    // fontFamily: "Inter",
    fontWeight: "700",
    color: "#545F71",
    fontSize: 32,
    lineHeight: 36,
  },
  link: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 22,
    color: "#545F71",
    width: 327,
    height: 22,
  },
  underline: {
    textDecorationLine: "underline",
  },
  form: {
    width: 327,
    height: 172,
    gap: 24,
    // backgroundColor: 'red'
  },
  inputCont: {
    height: 74,
    width: "100%",
  },
  label: {
    width: 54,
    height: 19,
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 19,
    color: "#545F71",
  },
  input: {
    width: "100%",
    height: 48,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#545F71",
    padding: 12,
    gap: 12,
  },
  errorMessage: {
    color: "red",
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
    
  },
  bottom: {
    top: 150,
    width: 327,
    height: 93,
    borderRadius: 6,
  },
  button: {
    width: 327,
    height: 48,
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  forgot: {
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 22,
    textAlign: "center",
    top: 20,
    textDecorationLine: "underline",
    color: "#545F71",
  },
});
