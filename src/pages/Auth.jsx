import { useState } from 'react';
import { Box } from '@mui/material';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const formBoxSx = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  bgcolor: 'white',
  boxShadow: 3,
  borderRadius: 2,
  p: 3,
}
const AuthCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const showRegister = () => setIsFlipped(true);
  const showLogin = () => setIsFlipped(false);

  const onRegisterSuccess = () => setIsFlipped(false);

  return (
    <Box
      width={400}
      height={600}
      mx='auto'
      mt={10}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          textAlign: 'center',
          transition: 'transform 0.8s',
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        <Box sx={{
          ...formBoxSx,
          height: '60%'}}>
          <LoginForm onSwitchToRegister={showRegister} />
        </Box>

        <Box sx={{
            ...formBoxSx,
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
