import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../config/api";

const sendOtp = () => {
  const mutationFn = (data) => api.post("auth/send-otp", data);
  return useMutation({ mutationFn });
};

const checkOtp = () => {
  const queryClient = useQueryClient();
  const mutationFn = (data) => api.post("auth/check-otp", data);
   const onSuccess = () => {
      queryClient.invalidateQueries({ queryKey: ["user-data"] });
   };
  return useMutation({ mutationFn , onSuccess });
};


export { sendOtp, checkOtp };
