// src/api.js
import axios from "axios";

// Automatically switch between localhost (development) and Railway (production)
const BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// Create an axios instance for cleaner requests
const api = axios.create({
  baseURL: BASE_URL,
});

// API calls
export const getTransactions = () => api.get("/");
export const addTransaction = (data) => api.post("/", data);
export const deleteTransaction = (id) => api.delete(`/${id}`);
