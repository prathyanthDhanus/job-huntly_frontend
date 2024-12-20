import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import jobseekerAxios from "../../axios/JobSeekerAxiosInstance";
import {
  showErrorToast,
  showSuccessToast,
} from "../../utils/toastNotification/ToastNotification";

//====================== jobseeker login ===========================

export const useJobseekerLogin = () => {
  return useMutation({
    mutationFn: async (values) => {
      const response = await jobseekerAxios.post(
        "/api/jobseeker/login",
        values
      );
      return response.data;
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data?.data?.token);
      showSuccessToast(data?.message);
      navigate("/");
    },
    onError: (error) => {
      showErrorToast(
        error?.response?.data?.message || "Login failed. Try again."
      );
    },
  });
};
