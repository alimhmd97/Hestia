import axios from "axios";

// Base URL for your API
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "URL not found";

// Non-authenticated Axios instance
export const nonAuthAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Authenticated Axios instance
export const authAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
