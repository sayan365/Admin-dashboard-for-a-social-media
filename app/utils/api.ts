import axios from 'axios';

const API_BASE_URL = 'https://api.socialverseapp.com';

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Function to fetch dashboard data
export const fetchDashboardData = async () => {
  try {
    const response = await api.get('/admin/dashboard');
    return response.data; // Return the data to be used in the component
  } catch (error) {
    console.error('Error fetching dashboard data', error);
    throw error;
  }
};
export const fetchData = async () => {
  try {
    const response = await api.get('/admin/dashboard');
    return response.data; // Return the data to be used in the component
  } catch (error) {
    console.error('Error fetching dashboard data', error);
    throw error;
  }
};

export const fetchUserActivity = async () => {
  try {
    const response = await api.get('/admin/dashboard'); // The actual endpoint for fetching user data
    return response.data;
  } catch (error) {
    console.error('Error fetching user activity:', error);
    throw error;
  }
};
