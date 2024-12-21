import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../config/api";
import { setCookie } from "@/utils/cookie";

const sendOtp = () => {
  const mutationFn = (data) => api.post("auth/send-otp", data);
  return useMutation({ mutationFn });
};

const checkOtp = () => {
  const queryClient = useQueryClient();

  const mutationFn = (data) => api.post("auth/check-otp", data);

  const onSuccess = (data) => {
    setCookie("accessToken", data?.data?.accessToken, 30);
    setCookie("refreshToken", data?.data?.refreshToken, 365);
    queryClient.invalidateQueries({ queryKey: ["user-data"] });
  };

  return useMutation({ mutationFn, onSuccess });
};

const useAddToBasket = (tourId) => {
  const queryClient = useQueryClient();

  const mutationFn = api.put(`/basket/${tourId}`);
  return useMutation(
    { mutationFn },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["basket"] });
      },
    }
  );
};
const useSubmitOrder = (data) => {
  const mutationFn = api.post("/order", data, {
    headers: { "Content-Type": "application/json" },
  });
  return useMutation({ mutationFn });
};

const useUpdateBankAccount = () => {
  const queryClient = useQueryClient();

  const mutationFn = (data) => api.put("user/profile", data);

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["user-data"] });
  };

  return useMutation({ mutationFn, onSuccess });
};
export { sendOtp, checkOtp, useSubmitOrder, useAddToBasket ,useUpdateBankAccount };
