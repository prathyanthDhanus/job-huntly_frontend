import React from "react";
import vector from "../../assets/images/Vector.png";
import CustomInputBox from "../../components/inputbox/CustomInput";
import CustomFileInput from "../../components/inputbox/CustomFileInput";
import CustomButton from "../../components/button/CustomButton";

const JobseekerCreateProfile = () => {
  return (
    <>
      <h5 className="text-center poppins-semibold text-3xl mt-10 ">
        Create Profile
      </h5>
      {/* vector image  div*/}
      <div className="flex justify-center items-center">
        <img src={vector} alt="vector" className="w-[14rem]" />
      </div>
      {/* vector image  div end*/}
      <div className="container mx-auto p-10 border-2 rounded-xl shadow-md m-10">
      <section className="">
        <p className="poppins-semibold text-xl my-3">Personal Information</p>
        <div className="grid grid-cols-3  gap-5">
          <CustomInputBox
            title="Full Name"
            type="text"
            placeholder="Enter Your Full Name"
            name="userName"
            // value={formik.values.userName}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // error={formik.errors.userName}
            // touched={formik.touched.userName}
          />
          <CustomInputBox
            title="Email"
            type="email"
            placeholder="Enter Your Email "
            name="email"
            // value={formik.values.userName}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // error={formik.errors.userName}
            // touched={formik.touched.userName}
          />
          <CustomInputBox
            title="Phone Number"
            type="text"
            placeholder="Enter Your Phone number"
            name="userName"
            // value={formik.values.userName}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // error={formik.errors.userName}
            // touched={formik.touched.userName}
          />
          <CustomInputBox
            title="Date Of Birth"
            type="text"
            placeholder="Enter Your Date Of Birth(eg: 04/01/2001)"
            name="dateOfBirth"
            // value={formik.values.userName}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // error={formik.errors.userName}
            // touched={formik.touched.userName}
          />
          <CustomInputBox
            title="Linkedin Profile"
            type="text"
            placeholder="Enter Your Linkedin Profile Link"
            name="userName"
            // value={formik.values.userName}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // error={formik.errors.userName}
            // touched={formik.touched.userName}
          />
          <CustomInputBox
            title="Current City"
            type="text"
            placeholder="Enter Your Current City"
            name="currentCity"
            // value={formik.values.userName}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // error={formik.errors.userName}
            // touched={formik.touched.userName}
          />
          <CustomInputBox
            title="Current State"
            type="text"
            placeholder="Enter Your Current State"
            name="currentState"
            // value={formik.values.userName}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // error={formik.errors.userName}
            // touched={formik.touched.userName}
          />
          <CustomInputBox
            title="Current Country"
            type="text"
            placeholder="Enter Your Current Country"
            name="currentCountry"
            // value={formik.values.userName}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // error={formik.errors.userName}
            // touched={formik.touched.userName}
          />
          <div className="pt-3 sm:text-sm md:text-sm lg:text-base poppins-light bg-white">
            <p>Select Your Gender</p>
            <div className="grid grid-cols-3 gap-3  py-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="form-radio"
                />
                <span>Male</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="form-radio"
                />
                <span>Female</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="others"
                  className="form-radio"
                />
                <span>Others</span>
              </label>
            </div>
          </div>
        </div>
        <CustomFileInput
          title="Upload File"
          accept="image/*" // Accepts only image files
          name="file"
          // value={formik.values.file}
          // onChange={(file) => formik.setFieldValue("file", file)}
          // onBlur={formik.handleBlur}
          // error={formik.errors.file}
          // touched={formik.touched.file}
        />
       
      </section>


      <section >
        <p className="poppins-semibold text-xl mt-10">Professional Summary</p>
        <div className="grid gap-3 mt-5">
        <CustomInputBox
            title="Headline"
            type="text"
            placeholder="Enter Headline(eg: Experienced Frontend Developer)"
            name="headline"
            // value={formik.values.userName}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // error={formik.errors.userName}
            // touched={formik.touched.userName}
          />
         <CustomInputBox
            title="About You"
            type="text"
            placeholder="Short description about you"
            name="description"
            rows={6}
            // value={formik.values.userName}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // error={formik.errors.userName}
            // touched={formik.touched.userName}
          />
        </div>

        </section>

        <section >
        <p className="poppins-semibold text-xl mt-10">Skills</p>
        <div className="grid grid-cols-2 gap-5 mt-5">
        <CustomInputBox
            title="Technical Skills"
            type="text"
            placeholder="Enter Technical Skills(eg: React.js,Web Developement)"
            name="headline"
            // value={formik.values.userName}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // error={formik.errors.userName}
            // touched={formik.touched.userName}
          />
         <CustomInputBox
            title="Soft Skills"
            type="text"
            placeholder="Enter Your Soft Skills(eg: Team-work,Leadership)"
            name="description"
            // value={formik.values.userName}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // error={formik.errors.userName}
            // touched={formik.touched.userName}
          />
        </div>

        </section>

      <div className="grid grid-cols-3 gap-5 justify-between m-5">
          <CustomButton
            buttonText="Previous"
            className="w-1/4 my-5 bg-custom-lightBlue text-white poppins-semibold hover:text-custom-lightBlue hover:bg-white hover:border-custom-lightBlue"
            type="submit"
          />
          <CustomButton
            buttonText="01"
            className="w-full my-5 bg-custom-lightBlue text-white poppins-semibold hover:text-custom-lightBlue hover:bg-white hover:border-custom-lightBlue"
            type="submit"
          />

          <div className="flex justify-end ">
            <CustomButton
              buttonText="Next"
              className="w-[7rem] my-5 bg-custom-lightBlue text-white poppins-semibold hover:text-custom-lightBlue hover:bg-white hover:border-custom-lightBlue "
              type="submit"
            />
          </div>
        </div>


       
      </div>
    </>
  );
};

export default JobseekerCreateProfile;
