import * as Yup from "yup";
import { emailRegex } from "./authSchema";

//================= personal information ==============

export const nameValidation = Yup.string()
  .required("Name is required")
  .min(2, "Name must be at least 2 characters")
  .max(30, "Name cannot exceed 50 characters");

export const emailValidation = Yup.string()
  .matches(emailRegex, "Invalid email address")
  .email("Invalid email address")
  .required("Email is required");

export const phoneNumberValidation = Yup.string()
  .length(10, "Phone number must be exactly 10 digits")
  .matches(/[0-9]/, "Invalid phonenumber format")
  .required("Phonenumber is required");

export const dobValidation = Yup.date()
  .required("Date of birth is required")
  .max(new Date(), "Date of birth cannot be in the future")
  .test("age", "You must be at least 18 years old", (value) => {
    const today = new Date();
    const age = today.getFullYear() - new Date(value).getFullYear();
    return age >= 18;
  });

export const linkedinValidation = Yup.string()
  .required("LinkedIn profile is required")
  .matches(
    /^https:\/\/[a-z]{2,3}\.linkedin\.com\/.*$/i,
    "Invalid LinkedIn URL"
  );

export const currentCityValidation = Yup.string().required(
  "Current city is required"
);

export const currentStateValidation = Yup.string().required(
  "Current state is required"
);

export const currentCountryValidation = Yup.string().required(
  "Current country is required"
);

export const genderValidation = Yup.string().required("Gender is required");

export const profilePhotoValidation = Yup.mixed()
  .required("Profile photo is required")
  .test("fileFormat", "Unsupported file format", (value) => {
    if (typeof value === "string" && value.startsWith("data:image/")) {
      return true; // It's a valid base64 image string
    }
    return false; // Invalid format
  });

export const headLineValidation = Yup.string().required("Headline is required");
export const aboutValidation = Yup.string()
  .required("About is required")
  .min(20, "About must be at least 20 characters")
  .max(1000, "About cannot exceed 1000 characters");

export const personalInformationInitialValues = {
  fullName: "",
  email: "",
  phoneNumber: "",
  dob: "",
  linkedinProfile: "",
  currentCity: "",
  currentState: "",
  currentCountry: "",
  gender: "",
  profilePhoto: null,
  headLine: "",
  about: "",
};

export const personalInformationSchema = Yup.object({
  fullName: nameValidation,
  email: emailValidation,
  phoneNumber: phoneNumberValidation,
  dob: dobValidation,
  linkedinProfile: linkedinValidation,
  currentCity: currentCityValidation,
  currentState: currentStateValidation,
  currentCountry: currentCountryValidation,
  gender: genderValidation,
  profilePhoto: profilePhotoValidation,
  headLine: headLineValidation,
  about: aboutValidation,
});

//================= skills ==============

export const technicalSkillValidation = Yup.array()
  .of(Yup.string().required("Technical skill is required"))
  .min(1, "At least one technical skill is required");

export const softSkillValidation = Yup.array()
  .of(Yup.string().required("Soft skill is required"))
  .min(1, "At least one soft skill is required");

export const skillsInitialValues = {
  technicalSkill: "",
  softSkill: "",
  technicalSkills: [], // Array to store technical skills
  softSkills: [], // Array to store soft skills
};

export const skillsSchema = Yup.object({
  technicalSkill: Yup.string(), // Optional, used for input validation
  softSkill: Yup.string(), // Optional, used for input validation
  technicalSkills: technicalSkillValidation,
  softSkills: softSkillValidation,
});

//================= work experience ==============
export const jobTitleValidation = Yup.string()
  .required("Job title is required")
  .min(2, "Job title must be at least 2 characters long");

export const companyNameValidation = Yup.string()
  .required("Company name is required")
  .min(2, "Company name must be at least 2 characters long");

export const jobLocationValidation = Yup.string()
  .required("Job location is required")
  .min(2, "Job location must be at least 2 characters long");

export const workTypeValidation = Yup.string()
  .required("Work type is required")
  .oneOf(
    ["full-time", "wfo", "wfh", "hybrid", "freelancer", "internship"],
    "Invalid work type"
  );

export const startDateValidation = Yup.date()
  .required("Start date is required")
  .typeError("Invalid start date format");

export const endDateValidation = Yup.date()
  .required("End date is required")
  .typeError("Invalid end date format")
  .min(Yup.ref("startDate"), "End date cannot be before start date");

export const workExperienceInitailValues = {
  jobTitle: "",
  companyName: "",
  jobLocation: "",
  workType: "",
  startDate: "",
  endDate: "",
};

export const workExperienceSchema = Yup.object({
  jobTitle: jobTitleValidation,
  companyName: companyNameValidation,
  jobLocation: jobLocationValidation,
  workType: workTypeValidation,
  startDate: startDateValidation,
  endDate: endDateValidation,
});

//================== education qualififcation ==================

export const educationLevelValidation = Yup.string()
  .required("Education level is required")
  .oneOf(
    ["plusTwo", "diploma", "ug", "pg", "btech", "mtech", "phd", "others"],
    "Invalid education level"
  );

export const branchOfStudyValidation = Yup.string()
  .required("Branch of study is required")
  .min(2, "Branch of study must be at least 2 characters long");

export const institutionValidation = Yup.string()
  .required("Institution is required")
  .min(2, "Institution name must be at least 2 characters long");

export const graduationStartValidation = Yup.date()
  .required("Graduation start date is required")
  .typeError("Invalid start date format");

export const graduationEndValidation = Yup.date()
  .required("Graduation end date is required")
  .typeError("Invalid end date format")
  .min(
    Yup.ref("graduationStartDate"),
    "Graduation end date cannot be before start date"
  );

export const educationInitialValues = {
  educationLevel: "",
  branch: "",
  institutionName: "",
  graduationStartDate: "",
  graduationEndDate: "",
};

export const educationSchema = Yup.object({
  educationLevel: educationLevelValidation,
  branch: branchOfStudyValidation,
  institutionName: institutionValidation,
  graduationStartDate: graduationStartValidation,
  graduationEndDate: graduationEndValidation,
});
