import axios from "axios";

console.log("API Base URL:", import.meta.env);

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getAPI() {
  return instance;
}
