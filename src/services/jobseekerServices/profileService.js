import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import jobseekerAxios from "../../axios/JobSeekerAxiosInstance";
import {
  showErrorToast,
  showSuccessToast,
} from "../../utils/toastNotification/ToastNotification";

//============================= create profile =========================

export const jobseekerCreateProfile = () => {
  return useMutation({
    mutationFn: async (values) => {
      const response = await jobseekerAxios.post(
        "/api/jobseeker/profile",
        values
      );
      return response?.data?.data;
    },
    onSuccess: (data) => {
      showSuccessToast(data?.message);
    },
    onError: (error) => {
      showErrorToast(
        error?.response?.data?.message || "Profile creation failed. Try again."
      );
    },
  });
};
