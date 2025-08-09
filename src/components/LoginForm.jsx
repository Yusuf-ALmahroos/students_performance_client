import { Box, Typography, Button } from '@mui/material';

const LoginForm = ({ onSwitchToRegister }) => {
  // You can add your login form logic here
  return (
    <Box>
      <Typography variant="h5" gutterBottom>Login</Typography>
      {/* Your login inputs/buttons here */}
      <Button onClick={onSwitchToRegister} sx={{ mt: 2 }}>
        Don't have an account? Register here
      </Button>
    </Box>
  );
};

export default LoginForm;