import { Box, Typography, Button, TextField } from '@mui/material';
import { mainContext } from '../App';
import { useContext, useState } from 'react';
import Client from '../../services/api';
import { logInUser } from '../../services/auth';

const initialState = {
  email: '',
  password: ''
}
const LoginForm = ({ onSwitchToRegister }) => {
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState("")

  const {setUser} = useContext(mainContext);

  const handleInputChange = (e) =>  {
    setFormData(prev => ({...prev, [e.target.name]: e.target.value}))
  }
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await logInUser('auth/login/', formData);
      setUser(user)
      setError("");
    } catch (error) {
      console.log(error)
      setError("Error in Login")
    }
  }

  return (
    <Box>
      <Typography variant="h5" gutterBottom>Login</Typography>
      <TextField
        label="Email"
        name="email"
        type='email'
        value={formData.email}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        name="password"
        type='password'
        value={formData.password}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <Button onClick={handleFormSubmit} variant="contained" color='warning' sx={{ mt: 2 }}> 
        Submit
      </Button>
      <Button fullWidth onClick={onSwitchToRegister} sx={{ mt: 2 }}>
        Don't have an account? Register here
      </Button>
      <Typography variant='body2' color='error' mt={2} >{error ?? ""}</Typography>
    </Box>
  );
};

export default LoginForm;