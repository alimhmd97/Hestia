import { AxiosContext } from "@/contexts/axios-context";
import { useContext } from "react";

export const useAxios = () => {
  const context = useContext(AxiosContext);
  if (!context) {
    throw new Error("useAxios must be used within an AxiosProvider");
  }
  return context.axiosInstance;
};
