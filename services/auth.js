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
    localStorage.setItem('token', res.data.access)
    localStorage.setItem('refresh', res.data.refresh) 
    console.log(res.data)
    return res.data.user;
  } catch (error) {
    console.error(error.message)
  }
}

export const logOutUser = async () => {
  await Client.post('auth/logout/', {refresh: localStorage.getItem('refresh')})
  localStorage.removeItem('token');
  localStorage.removeItem('refresh');
}

export const checkSession = () => {
  try {
    const accessToken = localStorage.getItem('token');
    if (!accessToken) return null;
    const {exp, email, role, user_id,  username} = jwtDecode(accessToken);
    if (Date.now() >= exp * 1000) {
      return null; 
    }
    return { email, role, user_id, username };
  } catch (error) {
    console.error('Invalid token or decode error', error);
    return null;
  }
};