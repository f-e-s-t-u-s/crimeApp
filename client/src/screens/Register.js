import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import { registerSchema } from "../validation/inputValidation";
import { API_URL } from "../services/api";
import axios from "axios";

const Register = () => {
  const [error, setError] = useState(null);
  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(`${API_URL}/api/v1/create`, values);
      console.log(response.data);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        setError(error.response.data.message)
      } else {
        console.warn(error);
        setError("Ooops, Failed to contact our servers. Please try again later")

      }
    }
  };
  return (
    <ScrollView>
      <View style={register.container}>
        <View style={register.top}>
          <Text>red color background</Text>
        </View>
        <View style={register.create}>
          <Text style={register.createText}>Create an account</Text>
          <Text style={register.createLink}>
            Enter your account details below or{" "}
            <Text style={register.login}>log in</Text>
          </Text>
        </View>

        <View style={register.form}>
            <Text style={register.error}  >{ error}</Text>
          <Formik
            initialValues={{ username: "", dob: "", email: "", password: "" }}
            validationSchema={registerSchema}
            onSubmit={handleSubmit}
          >
            {(props) => (
              <>
                <View style={register.formChild}>
                  <View style={register.inputCont}>
                    <Text style={register.label}>Username</Text>
                    <TextInput
                      style={register.input}
                      onChangeText={props.handleChange("username")}
                      onBlur={props.handleBlur("username")}
                      value={props.values.username}
                    />
                    <Text style={register.errorMessage}>
                      {props.touched.username && props.errors.username}
                    </Text>
                  </View>
                  <View style={register.inputCont}>
                    <Text style={register.label}>Date of Birth</Text>
                    <TextInput
                      style={register.input}
                      placeholder="MM/DD/YYYY"
                      onChangeText={props.handleChange("dob")}
                      onBlur={props.handleBlur("dob")}
                      value={props.values.dob}
                    />
                    <Text style={register.errorMessage}>
                      {props.touched.dob && props.errors.dob}
                    </Text>
                  </View>
                  <View style={register.inputCont}>
                    <Text style={register.label}>Email</Text>
                    <TextInput
                      style={register.input}
                      onChangeText={props.handleChange("email")}
                      onBlur={props.handleBlur("email")}
                      value={props.values.email}
                    />
                    <Text style={register.errorMessage}>
                      {props.touched.email && props.errors.email}
                    </Text>
                  </View>
                  <View style={register.inputCont}>
                    <Text style={register.label}>Password</Text>
                    <TextInput
                      style={register.input}
                      onChangeText={props.handleChange("password")}
                      secureTextEntry={true}
                      onBlur={props.handleBlur("password")}
                      value={props.values.password}
                    />
                    <Text style={register.errorMessage}>
                      {props.touched.password && props.errors.password}
                    </Text>
                  </View>
                </View>
                <Button
                  style={register.button}
                  title="Sign In"
                  onPress={props.handleSubmit}
                />
              </>
            )}
          </Formik>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;

const register = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    width: "100vw",
  },
  top: {
    backgroundColor: "red",
    height: 50,
    width: "100%",
  },
  create: {
    padding: 10,
  },
  createText: {
    fontWeight: "bold",
    color: "#BAC0CA",
    fontSize: 35,
  },
  createLink: {
    fontSize: 20,
    fontWeight: "300",
  },
  login: {
    textDecorationLine: "underline",
  },
  form: {
    // flex: 1,
    marginTop: 20,
    width: "100%",
    padding: 10,
    marginBottom: 20,
  },
  formChild: {
    alignItems: "center",
  },
  inputCont: {
    width: "90%",
    marginBottom: 20,
  },
  label: {
    fontSize: 15,
    marginBottom: 8,
  },
  input: {
    padding: 9,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
  },
  button: {
    width: "90%",
    padding: 10,
  },
  errorMessage: {
    color: "red",
  },
  error:{
    color: "red",
    textAlign: 'center',
    marginBottom: 10,
  }
});
