
import React, { useState } from "react";
import CustomButton from "../../components/button/CustomButton";
import { FcGoogle } from "react-icons/fc";
import { useGlobalFormik } from "../../customHooks/useFormik";
import {
  otpWoithEmailLoginInitialValues,
  otpWoithEmailLoginSchema,
  otpWoithPhoneNumberLoginInitialValues,
  otpWoithPhoneNumberLoginSchema,
} from "../../utils/validation/authSchema";
import CustomInputBox from "../../components/inputbox/CustomInput";

const LoginPage = () => {
  const [inputValue, setInputValue] = useState("");
  const inputType = /^[0-9]*$/.test(inputValue) ? "phoneNumber" : "email"; // Determine input type based on the value
  console.log(inputType)

  const otpWithEmailLoginFormik = useGlobalFormik({
    initialValues: otpWoithEmailLoginInitialValues,
    validationSchema: otpWoithEmailLoginSchema,
    onSubmit: (values) => {
      console.log("Email Login Values:", values);
    },
  });

  const otpWithPhoneNumberFormik = useGlobalFormik({
    initialValues: otpWoithPhoneNumberLoginInitialValues,
    validationSchema: otpWoithPhoneNumberLoginSchema,
    onSubmit: (values) => {
      console.log("Phone Login Values:", values);
    },
  });

  const formik =
    inputType === "email" ? otpWithEmailLoginFormik : otpWithPhoneNumberFormik;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl poppins-semibold text-center text-gray-700 mb-4">
          Login
        </h2>

        <div className="flex border justify-center rounded-md items-center gap-3 bg-custom-red text-white poppins-semibold hover:text-custom-red hover:bg-white hover:border-custom-red p-3 hover:cursor-pointer">
          <div className="bg-custom-white p-1 rounded-md">
            <FcGoogle />
          </div>
          <button>Continue With Google</button>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="mt-5">
            <CustomInputBox
              title="Enter Email or Phone Number"
              type="text"
              placeholder="Type your email or phone number"
              name={inputType} // Dynamically assign inputType as the field name
              value={inputValue} // Bind local state for immediate updates
              onChange={(e) => {
                const value = e.target.value;
                setInputValue(value); // Update local state for immediate input updates
                formik.setFieldValue(inputType, value); // Update the corresponding formik value
              }}
              onBlur={formik.handleBlur}
              error={formik.errors[inputType]}
              touched={formik.touched[inputType]}
            />
          </div>

          <CustomButton
            buttonText="Submit"
            className="w-full my-5 bg-custom-lightBlue text-white poppins-semibold hover:text-custom-lightBlue hover:bg-white hover:border-custom-lightBlue"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
