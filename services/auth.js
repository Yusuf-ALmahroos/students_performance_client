import Client from './api'

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

export const checkSession = async () => {
  try {
    // Checks if the current token if it exists is valid
    const res = await Client.get('/auth/session/')
    return res.data
  } catch (error) {
    console.error(error.message)
  }
}