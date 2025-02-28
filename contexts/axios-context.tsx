"use client";
import { authAxios } from "@/lib/axios"; // Make sure you're importing the correct axios instance
import React, { createContext, ReactNode, useEffect, useRef } from "react";

// Axios context
interface AxiosContextType {
  axiosInstance: typeof authAxios;
}

export const AxiosContext = createContext<AxiosContextType | undefined>(
  undefined
);

interface AxiosProviderProps {
  children: ReactNode;
}

export const AxiosProvider: React.FC<AxiosProviderProps> = ({ children }) => {
  const isFirstFireRef = useRef(true);

  const applyAxiosInterceptors = () => {
    if (!isFirstFireRef) return;
    authAxios.interceptors.request.use((config) => {
      // Add token or modify config
      const token = localStorage.getItem("token") || "test";
      console.log("token");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    authAxios.interceptors.response.use(
      (response) => response,
      (error) => {
        // Handle errors, refresh tokens, etc.
        return Promise.reject(error);
      }
    );
  };

  applyAxiosInterceptors();

  useEffect(() => {
    // console.log("context");
    // authAxios.interceptors.request.use((config) => {
    //   // Add token or modify config
    //   const token = localStorage.getItem("token") || "test";
    //   console.log("token");
    //   if (token) {
    //     config.headers.Authorization = `Bearer ${token}`;
    //   }
    //   return config;
    // });
    // authAxios.interceptors.response.use(
    //   (response) => response,
    //   (error) => {
    //     // Handle errors, refresh tokens, etc.
    //     return Promise.reject(error);
    //   }
    // );
  }, []);
  return (
    <AxiosContext.Provider value={{ axiosInstance: authAxios }}>
      {children}
    </AxiosContext.Provider>
  );
};
