import React, { useState,useEffect } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";

import vector from "../../assets/images/Vector.png";
import CustomInputBox from "../../components/inputbox/CustomInput";
import CustomFileInput from "../../components/inputbox/CustomFileInput";
import CustomButton from "../../components/button/CustomButton";
import Stepper from "../../components/stepper/Stepper";
import Dropdown from "../../components/inputbox/Dropdown";
import Calender from "../../components/inputbox/DatePicker";

import { useGlobalFormik } from "../../customHooks/useFormik";
import {
  educationInitialValues,
  educationSchema,
  personalInformationInitialValues,
  personalInformationSchema,
  skillsInitialValues,
  skillsSchema,
  workExperienceInitailValues,
  workExperienceSchema,
} from "../../utils/validation/jobseekerProfileValidation";

const JobseekerCreateProfile = () => {
  // const [currentStep, setCurrentStep] = useState(1);

  // Initialize state with the value from localStorage or default to 1
  const [currentStep, setCurrentStep] = useState(() => {
    const savedStep = localStorage.getItem("currentStep");
    return savedStep ? parseInt(savedStep, 10) : 1; // Parse saved value or use default 1
  });
  console.log("current step", currentStep);

  const steps = [
    { label: "01" },
    { label: "02 " },
    { label: "03 " },
    { label: "04 " },
  ];

  const menuItems = [
    { label: "Wrok from office", value: "wfo" },
    { label: "Work from home", value: "wfh" },
    { label: "Hybrid", value: "htbrid" },
    { label: "Freelancer", value: "freelancer" },
  ];

  const educationMenuItems = [
    { label: "Plus Two (Higher Secondary)", value: "plusTwo" },
    { label: "Diploma", value: "diploma" },
    { label: "Undergraduate (UG)", value: "ug" },
    { label: "Postgraduate (PG)", value: "pg" },
    { label: "Bachelor of Technology (B.Tech)", value: "btech" },
    { label: "Master of Technology (M.Tech)", value: "mtech" },
    { label: "Doctorate (Ph.D.)", value: "phd" },
    { label: "Others", value: "others" },
  ];

  const personalInfoFormik = useGlobalFormik({
    initialValues: personalInformationInitialValues,
    validationSchema: personalInformationSchema,
    onSubmit: (values) => {
      console.log("personalInfoFormik", values);
      localStorage.setItem("personalInfo", JSON.stringify(values));
    },
  });

  const skillsFormik = useGlobalFormik({
    initialValues: skillsInitialValues,
    validationSchema: skillsSchema,
    onSubmit: (values) => {
      console.log(values);
      localStorage.setItem("skills", JSON.stringify(values));
    },
  });

  const workExperienceFormik = useGlobalFormik({
    initialValues: workExperienceInitailValues,
    validationSchema: workExperienceSchema,
    onSubmit: (values) => {
      console.log(values);
      localStorage.setItem("workExperience", JSON.stringify(values));
    },
  });

  const educationFormik = useGlobalFormik({
    initialValues: educationInitialValues,
    validationSchema: educationSchema,
    onSubmit: (values) => {
      console.log(values);
      localStorage.setItem("education", JSON.stringify(values));
    },
  });

  const handleSaveProfile = () => {
    // Retrieve data from localStorage
    const personalInfo = JSON.parse(
      localStorage.getItem("personalInfo") || "{}"
    );
    const skills = JSON.parse(localStorage.getItem("skills") || "{}");
    const workExperience = JSON.parse(
      localStorage.getItem("workExperience") || "{}"
    );
    const education = JSON.parse(localStorage.getItem("education") || "{}");

    // Combine the data into a single object
    const profileData = {
      personalInfo,
      skills,
      workExperience,
      education,
    };

    console.log("Profile Data:", profileData);

    // Return or use the profileData object as needed
    return profileData;
  };

  // Load data for each formik instance from localStorage on component mount
  useEffect(() => {
    const savedPersonalInfo = localStorage.getItem("personalInfo");
    if (savedPersonalInfo) {
      personalInfoFormik.setValues(JSON.parse(savedPersonalInfo));
    }

    const savedSkills = localStorage.getItem("skills");
    if (savedSkills) {
      skillsFormik.setValues(JSON.parse(savedSkills));
    }

    const savedWorkExperience = localStorage.getItem("workExperience");
    if (savedWorkExperience) {
      workExperienceFormik.setValues(JSON.parse(savedWorkExperience));
    }

    const savedEducation = localStorage.getItem("education");
    if (savedEducation) {
      educationFormik.setValues(JSON.parse(savedEducation));
    }
  }, []); // Only runs on mount

  const formikSteps = {
    1: personalInfoFormik,
    2: skillsFormik,
    3: workExperienceFormik,
    4: educationFormik,
  };

  const saveCurrentStep = (nextStep) => {
    setCurrentStep(nextStep);
    localStorage.setItem("currentStep", nextStep); // Save step to localStorage
  };

  const savePersonalInfo = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const currentFormik = formikSteps[currentStep]; // Get the current Formik instance
    const errors = await currentFormik.validateForm();

    if (Object.keys(errors).length === 0) {
      console.log(`Form Values for Step ${currentStep}:`, currentFormik.values);
      currentFormik.handleSubmit(); // Trigger Formik's submission logic
      if (currentStep < Object.keys(formikSteps).length) {
        saveCurrentStep(currentStep + 1); // Move to the next step
      }
    } else {
      currentFormik.setTouched(errors); // Mark fields as touched to show errors
    }
  };

  const goToPreviousStep = (e) => {
    e.preventDefault(); // Prevent default form submission

    if (currentStep > 1) {
      saveCurrentStep(currentStep - 1); // Move to the previous step

      // Dynamically load data for the previous step
      const previousStepFormik = formikSteps[currentStep - 1];
      const savedData = localStorage.getItem(
        Object.keys(formikSteps)[currentStep - 2]
      );
      if (savedData) {
        previousStepFormik.setValues(JSON.parse(savedData)); // Populate Formik fields
      }
    }
  };

  const handleFileChange = (name, file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        // Set the base64 string in Formik
        personalInfoFormik.setFieldValue(name, reader.result);
      };

      reader.readAsDataURL(file); // Convert the file to a base64 string
    }
  };

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
        {currentStep === 1 && (
          <>
            <section className="">
              <p className="poppins-semibold text-xl my-3">
                Personal Information
              </p>
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
                          checked={
                            personalInfoFormik.values.gender === "female"
                          }
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
                          checked={
                            personalInfoFormik.values.gender === "others"
                          }
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
                  onChange={(name, file) => handleFileChange(name, file)} // Convert to base64 and update Formik value
                  onBlur={personalInfoFormik.handleBlur}
                  error={personalInfoFormik.errors.profilePhoto}
                  touched={personalInfoFormik.touched.profilePhoto}
                />

                <p className="poppins-semibold text-xl mt-10">
                  Professional Summary
                </p>
                <div className="grid gap-3 mt-5">
                  <CustomInputBox
                    title="HeadLine"
                    type="text"
                    placeholder="Enter Headline(eg: Experienced Frontend Developer)"
                    name="headLine"
                    value={personalInfoFormik.values.headLine}
                    onChange={personalInfoFormik.handleChange}
                    onBlur={personalInfoFormik.handleBlur}
                    error={personalInfoFormik.errors.headLine}
                    touched={personalInfoFormik.touched.headLine}
                  />
                  <CustomInputBox
                    title="About You"
                    type="text"
                    placeholder="Short description about you"
                    name="about"
                    rows={6}
                    value={personalInfoFormik.values.about}
                    onChange={personalInfoFormik.handleChange}
                    onBlur={personalInfoFormik.handleBlur}
                    error={personalInfoFormik.errors.about}
                    touched={personalInfoFormik.touched.about}
                  />
                </div>
              </form>
            </section>
          </>
        )}

        {currentStep === 2 && (
          <>
            <section>
              <p className="poppins-semibold text-xl mt-10">Skills</p>
              <form onSubmit={skillsFormik.handleSubmit}>
                <div className="grid grid-cols-2 gap-5 mt-5">
                  {/* Technical Skills Section */}
                  <div className="grid grid-cols-7 items-center">
                    <div className="col-span-6">
                      <CustomInputBox
                        title="Technical Skills"
                        type="text"
                        placeholder="Enter Technical Skills (e.g., React.js, Web Development)"
                        name="technicalSkill"
                        value={skillsFormik.values.technicalSkill}
                        onChange={skillsFormik.handleChange}
                        onBlur={skillsFormik.handleBlur}
                        error={skillsFormik.errors.technicalSkill}
                        touched={skillsFormik.touched.technicalSkill}
                      />
                    </div>
                    <FaCirclePlus
                      className="text-custom-yellow text-xl cursor-pointer mx-7 mt-10"
                      onClick={() => {
                        if (skillsFormik.values.technicalSkill) {
                          skillsFormik.setFieldValue("technicalSkills", [
                            ...skillsFormik.values.technicalSkills,
                            skillsFormik.values.technicalSkill,
                          ]);
                          skillsFormik.setFieldValue("technicalSkill", ""); // Clear input field
                          skillsFormik.validateField("technicalSkills"); // Manually trigger validation
                        }
                      }}
                    />
                  </div>

                  {/* Soft Skills Section */}
                  <div className="grid grid-cols-7 items-center">
                    <div className="col-span-6">
                      <CustomInputBox
                        title="Soft Skills"
                        type="text"
                        placeholder="Enter Your Soft Skills (e.g., Teamwork, Leadership)"
                        name="softSkill"
                        value={skillsFormik.values.softSkill}
                        onChange={skillsFormik.handleChange}
                        onBlur={skillsFormik.handleBlur}
                        error={skillsFormik.errors.softSkill}
                        touched={skillsFormik.touched.softSkill}
                      />
                    </div>
                    <FaCirclePlus
                      className="text-custom-yellow text-xl cursor-pointer mx-7 mt-10"
                      onClick={() => {
                        if (skillsFormik.values.softSkill) {
                          skillsFormik.setFieldValue("softSkills", [
                            ...skillsFormik.values.softSkills,
                            skillsFormik.values.softSkill,
                          ]);
                          skillsFormik.setFieldValue("softSkill", ""); // Clear input field
                          skillsFormik.validateField("softSkills"); // Manually trigger validation
                        }
                      }}
                    />
                  </div>
                </div>

                {/* List Skills */}
                <div className="mt-5">
                  <p className="poppins-semibold text-lg">Listed Skills:</p>
                  <div className="mt-3">
                    <p className="font-medium">Technical Skills:</p>
                    <ul className="list-disc ml-6">
                      {skillsFormik.values.technicalSkills.map(
                        (skill, index) => (
                          <li key={index}>{skill}</li>
                        )
                      )}
                    </ul>
                  </div>
                  <div className="mt-3">
                    <p className="font-medium">Soft Skills:</p>
                    <ul className="list-disc ml-6">
                      {skillsFormik.values.softSkills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="mt-5 bg-custom-yellow px-6 py-2 rounded-md text-white font-semibold"
                >
                  Save Skills
                </button>
              </form>
            </section>
          </>
        )}

        {currentStep === 3 && (
          <>
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
                        className="w-[18rem]"
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
                        className="w-[18rem]"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </section>
          </>
        )}

        {currentStep === 4 && (
          <>
            <section>
              <div className="flex items-center  mt-10 justify-between ">
                <p className="poppins-semibold text-xl ">
                  Educational Background
                </p>
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
                    value={educationFormik.values.educationLevel}
                    onChange={educationFormik.handleChange}
                    onBlur={educationFormik.handleBlur}
                    error={educationFormik.errors.educationLevel}
                    touched={educationFormik.touched.educationLevel}
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
                      className="w-[18rem]"
                    />
                    <Calender
                      label="Graduation End Date"
                      name="graduationEndDate"
                      value={educationFormik.values.graduationEndDate}
                      onChange={educationFormik.handleChange}
                      onBlur={educationFormik.handleBlur}
                      error={educationFormik.errors.graduationEndDate}
                      touched={educationFormik.touched.graduationEndDate}
                      className="w-[18rem]"
                    />
                  </div>
                </div>
              </form>
            </section>
          </>
        )}

        <div className="grid sm:grid-cols-1 md:grid-cols-1  lg:grid-cols-3  xl:grid-cols-3  gap-5 lg:justify-between lg:items-center m-5 justify-center ">
          <CustomButton
            buttonText="Previous"
            className="lg:w-1/4 w-full my-5 bg-custom-lightBlue text-white poppins-semibold hover:text-custom-lightBlue hover:bg-white hover:border-custom-lightBlue"
            type="submit"
            onClick={goToPreviousStep}
          />

          <div>
            , <Stepper steps={steps} currentStep={currentStep} />
          </div>
          <div className="lg:flex lg:justify-end  ">
            {currentStep === 4 ? (
              <>
                <CustomButton
                  buttonText="Submit"
                  className="lg:w-[7rem] w-full my-5 bg-custom-lightBlue text-white poppins-semibold hover:text-custom-lightBlue hover:bg-white hover:border-custom-lightBlue "
                  type="submit"
                  onClick={handleSaveProfile}
                />
              </>
            ) : (
              <>
                <CustomButton
                  buttonText="Next"
                  className="lg:w-[7rem] w-full my-5 bg-custom-lightBlue text-white poppins-semibold hover:text-custom-lightBlue hover:bg-white hover:border-custom-lightBlue "
                  type="submit"
                  onClick={savePersonalInfo}
                  // onClick={next}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobseekerCreateProfile;
