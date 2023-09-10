// validates all user inputs using yup
import * as yup from "yup";

// rules definition
const passwordSchema = yup
  .string()
  .required("Password cannot be empty")
  .min(8, "Strong password should be at least 8 characters");

export const registerSchema = yup.object({
  username: yup
    .string()
    .required("Username is requires")
    .min(3, "Username must be 3 characters and above"),
  dob: yup
    .string()
    // .max(new Date(), "Date mst be before today")
    .required("Date of Birth is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email address"),
  password: passwordSchema,
});

export const loginSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email address"),

  password: passwordSchema,
});
export const changePasswordSchema = yup.object({
  currentPass: passwordSchema,
  newPass: passwordSchema,
  confirmPass: passwordSchema
    .oneOf([yup.ref("newPass")], "Passwords do not match")
    .required("Please confirm your password"),
});

// ! register validation


export const reportSchema = yup.object({
  email_address: yup
    .string()
    .required("Email is required")
    .email("Invalid email address"),

  phone_number: yup
    .string()
    .required("Phone number is required")
    .matches(/^\d{10}$/, "Invlaid phone number"),

  gender: yup
    .string()
    .matches(/^(male|female)$/, "Invalid gender")
    .required(),

  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  crime_description: yup
    .string()
    .min(3)
    .required("description cannot be empty"),
});