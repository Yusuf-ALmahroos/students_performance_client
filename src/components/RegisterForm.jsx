import { 
  Box, 
  Typography, 
  Button, 
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Autocomplete,
 } from '@mui/material';
import { useState } from 'react';

const RegisterForm = ({ onSwitchToLogin, onRegisterSuccess }) => {
  const initialState = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: ''
  }

  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState("");

  const handleRegister = () => {
    onRegisterSuccess();
  };

  const handleInputChange = (e) => {
    setFormData(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  return (
    <Box>
      <Typography variant="h5" gutterBottom>Register</Typography>
       <TextField
        label="Username"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
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

      <TextField
        label="Confirm Password"
        name="confirmPassword"
        type='password'
        value={formData.confirmPassword}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />

      <FormControl fullWidth margin="normal" required>
        <InputLabel id="role-label">Role</InputLabel>
        <Select
          labelId="role-label"
          name="role"
          value={formData.role}
          label="Role"
          onChange={handleInputChange}
        >
          <MenuItem value="student">Student</MenuItem>
          <MenuItem value="teacher">Teacher</MenuItem>
        </Select>
      </FormControl>

      <Button onClick={handleRegister} variant="contained" color='warning' sx={{ mt: 2 }}>
        Register
      </Button>
      <Button onClick={onSwitchToLogin} sx={{ mt: 1 }}>
        Back to Login
      </Button>
      {(
        (formData.password && formData.confirmPassword) &&
        (formData.password !== formData.confirmPassword)
        ) && 
        <Typography 
          variant='body2' 
          color="error"
          mt={2}
        >
          {"Password and Confirm Password must match"}
        </Typography>
      }

    </Box>
  );
};

export default RegisterForm;