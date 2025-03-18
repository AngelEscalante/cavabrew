// src/utils/axiosConfig.js
import axios from 'axios';

// Base URL de tu backend
const BASE_URL = 'http://localhost:3000'; // Cambia esto por la URL de tu backend

// Objeto para almacenar peticiones en curso
const activeRequests = {};

// Crear instancia de Axios
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para evitar peticiones duplicadas
api.interceptors.request.use(
  (config) => {
    const requestId = `${config.url}-${JSON.stringify(config.data)}-${config.method}`;

    if (activeRequests[requestId]) {
      // Si la petición ya está en curso, devolvemos la misma promesa
      return activeRequests[requestId];
    }

    // Creamos una nueva promesa para la petición
    const requestPromise = api(config);

    // Almacenamos la promesa en el objeto de peticiones activas
    activeRequests[requestId] = requestPromise;

    // Eliminamos la petición del objeto cuando se resuelva
    requestPromise.finally(() => {
      delete activeRequests[requestId];
    });

    return requestPromise;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor de respuesta para manejo global de errores
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // Manejo de errores global
    console.error('Error en la petición:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;