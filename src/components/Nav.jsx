import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  Button,
  List,
  ListItem
} from '@mui/material';
import { useNavigate } from 'react-router-dom';


const navBarOptions = ['Home','Profile','Dashboard', 'Students']

export default function Nav({ onLogin, onRegister }) {
  const navigate = useNavigate();
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      
    >
      <Box sx={{
        display: 'flex', 
        height: '70px',
        alignItems: 'center',
        padding: 2
        }}>
        <Typography justifySelf={'flex-start'} variant="h5" sx={{fontWeight: 550}} flex={1}>
          Students Performance Anayltics Platform
        </Typography>
          <Box flex={1} display={'flex'} gap={1}>
          {navBarOptions.map((text) => (
            <Button 
              key={text}
              sx={{fontWeight: 600, height: '45px'}} 
              variant='text' 
              color="white"
              onClick={() => {navigate(`/${text.toLocaleLowerCase()}`)}}
            >{text}</Button>
          ))}
          </Box>

        <Box display={'flex'} gap={2} flex={0.5}>
          <Button 
            sx={{fontWeight: 550, 
            width: '180px', height: '45px'}} 
            variant='contained'
            color="warning"
            onClick={() => navigate('/auth')}
          >
            Register / Login
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
}
