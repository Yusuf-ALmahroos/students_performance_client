import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const AuthCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Handlers to flip the card
  const showRegister = () => setIsFlipped(true);
  const showLogin = () => setIsFlipped(false);

  // After registration, flip back to login automatically
  const onRegisterSuccess = () => setIsFlipped(false);

  return (
    <Box
      sx={{
        perspective: 1000,
        width: 400,
        height: 600,
        mx: 'auto',
        mt: 10,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          textAlign: 'center',
          transition: 'transform 0.8s',
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            bgcolor: 'background.paper',
            boxShadow: 3,
            borderRadius: 2,
            p: 3,
          }}
        >
          <LoginForm onSwitchToRegister={showRegister} />
        </Box>

        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            bgcolor: 'background.paper',
            boxShadow: 3,
            borderRadius: 2,
            p: 3,
            transform: 'rotateY(180deg)',
          }}
        >
          <RegisterForm onSwitchToLogin={showLogin} onRegisterSuccess={onRegisterSuccess} />
        </Box>
      </Box>
    </Box>
  );
};

export default AuthCard;
