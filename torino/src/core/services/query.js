import { useQuery } from "@tanstack/react-query";
import api from "../config/api";

const useGetUserData = () => {
  const queryFn = () => api.get("/user/profile");
  const queryKey = ["user-data"];
  return useQuery({ queryFn, queryKey });
};
const useGetBasket = () => {
  const queryFn = () => api.get("/basket")
  const queryKey = ["basket"]
  return useQuery({queryKey , queryFn})
}
export { useGetUserData  , useGetBasket};
