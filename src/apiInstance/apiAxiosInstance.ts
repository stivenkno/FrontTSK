import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL || "https://tsk-cqdw.onrender.com/api",
});

// Interceptor para agregar el token automáticamente
api.interceptors.request.use((config) => {
  // Obtener token del localStorage (solo en el cliente)
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

export default api;
