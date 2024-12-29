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
  .test(
    "age",
    "You must be at least 18 years old",
    (value) => {
      const today = new Date();
      const age = today.getFullYear() - new Date(value).getFullYear();
      return age >= 18;
    }
  );

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

export const genderValidation = Yup.string()
  .required("Gender is required")
  

  export const profilePhotoValidation = Yup.mixed()
  .required("Profile photo is required")
  .test(
    "fileFormat",
    "Unsupported file format",
    (value) => value && /\.(jpg|jpeg|png)$/i.test(value.name)
  );


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

export const technicalSkillValidation = Yup.string().required(
  "Technical skill is required"
);
export const softSkillValidation = Yup.string().required(
  "Soft skill is required"
);

export const skillsInitialValues = {
  technicalSkill: "",
  softSkill: "",
};

export const skillsSchema = Yup.object({
  technicalSkill: technicalSkillValidation,
  softSkill: softSkillValidation,
});

//================= work experience ==============

export const jobTitleValidation = Yup.string().required(
  "Job title is required"
);
export const companyNameValidation = Yup.string().required(
  "Company name is required"
);
export const jobLocationValidation = Yup.string().required(
  "Job location is required"
);
export const workTypeValidation = Yup.string().required(
  "Work type is required"
);
export const startDateValidation = Yup.string().required(
  "Start date is required"
);
export const endDateValidation = Yup.string().required("End date is required");

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

export const educationLevelValidation = Yup.string().required(
  "Education level is required"
);
export const branchOfStudyValidation = Yup.string().required(
  "Branch of study is required"
);
export const institutionValidation = Yup.string().required(
  "Institution is required"
);
export const graduationStartValidation = Yup.string().required(
  "Gradution start date is required"
);
export const graduationEndValidation = Yup.string().required(
  "Graduation end  date is required"
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
