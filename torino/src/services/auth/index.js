import { useMutation } from "@tanstack/react-query";
import api from "../api";


const sendOtp = () => {
  const mutationFn = (data) => api.post("auth/send-otp", data);

  return useMutation({ mutationFn });
};

const checkOtp = () => {
  const mutationFn = (data) => api.post("auth/check-otp", data);

  return useMutation({ mutationFn });
};
export { sendOtp, checkOtp };
