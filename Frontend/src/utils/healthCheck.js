import { apiClient } from '../config/api';

export const checkBackendHealth = async () => {
  try {
    console.log('🔍 Checking backend health...');
    console.log('API Base URL:', apiClient.defaults.baseURL);
    
    // Try to access the root endpoint first
    const response = await fetch('https://todo-backend-hi75.onrender.com');
    console.log('✅ Backend is accessible:', response.status, response.statusText);
    
    // Try a simple GET request to see if the server responds
    const testResponse = await apiClient.get('/');
    console.log('✅ API client test successful:', testResponse.status);
    
    return true;
  } catch (error) {
    console.error('❌ Backend health check failed:', error);
    console.error('Error details:', {
      message: error.message,
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data
    });
    return false;
  }
};

export const testLoginEndpoint = async (testData = { email: 'test@test.com', password: 'test123' }) => {
  try {
    console.log('🧪 Testing login endpoint...');
    const response = await apiClient.post('/user/login', testData);
    console.log('✅ Login endpoint test successful:', response.status);
    return true;
  } catch (error) {
    console.error('❌ Login endpoint test failed:', {
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data
    });
    return false;
  }
}; 