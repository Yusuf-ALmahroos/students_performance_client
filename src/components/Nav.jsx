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

const navBarOptions = ['Profile','Dashboard', 'Students']
const Nav = () => {
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
          <ListItem>
            <Button sx={{fontWeight: 600}} variant='text' color="white">{text}</Button>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default Nav