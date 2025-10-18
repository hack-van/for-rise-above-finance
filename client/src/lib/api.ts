import axios from "axios";

console.log("API Base URL:", import.meta.env.VITE_API_BASE_URL);

if (!import.meta.env.VITE_API_BASE_URL) {
  console.error(
    "VITE_API_BASE_URL is not defined in the environment variables."
  );
}

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getAPI() {
  return instance;
}
