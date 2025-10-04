import axios from "axios";

console.log("API Base URL:", import.meta.env);

const instance = axios.create({
  baseURL: "http://127.0.0.1:5000/api/", //import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:5000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getAPI() {
  return instance;
}
