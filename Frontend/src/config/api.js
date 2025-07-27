// API Configuration
const isDevelopment = import.meta.env.VITE_DEV === 'true';
export const API_BASE_URL = isDevelopment 
  ? '/api' 
  : (import.meta.env.VITE_API_BASE_URL || 'https://todo-backend-hi75.onrender.com');

// Debug: Log the configuration
console.log('🔧 API Configuration:', {
  isDevelopment,
  VITE_DEV: import.meta.env.VITE_DEV,
  VITE_API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
  finalApiBaseUrl: API_BASE_URL
});

// API endpoints
export const API_ENDPOINTS = {
  // Auth endpoints
  LOGIN: '/user/login',
  REGISTER: '/user/register',
  LOGOUT: '/user/logout',
  
  // Todo endpoints
  TODOS: '/todos',
  TODO_BY_ID: (id) => `/todos/${id}`,
  
  // User endpoints
  USER_PROFILE: '/user/profile',
};

// Helper function to get full API URL
export const getApiUrl = (endpoint) => {
  return `${API_BASE_URL}${endpoint}`;
};

// Axios instance with default configuration
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', {
      status: error.response?.status,
      statusText: error.response?.statusText,
      url: error.config?.url,
      method: error.config?.method,
      data: error.response?.data
    });
    
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
); 