import axios from 'axios';

const API = axios.create({
    baseURL: 'https://localhost:9000',
});

export const getServices = () => API.get('/services');
export const getBills = () => API.get('/bills');
export const getNotifications = () => API.get('/notifications');
export const getProfile = () => API.get('/profile');
export const updateProfile = (profileData: any) => API.put('/profile', profileData);

export default API;
