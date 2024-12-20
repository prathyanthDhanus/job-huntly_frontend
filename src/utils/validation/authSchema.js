import * as Yup from "yup";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //check for contain "@" and "." in the email

// --------------------- name validation  section ----------------------
export const nameValidation = Yup.string()
  .required("Name is required")
  .min(2, "Name must be at least 2 characters")
  .max(50, "Name cannot exceed 50 characters");
// ------------------- name validation  section end --------------------

// ------------------- email validation  section --------------------
export const emailValidation = Yup.string()
  .matches(emailRegex, "Invalid email address")
  .email("Invalid email address")
  .required("Email or Phonenumber required");
// ------------------- email validation  section end --------------------

// ------------------- password validation section --------------------
export const phoneNumberValidation = Yup.string()
.length(10, "Phone number must be exactly 10 digits")
  .matches(/[0-9]/, "Invalid phonenumber format")
  .required("Email or Phonenumber is required");
// ------------------- password validation  section end --------------------

// --------------------- login section ----------------------
export const otpWoithEmailLoginInitialValues = {
  email: "",
};

export const otpWoithEmailLoginSchema = Yup.object().shape({
  email: emailValidation,

});
export const otpWoithPhoneNumberLoginInitialValues = {
  phoneNumber: "",
};

export const otpWoithPhoneNumberLoginSchema = Yup.object().shape({
  phoneNumber: phoneNumberValidation,

});
//--------------------- login section end --------------------

