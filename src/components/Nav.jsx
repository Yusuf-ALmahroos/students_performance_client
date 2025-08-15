import { 
  AppBar, 
  Typography, 
  Box, 
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { logOutUser } from '../../services/auth';
import { useContext, useEffect, useState } from 'react';
import { mainContext } from '../App';

const HOME = '/'
const PROFILE = '/profile'
const DASHBOARD = '/dashboard'

const Nav = () => {
  const {user, setUser} = useContext(mainContext)
  const [current, setCurrent] = useState(HOME)

  const navigate = useNavigate();
  const handleLogout = () => {
    logOutUser().then(() => {
      setUser(null)
      navigate('/')
    })
  }
  useEffect(() => {if(!user) setCurrent(HOME)}, [user])
    
  const navBtnSx = {
    fontWeight: 550, 
    width: 'fit-content',
    height: '45px',
    px: 2
  }

  const handleClick = (route) => {
    setCurrent(route)
    navigate(route)
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
        <Typography justifySelf={'flex-start'} variant="h5" sx={{fontWeight: 550}} flex={1.5}>
          Students Performance Anayltics Platform
        </Typography>
          <Box flex={1.5} display={'flex'} gap={1}>
            <Button 
              sx={navBtnSx} 
              variant={current === HOME ? 'contained' :'text'}  
              color={current === HOME ? "warning" : "white"} 
              onClick = {(() => handleClick(HOME))}>Home</Button>
            {(user) &&
              <>
                <Button 
                sx={navBtnSx}
                variant={current === PROFILE ? 'contained' :'text'} 
                color={current === PROFILE ? "warning" : "white"}  
                onClick = {(() => handleClick(PROFILE))}>Profile</Button>
                <Button 
                  sx={navBtnSx} 
                  variant={current === DASHBOARD ? 'contained' :'text'} 
                  color={current === DASHBOARD ? "warning" : "white"}  
                  onClick = {(() => handleClick(DASHBOARD))}>Dashboard</Button>
              </>
            }
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