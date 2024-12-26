import React from "react";
import vector from "../../assets/images/Vector.png";
import CustomInputBox from "../../components/inputbox/CustomInput";
import CustomFileInput from "../../components/inputbox/CustomFileInput";
import CustomButton from "../../components/button/CustomButton";
import Stepper from "../../components/stepper/Stepper";
import Dropdown from "../../components/inputbox/Dropdown";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import Calender from "../../components/inputbox/DatePicker";
import { useGlobalFormik } from "../../customHooks/useFormik";
import {
  educationInitialValues,
  educationSchema,
  personalInformationInitialValues,
  personalInformationSchema,
  professionalSummeryInitialValues,
  professionalSummerySchema,
  skillsInitialValues,
  skillsSchema,
  workExperienceInitailValues,
  workExperienceSchema,
} from "../../utils/validation/jobseekerProfileValidation";

const JobseekerCreateProfile = () => {
  const steps = [{ label: "01" }, { label: "02 " }, { label: "03 " }];

  const menuItems = [
    { label: "Wrok from office", value: "wfo" },
    { label: "Work from home", value: "wfh" },
    { label: "Hybrid", value: "htbrid" },
    { label: "Freelancer", value: "freelancer" },
  ];

  const educationMenuItems = [
    { label: "Plus Two", value: "plusTwo" },
    { label: "Diploma", value: "diploma" },
    { label: "UG", value: "ug" },
    { label: "PG", value: "pg" },
    { label: "B Tech", value: "btech" },
    { label: "M Tech", value: "mtech" },
    { label: "Phd", value: "phd" },
    { label: "others", value: "others" },
  ];

  const personalInfoFormik = useGlobalFormik({
    initialValues: personalInformationInitialValues,
    validationSchema: personalInformationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const professionalSummeryFormik = useGlobalFormik({
    initialValues: professionalSummeryInitialValues,
    validationSchema: professionalSummerySchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const skillsFormik = useGlobalFormik({
    initialValues: skillsInitialValues,
    validationSchema: skillsSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const workExperienceFormik = useGlobalFormik({
    initialValues: workExperienceInitailValues,
    validationSchema: workExperienceSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const educationFormik = useGlobalFormik({
    initialValues: educationInitialValues,
    validationSchema: educationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

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
          <form onSubmit={personalInfoFormik.handleSubmit}>
            <div className="grid grid-cols-3  gap-5">
              <CustomInputBox
                title="Full Name"
                type="text"
                placeholder="Enter Your Full Name"
                name="fullName"
                value={personalInfoFormik.values.fullName}
                onChange={personalInfoFormik.handleChange}
                onBlur={personalInfoFormik.handleBlur}
                error={personalInfoFormik.errors.fullName}
                touched={personalInfoFormik.touched.fullName}
              />
              <CustomInputBox
                title="Email"
                type="email"
                placeholder="Enter Your Email "
                name="email"
                value={personalInfoFormik.values.email}
                onChange={personalInfoFormik.handleChange}
                onBlur={personalInfoFormik.handleBlur}
                error={personalInfoFormik.errors.email}
                touched={personalInfoFormik.touched.email}
              />
              <CustomInputBox
                title="Phone Number"
                type="text"
                placeholder="Enter Your Phone number"
                name="phoneNumber"
                value={personalInfoFormik.values.phoneNumber}
                onChange={personalInfoFormik.handleChange}
                onBlur={personalInfoFormik.handleBlur}
                error={personalInfoFormik.errors.phoneNumber}
                touched={personalInfoFormik.touched.phoneNumber}
              />
              <Calender
                label="Date Of Birth"
                name="dob"
                value={personalInfoFormik.values.dob}
                onChange={personalInfoFormik.handleChange}
                onBlur={personalInfoFormik.handleBlur}
                error={personalInfoFormik.errors.dob}
                touched={personalInfoFormik.touched.dob}
                className="lg:w-[24rem]"
              />
              <CustomInputBox
                title="Linkedin Profile"
                type="text"
                placeholder="Enter Your Linkedin Profile Link"
                name="linkedinProfile"
                value={personalInfoFormik.values.linkedinProfile}
                onChange={personalInfoFormik.handleChange}
                onBlur={personalInfoFormik.handleBlur}
                error={personalInfoFormik.errors.linkedinProfile}
                touched={personalInfoFormik.touched.linkedinProfile}
              />
              <CustomInputBox
                title="Current City"
                type="text"
                placeholder="Enter Your Current City"
                name="currentCity"
                value={personalInfoFormik.values.currentCity}
                onChange={personalInfoFormik.handleChange}
                onBlur={personalInfoFormik.handleBlur}
                error={personalInfoFormik.errors.currentCity}
                touched={personalInfoFormik.touched.currentCity}
              />
              <CustomInputBox
                title="Current State"
                type="text"
                placeholder="Enter Your Current State"
                name="currentState"
                value={personalInfoFormik.values.currentState}
                onChange={personalInfoFormik.handleChange}
                onBlur={personalInfoFormik.handleBlur}
                error={personalInfoFormik.errors.currentState}
                touched={personalInfoFormik.touched.currentState}
              />
              <CustomInputBox
                title="Current Country"
                type="text"
                placeholder="Enter Your Current Country"
                name="currentCountry"
                value={personalInfoFormik.values.currentCountry}
                onChange={personalInfoFormik.handleChange}
                onBlur={personalInfoFormik.handleBlur}
                error={personalInfoFormik.errors.currentCountry}
                touched={personalInfoFormik.touched.currentCountry}
              />
              <div className="pt-3 sm:text-sm md:text-sm lg:text-base poppins-light bg-white">
                <p>Select Your Gender</p>
                <div className="grid grid-cols-3 gap-3 py-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      onChange={personalInfoFormik.handleChange}
                      onBlur={personalInfoFormik.handleBlur}
                      checked={personalInfoFormik.values.gender === "male"}
                      className="form-radio"
                    />
                    <span>Male</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      onChange={personalInfoFormik.handleChange}
                      onBlur={personalInfoFormik.handleBlur}
                      checked={personalInfoFormik.values.gender === "female"}
                      className="form-radio"
                    />
                    <span>Female</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gender"
                      value="others"
                      onChange={personalInfoFormik.handleChange}
                      onBlur={personalInfoFormik.handleBlur}
                      checked={personalInfoFormik.values.gender === "others"}
                      className="form-radio"
                    />
                    <span>Others</span>
                  </label>
                </div>
                {personalInfoFormik.errors.gender &&
                  personalInfoFormik.touched.gender && (
                    <p className="text-red-500 text-sm">
                      {personalInfoFormik.errors.gender}
                    </p>
                  )}
              </div>
            </div>
            <CustomFileInput
              title="Upload File"
              accept="image/*" // Accepts only image files
              name="profilePhoto"
              value={personalInfoFormik.values.profilePhoto}
              onChange={personalInfoFormik.handleChange}
              onBlur={personalInfoFormik.handleBlur}
              error={personalInfoFormik.errors.profilePhoto}
              touched={personalInfoFormik.touched.profilePhoto}
            />
          </form>
        </section>

        <section>
          <p className="poppins-semibold text-xl mt-10">Professional Summary</p>
          <form onSubmit={professionalSummeryFormik.handleSubmit}>
            <div className="grid gap-3 mt-5">
              <CustomInputBox
                title="HeadLine"
                type="text"
                placeholder="Enter Headline(eg: Experienced Frontend Developer)"
                name="headLine"
                value={professionalSummeryFormik.values.headLine}
                onChange={professionalSummeryFormik.handleChange}
                onBlur={professionalSummeryFormik.handleBlur}
                error={professionalSummeryFormik.errors.headLine}
                touched={professionalSummeryFormik.touched.headLine}
              />
              <CustomInputBox
                title="About You"
                type="text"
                placeholder="Short description about you"
                name="about"
                rows={6}
                value={professionalSummeryFormik.values.about}
                onChange={professionalSummeryFormik.handleChange}
                onBlur={professionalSummeryFormik.handleBlur}
                error={professionalSummeryFormik.errors.about}
                touched={professionalSummeryFormik.touched.about}
              />
            </div>
          </form>
        </section>

        <section>
          <p className="poppins-semibold text-xl mt-10">Skills</p>
          <form onSubmit={skillsFormik.handleSubmit}>
            <div className="grid grid-cols-2 gap-5 mt-5">
              <CustomInputBox
                title="Technical Skills"
                type="text"
                placeholder="Enter Technical Skills(eg: React.js,Web Developement)"
                name="technicalSkill"
                value={skillsFormik.values.technicalSkill}
                onChange={skillsFormik.handleChange}
                onBlur={skillsFormik.handleBlur}
                error={skillsFormik.errors.technicalSkill}
                touched={skillsFormik.touched.technicalSkill}
              />
              <CustomInputBox
                title="Soft Skills"
                type="text"
                placeholder="Enter Your Soft Skills(eg: Team-work,Leadership)"
                name="softSkill"
                value={skillsFormik.values.softSkill}
                onChange={skillsFormik.handleChange}
                onBlur={skillsFormik.handleBlur}
                error={skillsFormik.errors.softSkill}
                touched={skillsFormik.touched.softSkill}
              />
            </div>
          </form>
        </section>
        

        <section>
          <div className="flex items-center  mt-10 justify-between ">
            <p className="poppins-semibold text-xl ">Work Experience</p>
            <FaCirclePlus className="text-custom-yellow text-xl cursor-pointer" />
            <FaCircleMinus className="text-custom-yellow text-xl cursor-pointer" />
          </div>
          <form onSubmit={workExperienceFormik.handleSubmit}>
            <div className="grid grid-cols-2 gap-5 mt-5">
              <CustomInputBox
                title="Job Title"
                type="text"
                placeholder="Job Title(eg: React.js,Web Developement)"
                name="jobTitle"
                value={workExperienceFormik.values.jobTitle}
                onChange={workExperienceFormik.handleChange}
                onBlur={workExperienceFormik.handleBlur}
                error={workExperienceFormik.errors.jobTitle}
                touched={workExperienceFormik.touched.jobTitle}
              />
              <CustomInputBox
                title="Company Name"
                type="text"
                placeholder="Job Title(eg: React.js,Web Developement)"
                name="companyName"
                value={workExperienceFormik.values.companyName}
                onChange={workExperienceFormik.handleChange}
                onBlur={workExperienceFormik.handleBlur}
                error={workExperienceFormik.errors.companyName}
                touched={workExperienceFormik.touched.companyName}
              />
              <CustomInputBox
                title="Job Location"
                type="text"
                placeholder="Enter Your Soft Skills(eg: Team-work,Leadership)"
                name="jobLocation"
                value={workExperienceFormik.values.jobLocation}
                onChange={workExperienceFormik.handleChange}
                onBlur={workExperienceFormik.handleBlur}
                error={workExperienceFormik.errors.jobLocation}
                touched={workExperienceFormik.touched.jobLocation}
              />

              <Dropdown
                buttonLabel="Worked Type "
                menuItems={menuItems}
                dropDownTitile="Select Work Type"
                name="workType"
                value={workExperienceFormik.values.workType}
                onChange={workExperienceFormik.handleChange}
                onBlur={workExperienceFormik.handleBlur}
                error={workExperienceFormik.errors.workType}
                touched={workExperienceFormik.touched.workType}
              />

              <div className="grid grid-cols-2 gap-5">
                {/* Work Start Date */}
                <div>
                  <Calender
                    name="startDate"
                    label="Work Start Date"
                    value={workExperienceFormik.values.startDate}
                    onChange={workExperienceFormik.handleChange}
                    onBlur={workExperienceFormik.handleBlur}
                    error={workExperienceFormik.errors.startDate}
                    touched={workExperienceFormik.touched.startDate}
                    className="w-[17.7rem]"
                  />
                </div>

                {/* Work End Date */}
                <div>
                  <Calender
                    name="endDate"
                    label="Work End Date"
                    value={workExperienceFormik.values.endDate}
                    onChange={workExperienceFormik.handleChange}
                    onBlur={workExperienceFormik.handleBlur}
                    error={workExperienceFormik.errors.endDate}
                    touched={workExperienceFormik.touched.endDate}
                    className="w-[17.7rem]"
                  />
                </div>
              </div>
            </div>
          </form>
        </section>

        <section>
          <div className="flex items-center  mt-10 justify-between ">
            <p className="poppins-semibold text-xl ">Educational Background</p>
            <FaCirclePlus className="text-custom-yellow text-xl cursor-pointer" />
            <FaCircleMinus className="text-custom-yellow text-xl cursor-pointer" />
          </div>
            <form onSubmit={educationFormik.handleSubmit}>
          <div className="grid grid-cols-2 gap-5 mt-5">
              <Dropdown
                buttonLabel="Select education level"
                menuItems={educationMenuItems}
                dropDownTitile="Select Education Level"
                name="educationLevel"
                value={educationFormik.values.dropdown}
                onChange={educationFormik.handleChange}
                onBlur={educationFormik.handleBlur}
                error={educationFormik.errors.dropdown}
                touched={educationFormik.touched.dropdown}
              />
              <CustomInputBox
                title="Branch of study"
                type="text"
                placeholder="Enter Branch Of Study(eg: Electronics,Mechanical)"
                name="branch"
                value={educationFormik.values.branch}
                onChange={educationFormik.handleChange}
                onBlur={educationFormik.handleBlur}
                error={educationFormik.errors.branch}
                touched={educationFormik.touched.branch}
              />
              <CustomInputBox
                title="Instition Name"
                type="text"
                placeholder="Enter Your Institution Name"
                name="institutionName"
                value={educationFormik.values.institutionName}
                onChange={educationFormik.handleChange}
                onBlur={educationFormik.handleBlur}
                error={educationFormik.errors.institutionName}
                touched={educationFormik.touched.institutionName}
              />
              <div className="grid grid-cols-2 gap-5">
                <Calender
                  label="Graduation Start Date"
                  value={educationFormik.values.graduationStartDate}
                  name="graduationStartDate"
                  onChange={educationFormik.handleChange}
                  onBlur={educationFormik.handleBlur}
                  error={educationFormik.errors.graduationStartDate}
                  touched={educationFormik.touched.graduationStartDate}
                  className="w-[17.7rem]"
                />
                <Calender
                  label="Graduation End Date"
                  name="graduationEndDate"
                  value={educationFormik.values.graduationEndDate}
                  onChange={educationFormik.handleChange}
                  onBlur={educationFormik.handleBlur}
                  error={educationFormik.errors.graduationEndDate}
                  touched={educationFormik.touched.graduationEndDate}
                  className="w-[17.7rem]"
                />
              </div>
          </div>
            </form>
        </section>

        <div className="grid sm:grid-cols-1 md:grid-cols-1  lg:grid-cols-3  xl:grid-cols-3  gap-5 lg:justify-between lg:items-center m-5">
          <CustomButton
            buttonText="Previous"
            className="lg:w-1/4 w-full my-5 bg-custom-lightBlue text-white poppins-semibold hover:text-custom-lightBlue hover:bg-white hover:border-custom-lightBlue"
            type="submit"
          />

          <div>
            {" "}
            <Stepper steps={steps} currentStep={3} />
          </div>
          <div className="flex lg:justify-end ">
            <CustomButton
              buttonText="Next"
              className="lg:w-[7rem] w-full my-5 bg-custom-lightBlue text-white poppins-semibold hover:text-custom-lightBlue hover:bg-white hover:border-custom-lightBlue "
              type="submit"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default JobseekerCreateProfile;
