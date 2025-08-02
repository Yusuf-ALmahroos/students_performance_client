import {
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
  Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const navBarOptions = ['Profile','Dashboard', 'Students']
const Nav = () => {
  const navigate = useNavigate();

  return (
    <Drawer
      variant="permanent"
      open
      sx={{
        "& .MuiDrawer-paper": {
          width: 120,
          boxSizing: 'border-box',
          bgcolor: 'primary.main',
          color: 'white',
        }
      }}
    >
      <Toolbar />
      <List>
        {navBarOptions.map((text) => (
          <ListItem key={text}>
            <Button 
              sx={{fontWeight: 600}} 
              variant='text' 
              color="white"
              onClick={() => {navigate(`/${text.toLocaleLowerCase()}`)}}
            >{text}</Button>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default Nav