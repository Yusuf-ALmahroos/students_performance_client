import { 
  AppBar, 
  Typography, 
  Box, 
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { logOutUser } from '../../services/auth';
import { useContext } from 'react';
import { mainContext } from '../App';


const navBarOptions = ['Home','Profile','Dashboard', 'Students']

const Nav = () => {
  const {user, setUser} = useContext(mainContext)
  const navigate = useNavigate();
  const permissionsOptions = navBarOptions.map((item) => (
    {
      title: item,
      isAllowed: (item === 'Home') ? true : (
        user ? true : false
      )
    }
  ))
  console.log(permissionsOptions)
  const handleLogout = () => {
    logOutUser().then(() => {
      setUser(null)
      navigate('/')
    })

  }


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
          {permissionsOptions.map((item) => (
            (item.isAllowed) && (
              <Button 
                key={item.title}
                sx={{fontWeight: 600, height: '45px'}} 
                variant='text' 
                color="white"
                onClick={() => {navigate(`/${item.title.toLocaleLowerCase()}`)}}
              >{item.title}</Button>
            )
          ))}
          </Box>

        <Box display={'flex'} gap={2} flex={0.5}>
          {(user) ? (
            <Button 
              sx={{fontWeight: 550, 
              width: '180px', height: '45px'}} 
              variant='contained'
              color="warning"
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : (
            <Button 
              sx={{fontWeight: 550, 
              width: '180px', height: '45px'}} 
              variant='contained'
              color="warning"
              onClick={() => navigate('/auth')}
            >
              Register / Login
            </Button>
          )}

        </Box>
      </Box>
    </AppBar>
  );
}

export default Nav;