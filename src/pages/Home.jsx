import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import {mainContext} from '../App'

const Home = () => {
  const {user} = useContext(mainContext)
  return (
    <Box sx={{ minHeight: '70vh', bgcolor: 'white', p: 4 , mt: 10, borderRadius: 5, boxShadow: 5}}>
      <Box sx={{ mb: 6, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        {user ? (
          <Typography variant="h3">Welcome back, {user.username}!</Typography>
        ) : (
          <Typography variant="h3">Track your courses and performance easily.</Typography>
        )}
      </Box>
    </Box>
  );
  
}

export default Home