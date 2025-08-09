import Client from './api'
import { jwtDecode } from 'jwt-decode'

export const registerUser = async (data) => {
  try {
    const res = await Client.post('/auth/register/', data)
    return res.data
  } catch (error) {
    console.error(error.message)
  }
}

export const logInUser = async (data) => {
  try {
    const res = await Client.post('/auth/login/', data)
    localStorage.setItem('token', res.data.token)
    return res.data.user;
  } catch (error) {
    console.error(error.message)
  }
}

export const checkSession = () => {
  try {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) return null; // no session

    const { exp } = jwtDecode(accessToken); // decode expiry (exp is in seconds)
    if (Date.now() >= exp * 1000) {
      return null; // or trigger logout / login
    }

    return { accessToken };
  } catch (error) {
    console.error('Invalid token or decode error', error);
    return null;
  }
};