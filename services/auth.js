import Client from './api'
import { jwtDecode } from 'jwt-decode'

export const registerUser = async (data) => {
  try {
    const res = await Client.post('auth/register/', data)
    return res.data
  } catch (error) {
    console.error(error.message)
  }
}

export const logInUser = async (data) => {
  try {
    const res = await Client.post('auth/login/', data)
    localStorage.setItem('token', res.data.token)
    localStorage.setItem('refresh', res.data.refresh)
    return res.data.user;
  } catch (error) {
    console.error(error.message)
  }
}

export const logOutUser = async () => {
  await Client.post('auth/logout/', localStorage.getItem('refresh'))
  localStorage.removeItem('token');
  localStorage.removeItem('refresh');
}

export const checkSession = () => {
  try {
    const accessToken = localStorage.getItem('token');
    if (!accessToken) return null;

    const { exp } = jwtDecode(accessToken);
    if (Date.now() >= exp * 1000) {
      return null; 
    }

    return { accessToken };
  } catch (error) {
    console.error('Invalid token or decode error', error);
    return null;
  }
};