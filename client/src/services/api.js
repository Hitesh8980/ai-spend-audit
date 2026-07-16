import axios from "axios";

const api = axios.create({
  baseURL: "https://ai-spend-audit-atoq.onrender.com/api",
});

export default api;