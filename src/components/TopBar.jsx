import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';

export default function TopBar({ onLogin, onRegister }) {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer - 1 }}
      
    >
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 550}}>
          Students Performance Anayltics Platform
        </Typography>
        <Box display={'flex'} gap={2}>
          <Button sx={{fontWeight: 550}} variant='contained' color="warning" onClick={onRegister}>Register</Button>
          <Button sx={{fontWeight: 550}} variant='contained' color="warning" onClick={onLogin}>Login</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
