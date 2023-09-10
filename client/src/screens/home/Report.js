// import React, { useEffect, useState } from "react";
// import { View, StyleSheet, Text } from "react-native";
// import { Field, Formik } from "formik";
// import { ScrollView, TextInput } from "react-native-gesture-handler";
// import { reportSchema } from "../../validation/inputValidation";
// import Checkbox from "expo-checkbox";

// import axios from "axios";
// import { API_URL } from "../../services/api";

// export default function Report() {
//   const [selectedIndex, setSelectedIndex] = useState(null);
//   const [selectedCrimeId, setSelectedCrimeId] = useState(null);
//   const [data, setData] = useState([]);
//   const [errorData, setErrorData] = useState("");

//   useEffect(() => {
//     const get = async () => {
//       const response = await axios.get(`${API_URL}/api/v1/get-categories`);

//       console.log(response);
//       setData(response.data);
//     };
//     get();
//   }, []);

//   // form submission
//   const handleSubmit = async (values, { resetForm }) => {
//     const report = {
//       ...values,
//       crime_id: selectedCrimeId,
//     };

//     try {
//       const response = await axios.post(`${API_URL}/api/v1/report`, report);
//       if (response && response.status === 200) {
//         setErrorData(response.data.message);
//         resetForm();
//       } else {
//         setErrorData(response.data.message);
//       }
//       setSelectedCrimeId(null);
//       console.log(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleSelect = (index) => {
//     setSelectedIndex(index);
//     setSelectedCrimeId(data[index.row].crime_id);
//   };
//   return (
//     <ScrollView
//       style={{ flex: 1 }}
//       contentContainerStyle={report.scrollViewContent}
//       keyboardShouldPersistTaps="handled"
//     >
//       <View style={report.header}>
//         <Text style={report.seen}>Seen a crime? Report Now!</Text>
//         <Text style={report.errorData}>{errorData}</Text>
//         <Formik
//           initialValues={{
//             email_address: "",
//             phone_number: "",
//             gender: "male",
//             first_name: "",
//             last_name: "",
//             crime_description: "",
//           }}
//           validationSchema={reportSchema}
//           onSubmit={handleSubmit}
//         >
//           {(props) => (
//             <View style={report.form}>
//               <Text style={report.personal}>Personal Info</Text>
//               <View>
//                 <View>
//                   {/* <Icon name="people-outline" {...props} /> */}
//                   <TextInput
//                     style={report.commonInput}
//                     placeholder="First Name"
//                     value={props.values.first_name}
//                     onChangeText={props.handleChange("first_name")}
//                     onBlur={props.handleBlur("first_name")}
//                   />
//                   <Text style={report.errorMessage}>
//                     {props.touched.first_name && props.errors.first_name}
//                   </Text>
//                 </View>
//                 <TextInput
//                   style={report.commonInput}
//                   placeholder="Last Name"
//                   value={props.values.last_name}
//                   onChangeText={props.handleChange("last_name")}
//                   onBlur={props.handleBlur("last_name")}
//                 />
//                 <Text style={report.errorMessage}>
//                   {props.touched.last_name && props.errors.last_name}
//                 </Text>

//                 <Field name="gender">
//                   {({ field }) => (
//                     <>
//                       <Text style={report.personal}>Gender</Text>
//                       <View style={report.checkbox}>
//                         <View style={report.genderBox}>
//                           <Checkbox
//                             value={field.value === "male"}
//                             onValueChange={() =>
//                               field.onChange("gender")("male")
//                             }
//                             color="#4630EB"
//                           />
//                           <Text>Male</Text>
//                         </View>

//                         <View style={report.genderBox}>
//                           <Checkbox
//                             value={field.value === "female"}
//                             onValueChange={() =>
//                               field.onChange("gender")("female")
//                             }
//                           />
//                           <Text>Female</Text>
//                         </View>
//                       </View>
//                     </>
//                   )}
//                 </Field>
//                 <View>
//                   <Text style={report.personal}>Contact</Text>
//                   <TextInput
//                     style={report.commonInput}
//                     placeholder="Email address"
//                     value={props.values.email_address}
//                     onChangeText={props.handleChange("email_address")}
//                     onBlur={props.handleBlur("email_address")}
//                     keyboardType="email-address"
//                   />
//                   <Text style={report.errorMessage}>
//                     {props.touched.email_address && props.errors.email_address}
//                   </Text>
//                   <TextInput
//                     style={report.commonInput}
//                     placeholder="Phone number"
//                     value={props.values.phone_number}
//                     onChangeText={props.handleChange("phone_number")}
//                     onBlur={props.handleBlur("phone_number")}
//                     keyboardType="phone-pad"
//                   />
//                   <Text style={report.errorMessage}>
//                     {props.touched.phone_number && props.errors.phone_number}
//                   </Text>
//                 </View>

//                 <Select
//                   selectedIndex={selectedIndex}
//                   onSelect={handleSelect}
//                   value={
//                     selectedIndex !== null
//                       ? data[selectedIndex.row].crime_type
//                       : "Select a Category"
//                   }
//                 >
//                   {data.map((item, index) => (
//                     <SelectItem key={item.crime_id} title={item.crime_type} />
//                   ))}
//                 </Select>

//                 <View>
//                   <Text style={report.personal}>
//                     Incident Report Description
//                   </Text>

//                   <Text style={report.errorMessage}>
//                     {props.touched.crime_description &&
//                       props.errors.crime_description}
//                   </Text>
//                   <ScrollView
//                     style={report.TextInputCont}
//                     contentContainerStyle={report.TextInputContent}
//                     keyboardShouldPersistTaps="handled"
//                   >
//                     <TextInput
//                       style={report.incidentDesc}
//                       placeholder="Describe what happened"
//                       value={props.values.crime_description}
//                       multiline
//                       numberOfLines={10}
//                       onChangeText={props.handleChange("crime_description")}
//                       onBlur={props.handleBlur("crime_description")}
//                     />
//                   </ScrollView>
//                 </View>

//                 <Button onPress={props.handleSubmit}>Submit Report</Button>
//               </View>
//             </View>
//           )}
//         </Formik>
//       </View>
//     </ScrollView>
//   );
// }


// // stylesheet for report new incident
//  const report = StyleSheet.create({
//   header: {
//     backgroundColor: "grey",
//     flex: 1,
//     padding: 20,
//   },
//   seen: {
//     fontSize: 30,
//     textAlign: "center",
//     fontWeight: "600",
//   },
//   personal: {
//     fontSize: 18,
//     marginTop: 10,
//   },
//   commonInput: {
//     borderWidth: 1,
//     borderColor: "#ddd",
//     padding: 10,
//     fontSize: 18,
//     borderRadius: 6,
//     marginTop: 10,
//     width: "100%",
//     color: "white",
//   },
//   checkbox: {
//     flexDirection: "row",
//     justifyContent: "space-evenly",
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   genderBox: {
//     flexDirection: "row",
//     gap: 16,
//   },
//   incidentDesc: {
//     height: 100,
//     textAlignVertical: "top",
//     padding: 5,
//   },

//   scrollViewContent: {
//     flexGrow: 1,
//   },
//   TextInputContent: {
//     flexGrow: 1,
//   },
//   errorData: {
//     color: "red",
//     fontSize: 15,
//     textAlign: "center",
//   },
//   TextInputCont: {
//     marginTop: 10,
//     marginBottom: 20,
//     paddingHorizontal: 15,
//     backgroundColor: "#f0f0f0",
//   },
// });

import { View, Text } from 'react-native'
import React from 'react'

const Report = () => {
  return (
    <View>
      <Text>Report</Text>
    </View>
  )
}

export default Report